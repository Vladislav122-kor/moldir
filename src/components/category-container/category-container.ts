import Component from '../../utils/component';
import Goods from '../../assets/files/goods';
import { Category } from '../../interfaces/index';
import FilterContainer from '../../instruments/filters-creation/filters-creation';
import ScrollUp from '../../instruments/scrollUp/scrollUp';
import CardCreation from '../../instruments/card-creation/card-creation';

import './category-container.scss';

class CategoriesContainer extends Component {
  private currentPath: string[];
  private currentPathNames: string[];
  private prices: number[];
  private chosenCategories: Category[];
  private container: Component;
  private navigation: Component;
  private content: Component;
  private filterContainer: FilterContainer;
  private panelCards: Component;
  private title: Component;
  private count: Component;
  private cards: Component;
  private scrollUp: ScrollUp;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['category-container']);

    this.currentPath = window.location.hash.slice(2).split('/').slice(1);
    this.currentPathNames = [];
    this.prices = [0, 0];
    this.chosenCategories = [] as Category[];
    
    if (this.currentPath.length === 2) {
      findOneCategory: for (let category of Goods) {
        if (category.subCategory[1] === this.currentPath[1]) {
          this.chosenCategories.push(category);
          this.currentPathNames[1] = category.subCategory[0];
          break findOneCategory;
        }
      }
    } else {
      for (let category of Goods) {
        if (category.category[1] === this.currentPath[0]) { this.chosenCategories.push(category) }
      }
    }
    this.currentPathNames[0] = this.chosenCategories[0].category[0];
    this.container = new Component(this.element, 'div', ['category-container__container']);

    this.navigation = new Component(this.container.element, 'div', ['category-container__navigation']);
    this.createNavigation();

    this.content = new Component(this.container.element, 'div', ['category-container__content']);
    this.filterContainer = new FilterContainer(this.content.element, this.chosenCategories);
    this.panelCards = new Component(this.content.element, 'div', ['category-container__content__panel']);

    this.title = new Component(this.panelCards.element, 'h2', ['category-container__content__panel__title'], `${this.currentPathNames[this.currentPathNames.length - 1]}`);
    this.count = new Component(this.panelCards.element, 'div', ['category-container__content__panel__count']);

    this.cards = new Component(this.panelCards.element, 'div', ['category-container__content__panel__cards']);
    this.createCards();

    this.scrollUp = new ScrollUp(this.container.element);
    this.scrollUp.element.classList.add('category-container__container__scroll-up');

    this.experimentalFunction();
  }

  private createCards() {
    let cardsCount = 0;

    for (let category of this.chosenCategories) {
      const categoriesInfo = [category.category[0], category.subCategory[0], category.category[1], category.subCategory[1]];
      for (let card of category.cards) {
        this.cards.element.appendChild(CardCreation.createCard(card, 'three', categoriesInfo));

        if (card.price <= this.prices[0] || this.prices[0] === 0) { this.prices[0] = card.price }
        if (card.price >= this.prices[1]) { this.prices[1] = card.price }

        cardsCount++;
      }
    }

    this.count.element.innerHTML = `Найдено товаров: ${cardsCount}`;
  }

  private createNavigation() {
    const navNames = ['Главная', ...this.currentPathNames];
    const navLinks = ['#/', ...this.currentPath];

    for (let i = 0; i < navNames.length; i++) {
      const element = new Component(this.navigation.element, 'a', ['category-container__navigation__element'], `${navNames[i]}`);

      if (i !== navNames.length - 1) {
        const path = navNames[i] === 'Главная' ? '#/' : createPath();

        function createPath() {
          const pathes = ['#', 'catalog'];
          for (let e = 1; e <= i; e++) { pathes.push(navLinks[e]) }

          return pathes.join('/');
        }

        element.element.classList.add('link');
        element.element.setAttribute('href', `${path}`);
        const arrow = new Component(this.navigation.element, 'div', ['category-container__navigation__arrow']);
        arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
      } else { element.element.style.textDecoration = 'underline' }
    }
  }



  private experimentalFunction() {
    const results: string[] = [];

    for (let category of Goods) {
      if (category.category[0] === 'Смесители') {
        for (let card of category.cards) {
          for (let characteristic of card.characteristics) {

            if (characteristic[0] !== 'Ширина, мм' && characteristic[0] !== 'Глубина, мм' && characteristic[0] !== 'Высота, мм') {
              for (let elem of characteristic[1]) {
                if (!results.includes(elem)) { results.push(elem) }
              }
            }
          }
        }
      }
    }

    console.log(results)
  }

  /*private experimentalFunction() {
    const results: (string | [string, string[]])[] = [];

    for (let category of Goods) {
      if (category.category[0] === 'Смесители') {
        for (let card of category.cards) {
          for (let characteristic of card.characteristics) {
            if (!results.includes(characteristic[0])) { results.push(characteristic[0]) }
          }
        }
      }
    }

    console.log(results)
  }*/
}

export default CategoriesContainer;