import Component from '../../utils/component';
import Goods from '../../assets/files/goods';
import { Category } from '../../interfaces/index';

import './categories-container.scss';

class CategoryContainer extends Component {
  private categories: Category[];
  private categoriesLink: string;
  private container: Component;
  private filterBlock: Component;
  private panelCards: Component;
  private titleContainer: Component;
  private title: Component;
  private line: Component;
  private sortingContainer: Component;
  private sortingTitle: Component;
  private sortingIncrease: Component;
  private sortingDecrease: Component;
  private cards: Component;
  private clearButton: Component;
  private prices: number[];
  private sortingValue: string;
  private navigation: Component;
  private main: Component;
  private arrow: Component;
  private currentCategory: Component;
  
  constructor(parentNode: HTMLElement, categoriesLink: string) {
    super(parentNode, 'div', ['category-container']);
    this.categoriesLink = categoriesLink;
    this.categories = [] as Category[];
    // search for training clicked which was clicked (with the help of trainingLink)
    Goods.forEach((item) => {
      if (item.link.includes(this.categoriesLink)) { this.categories.push(item) }
    });
    
    // define default prices for filter
    this.prices = [0, 0];
    this.definePrices();
    this.sortingValue = '';

    this.navigation = new Component(this.element, 'div', ['category-container__navigation']);
    this.main = new Component(this.navigation.element, 'a', ['category-container__navigation__main'], 'Главная');
    this.main.element.setAttribute('href', '#/');
    this.arrow = new Component(this.navigation.element, 'div', ['category-container__navigation__arrow']);
    this.arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.currentCategory = new Component(this.navigation.element, 'a', ['category-container__navigation__current-category'], `${this.categories[0].name.split(' ')[0]}`);

    this.container = new Component(this.element, 'div', ['category-container__container']);

    this.filterBlock = new Component(this.container.element, 'div', ['category-container__filter']);
    this.createFilters();
    this.clearButton = new Component(this.filterBlock.element, 'div', ['category-container__filter__clear'], 'Сбросить настройки');
    this.panelCards = new Component(this.container.element, 'div', ['category-container__panel']);

    this.titleContainer = new Component(this.panelCards.element, 'div', ['category-container__panel__title-cont']);
    this.title = new Component(this.titleContainer.element, 'h2', ['category-container__panel__title-cont__title'], `${this.categories[0].name.split(' ')[0]}`);
    this.line = new Component(this.titleContainer.element, 'div', ['category-container__panel__title-cont__line']);

    this.sortingContainer = new Component(this.panelCards.element, 'div', ['category-container__panel__sorting']);
    this.sortingTitle = new Component(this.sortingContainer.element, 'p', ['category-container__panel__sorting-title'], 'Сортировать по стоимости:');
    this.sortingIncrease = new Component(this.sortingContainer.element, 'p', ['category-container__panel__sorting-increase'], 'по возрастанию');
    this.sortingDecrease = new Component(this.sortingContainer.element, 'p', ['category-container__panel__sorting-decrease'], 'по убыванию');

    this.cards = new Component(this.panelCards.element, 'div', ['category-container__panel__cards']);
    this.defineCards();

    this.filterBlock.element.addEventListener('input', (e) => {
      if ((e.target as HTMLElement).classList.contains('number')) {
        this.defineCards();
      }
    })

    this.filterBlock.element.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).className.includes('clear')) {
        this.clearFilters();
      }
    })

    this.sortingContainer.element.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).className.includes('crease')) {
        if ((e.target as HTMLElement).className.includes('increase') && !((e.target as HTMLElement).classList.contains('active'))) {
          this.sortingValue = 'increase';
          (e.target as HTMLElement).classList.add('active');
          document.querySelector('.category-container__panel__sorting-decrease')?.classList.remove('active');
        } else if ((e.target as HTMLElement).className.includes('decrease') && !((e.target as HTMLElement).classList.contains('active'))) {
          this.sortingValue = 'decrease';
          (e.target as HTMLElement).classList.add('active');
          document.querySelector('.category-container__panel__sorting-increase')?.classList.remove('active');
        } else if ((e.target as HTMLElement).className.includes('increase') && (e.target as HTMLElement).classList.contains('active')) {
          this.sortingValue = '';
          (e.target as HTMLElement).classList.remove('active');
        } else if ((e.target as HTMLElement).className.includes('decrease') && (e.target as HTMLElement).classList.contains('active')) {
          this.sortingValue = '';
          (e.target as HTMLElement).classList.remove('active');
        }
        this.defineCards();
      }
    })
  }

  private createFilters() {
    // price
    const filterItem = new Component(this.filterBlock.element, 'div', ['category-container__filter__filter-item']);
    const title = new Component(filterItem.element, 'h4', ['category-container__filter__filter-item__title'], 'Цена');
    const inputBlock = new Component(filterItem.element, 'div', ['category-container__filter__filter-item__inputs']);
    const minPrice = new Component(inputBlock.element, 'input', ['category-container__filter__filter-item__inputs__minPrice', 'number']);
    minPrice.element.setAttribute('type', 'number');
    minPrice.element.setAttribute('value', `${this.prices[0]}`);
    const dash = new Component(inputBlock.element, 'p', ['category-container__filter__filter-item__inputs__dash'], '-');
    const maxPrice = new Component(inputBlock.element, 'input', ['category-container__filter__filter-item__inputs__maxPrice', 'number']);
    maxPrice.element.setAttribute('type', 'number');
    maxPrice.element.setAttribute('value', `${this.prices[1]}`);
  }

  private defineCards() {
    let cards = [];
    // filter by price
    const minPrice = document.querySelector('.category-container__filter__filter-item__inputs__minPrice');
    const maxPrice = document.querySelector('.category-container__filter__filter-item__inputs__maxPrice');
    for (let elem of this.categories) {
      for (let item of elem.cards) {
        if (item.price >= Number((minPrice as HTMLInputElement).value) && item.price <= Number((maxPrice as HTMLInputElement).value)) {
          cards.push(item);
        }
      }
    }
    // sorting by price
    switch(this.sortingValue) {
      case 'increase':
        cards.sort((a, b) => a.price - b.price);
        break;
      case 'decrease':
        cards.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    this.createCards(cards);
  }

  private createCards(cards: Category["cards"]) {
    this.cards.element.innerHTML = '';
    for (let elem of cards) {
      const card = new Component(this.cards.element, 'a', ['category-container__panel__cards__card']);
      card.element.setAttribute('href', `#/catalog/${this.categoriesLink}/${elem.preLink}/${elem.link}`);
      const photo = new Component(card.element, 'div', ['category-container__panel__cards__card__img']);
      photo.element.style.backgroundImage = `url('./assets/img/${elem.photo[0]}/1.${elem.photo[1]}')`;
      const name = new Component(card.element, 'p', ['category-container__panel__cards__card__name'], `${elem.name}`);
      const description = new Component(card.element, 'div', ['category-container__panel__cards__card__description']);
      const vendorCode = new Component(description.element, 'p', ['category-container__panel__cards__card__vendor-code']);
      vendorCode.element.innerHTML = `<u>Артикул</u>: ${(elem.link).toUpperCase()}`;
      const presence = new Component(description.element, 'p', ['category-container__panel__cards__card__presence'], `${elem.presence}`);
      switch(elem.presence) {
        case 'на складе':
          presence.element.style.color = 'green';
          break;
        default:
          presence.element.style.color = 'orange';
          break;
      }
      const price = new Component(card.element, 'p', ['category-container__panel__cards__card__price'], `${elem.price} BYN/шт.`);
    }
  }

  private clearFilters() {
    // make price by default
    const minPrice = document.querySelector('.category-container__filter__filter-item__inputs__minPrice');
    const maxPrice = document.querySelector('.category-container__filter__filter-item__inputs__maxPrice');
    (minPrice as HTMLInputElement).value = `${this.prices[0]}`;
    (maxPrice as HTMLInputElement).value = `${this.prices[1]}`;
    //make sorting by default
    this.sortingValue = '';
    document.querySelector('.category-container__panel__sorting-increase')?.classList.remove('active');
    document.querySelector('.category-container__panel__sorting-decrease')?.classList.remove('active');
    this.defineCards();
  }

  private definePrices() {
    for (let elem of this.categories) {
      for (let item of elem.cards) {
        if (item.price <= this.prices[0] || this.prices[0] === 0) {
          this.prices[0] = item.price;
        }
        if (item.price >= this.prices[1]) {
          this.prices[1] = item.price;
        }
      }
    }
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default CategoryContainer;