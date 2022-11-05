import Component from '../../utils/component';
import Goods from '../../assets/files/goods';
import { Category } from '../../../src/interfaces/index';

import './category-container.scss';

class CategoryContainer extends Component {

  private category: Category;

  private categoryLink: string;

  private container: Component;

  private content: Component;
  
  private filterBlock: Component;

  private panelCards: Component;

  private titleContainer: Component;

  private title: Component;

  private line: Component;
  
  constructor(parentNode: HTMLElement, categoryLink: string) {
    super(parentNode, 'div', ['category-container']);
    this.categoryLink = categoryLink;
    this.category = {} as Category;

    // search for training clicked which was clicked (with the help of trainingLink)
    Goods.forEach((item) => {
      if (item.link === this.categoryLink) { this.category = item }
    });

    this.container = new Component(this.element, 'div', ['category-container__container']);

    this.content = new Component(this.container.element, 'div', ['category-container__container__content']);
    this.filterBlock = new Component(this.content.element, 'div', ['category-container__container__content__filter']);
    this.defineFilters();
    this.panelCards = new Component(this.content.element, 'div', ['category-container__container__content__panel']);

    this.titleContainer = new Component(this.panelCards.element, 'div', ['categories-block__container__content__panel__title-cont']);
    this.title = new Component(this.titleContainer.element, 'h2', ['categories-block__container__content__panel__title-cont__title'], `${this.category.name}`);
    this.line = new Component(this.titleContainer.element, 'div', ['categories-block__container__content__panel__title-cont__line']);
  }

  private defineFilters() {
    const characteristics: [string, string[]][] = [];
    const size: [string, number, number][] = [];
    const price: number[] = [0, 0];

    // create massive for characteristics
    for (let elem of this.category.cards[0].characteristics) {
      characteristics.push([elem[0], []]);
    }

    // create massive for size
    for (let elem of this.category.cards[0].size) {
      size.push([elem[0], 0, 0]);
    }
    
    // cards iteration
    for (let elem of this.category.cards) {
      for (let i = 0; i < elem.characteristics.length; i += 1) {
        elem.characteristics[i][1].forEach((item) => !characteristics[i][1].includes(item) ? characteristics[i][1].push(item) : 0);
      }

      // min max size
      for (let i = 0; i < elem.size.length; i += 1) {
        if (elem.size[i][1] <= size[i][1] || size[i][1] === 0) {
          size[i][1] = elem.size[i][1];
        }

        if (elem.size[i][1] >= size[i][2]) {
          size[i][2] = elem.size[i][1];
        }
      }

      // min max price
      if (elem.price <= price[0] || price[0] === 0) {
        price[0] = elem.price;
      }

      if (elem.price >= price[1]) {
        price[1] = elem.price;
      }
    }

    
    
    this.createFilters(characteristics, size, price);
  }

  private createFilters(characteristics: [string, string[]][], size: [string, number, number][], price: number[]) {
    const priceBlock = new Component(this.filterBlock.element, 'div', ['category-container__container__content__filter__price-block']);
    const title = new Component(priceBlock.element, 'h4', ['category-container__container__content__filter__price-block__title'], 'Цена');
    const inputBlock = new Component(priceBlock.element, 'div', ['category-container__container__content__filter__price-block__inputs']);
    const input_1 = new Component(inputBlock.element, 'input', ['category-container__container__content__filter__price-block__inputs__input_1']);
    input_1.element.setAttribute('value', `${price[0]}`);
    const dash = new Component(inputBlock.element, 'p', ['category-container__container__content__filter_price-block__inputs__dash'], '-');
    const input_2 = new Component(inputBlock.element, 'input', ['category-container__container__content__filter_price-block__inputs__input_2']);
    input_2.element.setAttribute('value', `${price[1]}`);

    for (let elem of characteristics) {
      const charBlock = new Component(this.filterBlock.element, 'div', ['category-container__container__content__filter__char-block']);
      const title = new Component(charBlock.element, 'h4', ['category-container__container__content__filter__char-block__title'], `${elem[0]}`);
      const clauseBlock = new Component(charBlock.element, 'div', ['category-container__container__content__filter__char-block__clause-block']);
      for (let item of elem[1]) {
        const checkboxBlock = new Component(clauseBlock.element, 'div', ['category-container__container__content__filter__char-block__clause-block__checkbox-block']);
        const checkbox = new Component(clauseBlock.element, 'input', ['category-container__container__content__filter__char-block__clause-block__checkbox-block__checkbox']);
        checkbox.element.setAttribute('type', 'checkbox');
        const name = new Component(clauseBlock.element, 'p', ['category-container__container__content__filter__char-block__clause-block__checkbox-block__name'], `${item}`);
      }
    }

    for (let elem of size) {
      const charBlock = new Component(this.filterBlock.element, 'div', ['category-container__container__content__filter__char-block']);
      const title = new Component(charBlock.element, 'h4', ['category-container__container__content__filter__char-block__title'], `${elem[0]}`);
      const inputBlock = new Component(charBlock.element, 'div', ['category-container__container__content__filter__char-block__inputs']);
      const input_1 = new Component(inputBlock.element, 'input', ['category-container__container__content__filter__char-block__inputs__input_1']);
      input_1.element.setAttribute('value', `${elem[1]}`);
      const dash = new Component(inputBlock.element, 'p', ['category-container__container__content__filter_char-block__inputs__dash'], '-');
      const input_2 = new Component(inputBlock.element, 'input', ['category-container__container__content__filter_char-block__inputs__input_2']);
      input_2.element.setAttribute('value', `${elem[2]}`);
    }
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default CategoryContainer;