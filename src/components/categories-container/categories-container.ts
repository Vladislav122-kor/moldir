import Component from '../../utils/component';
import Goods from '../../assets/files/goods';
import { Category } from '../../interfaces/index';
import ScrollUp from '../../instruments/scrollUp/scrollUp';

import './categories-container.scss';

class CategoriesContainer extends Component {
  private categories: Category[];
  private categoriesLink: string;
  private container: Component;
  private filterBlock: Component;
  private panelCards: Component;
  private title: Component;
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
  private content: Component;
  private sortingButtons: Component;
  private count: Component;
  private scrollUp: ScrollUp;
  
  constructor(parentNode: HTMLElement, categoriesLink: string) {
    super(parentNode, 'section', ['categories-container']);
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

    this.container = new Component(this.element, 'div', ['categories-container__container']);

    this.navigation = new Component(this.container.element, 'div', ['categories-container__navigation']);
    this.main = new Component(this.navigation.element, 'a', ['categories-container__navigation__main'], 'Главная');
    this.main.element.setAttribute('href', '#/');
    this.arrow = new Component(this.navigation.element, 'div', ['categories-container__navigation__arrow']);
    this.arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.currentCategory = new Component(this.navigation.element, 'a', ['categories-container__navigation__current-category'], `${this.categories[0].name.split('|')[0]}`);

    this.content = new Component(this.container.element, 'div', ['categories-container__content']);

    this.filterBlock = new Component(this.content.element, 'div', ['categories-container__content__filter']);
    this.createFilters();
    this.clearButton = new Component(this.filterBlock.element, 'div', ['categories-container__content__filter__clear'], 'Сбросить настройки');
    this.panelCards = new Component(this.content.element, 'div', ['categories-container__content__panel']);

    this.title = new Component(this.panelCards.element, 'h2', ['categories-container__content__panel__title'], `${this.categories[0].name.split('|')[0]}`);

    this.count = new Component(this.panelCards.element, 'div', ['category-container__content__panel__count']);

    this.sortingContainer = new Component(this.panelCards.element, 'div', ['categories-container__content__panel__sorting']);
    this.sortingTitle = new Component(this.sortingContainer.element, 'div', ['categories-container__content__panel__sorting-title'], 'Сортировать по стоимости:');
    this.sortingButtons = new Component(this.sortingContainer.element, 'div', ['categories-container__content__panel__sorting-buttons']);
    this.sortingIncrease = new Component(this.sortingButtons.element, 'div', ['categories-container__content__panel__sorting-buttons__sorting-increase'], 'по возрастанию');
    this.sortingDecrease = new Component(this.sortingButtons.element, 'div', ['categories-container__content__panel__sorting-buttons__sorting-decrease'], 'по убыванию');

    this.cards = new Component(this.panelCards.element, 'div', ['categories-container__content__panel__cards']);
    this.defineCards();

    this.scrollUp = new ScrollUp(this.container.element);
    this.scrollUp.element.classList.add('category-container__container__scroll-up');

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
          document.querySelector('.categories-container__content__panel__sorting-buttons__sorting-decrease')?.classList.remove('active');
        } else if ((e.target as HTMLElement).className.includes('decrease') && !((e.target as HTMLElement).classList.contains('active'))) {
          this.sortingValue = 'decrease';
          (e.target as HTMLElement).classList.add('active');
          document.querySelector('.categories-container__content__panel__sorting-buttons__sorting-increase')?.classList.remove('active');
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
    const filterItem = new Component(this.filterBlock.element, 'div', ['categories-container__content__filter__filter-item']);
    const title = new Component(filterItem.element, 'h4', ['categories-container__content__filter__filter-item__title'], 'Цена');
    const inputBlock = new Component(filterItem.element, 'div', ['categories-container__content__filter__filter-item__inputs']);
    const minPrice = new Component(inputBlock.element, 'input', ['categories-container__content__filter__filter-item__inputs__minPrice', 'number']);
    minPrice.element.setAttribute('type', 'number');
    minPrice.element.setAttribute('value', `${this.prices[0]}`);
    const dash = new Component(inputBlock.element, 'div', ['categories-container__content__filter__filter-item__inputs__dash']);
    dash.element.innerHTML = '&#8212';
    const maxPrice = new Component(inputBlock.element, 'input', ['categories-container__content__filter__filter-item__inputs__maxPrice', 'number']);
    maxPrice.element.setAttribute('type', 'number');
    maxPrice.element.setAttribute('value', `${this.prices[1]}`);
  }

  private defineCards() {
    let cards = [];
    // filter by price
    const minPrice = document.querySelector('.categories-container__content__filter__filter-item__inputs__minPrice');
    const maxPrice = document.querySelector('.categories-container__content__filter__filter-item__inputs__maxPrice');
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
    this.count.element.innerHTML = `Найдено товаров: ${cards.length}`;
    this.createCards(cards);
  }

  private createCards(cards: Category["cards"]) {
    this.cards.element.innerHTML = '';
    let i = 1;
    for (let elem of cards) {
      const card = new Component(this.cards.element, 'a', ['categories-container__content__panel__cards__card']);
      card.element.setAttribute('href', `#/catalog/${this.categoriesLink}/${elem.preLink}/${elem.link}`);
      const photo = new Component(card.element, 'div', ['categories-container__content__panel__cards__card__img']);
      photo.element.style.backgroundImage = `url('./assets/img/${elem.photo[0]}/1.${elem.photo[1]}')`;
      const name = new Component(card.element, 'p', ['categories-container__content__panel__cards__card__name'], `${elem.name}`);
      const description = new Component(card.element, 'div', ['categories-container__content__panel__cards__card__description']);
      const vendorCode = new Component(description.element, 'p', ['categories-container__content__panel__cards__card__vendor-code']);
      vendorCode.element.innerHTML = `<u>Артикул</u>: ${(elem.link).toUpperCase()}`;
      const presence = new Component(description.element, 'p', ['categories-container__content__panel__cards__card__presence']);
      presence.element.innerHTML = `<u>Наличие</u>: <span class='categories-container-create-color-${i}'>${elem.presence}</span>`;
      if (elem.presence === 'на складе') {
        (document.querySelector(`.categories-container-create-color-${i}`) as HTMLSpanElement).style.color = 'green';
      } else {
        (document.querySelector(`.categories-container-create-color-${i}`) as HTMLSpanElement).style.color = 'orange';
      }
      const price = new Component(card.element, 'p', ['categories-container__content__panel__cards__card__price'], `${elem.price} BYN/шт.`);
      i++;
    }
  }

  private clearFilters() {
    // make price by default
    const minPrice = document.querySelector('.categories-container__content__filter__filter-item__inputs__minPrice');
    const maxPrice = document.querySelector('.categories-container__content__filter__filter-item__inputs__maxPrice');
    (minPrice as HTMLInputElement).value = `${this.prices[0]}`;
    (maxPrice as HTMLInputElement).value = `${this.prices[1]}`;
    //make sorting by default
    this.sortingValue = '';
    document.querySelector('.categories-container__content__panel__sorting-increase')?.classList.remove('active');
    document.querySelector('.categories-container__content__panel__sorting-decrease')?.classList.remove('active');
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
}

export default CategoriesContainer;