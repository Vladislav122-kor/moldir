import Component from '../../utils/component';
import { Card } from '../../../src/interfaces/index';
import Goods from '../../assets/files/goods';
import PopularGoods from '../main-container/popular-goods/popular-goods';
import CardCreation from '../../instruments/card-creation/card-creation';

import './card-container.scss';

class CardContainer extends Component {
  private card: Card;
  private currentPath: string[];
  private currentPathNames: string[];
  private container: Component;
  private navigation: Component;
  private content: Component;
  private title: Component;
  private startBlock: Component;
  private photoBlock: Component;
  private photo: Component;
  private photos: Component;
  private startDescription: Component;
  private price: Component;
  private startInfo: Component;
  private presence: Component;
  private guarantee: Component;
  private detailed: Component;
  private deliveryBox: Component;
  private about: Component;
  private additional: Component;
  private characteristics: Component;
  private sameBlock: Component;
  private popularGoods: PopularGoods;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['card-container']);

    this.currentPath = window.location.hash.slice(2).split('/').slice(1);
    this.currentPathNames = [];
    this.card = {} as Card;
    
    findCategoryAndProduct: for (let category of Goods) {
      if (category.subCategory[1] === this.currentPath[1]) {

        this.currentPathNames[0] = category.category[0];
        this.currentPathNames[1] = category.subCategory[0];

        for (let card of category.cards) {

          if (card.id === this.currentPath[2]) {
            this.card = card;
            this.currentPathNames[2] = card.name;
            break findCategoryAndProduct;
          }
        }
      }
    }

    this.container = new Component(this.element, 'div', ['card-container__container']);

    this.navigation = new Component(this.container.element, 'div', ['card-container__navigation']);
    this.createNavigation();

    this.content = new Component(this.container.element, 'div', ['card-container__content']);
    this.title = new Component(this.content.element, 'h2', ['card-container__content__title'], `${this.card.name}`);

    this.startBlock = new Component(this.content.element, 'div',['card-container__content__start-block']);

    this.photoBlock = new Component(this.startBlock.element, 'div',['card-container__content__start-block__photo-block']);
    this.photo = new Component(this.photoBlock.element, 'img',['card-container__content__start-block__photo-block__photo']);
    (this.photo.element as HTMLImageElement).src = `./assets/img/${this.card.id}/1.jpg`;
    (this.photo.element as HTMLImageElement).setAttribute('alt', 'Фото товара');
    this.photos = new Component(this.photoBlock.element, 'div',['card-container__content__start-block__photo-block__photos']);
    this.createPhotos();

    this.startDescription = new Component(this.startBlock.element, 'div',['card-container__content__start-block__start-des']);
    this.price = new Component(this.startDescription.element, 'p',['card-container__content__start-block__start-des__price'], `${this.card.price} BYN/шт.`);
    this.startInfo = new Component(this.startDescription.element, 'div',['card-container__content__start-block__start-des__start-info']);
    this.presence = new Component(this.startInfo.element, 'p',['card-container__content__start-block__start-des__presence']);
    this.presence.element.innerHTML = `Наличие: <span class='card-container-create-color'>${this.card.presence}</span>`;

    if (this.card.presence === 'на складе') { (document.querySelector('.card-container-create-color') as HTMLSpanElement).style.color = 'green' } 
    else { (document.querySelector('.card-container-create-color') as HTMLSpanElement).style.color = '#DFA974' }

    this.guarantee = new Component(this.startInfo.element, 'p',['card-container__content__start-block__start-des__guarantee'], 'Гарантия: 1 год');
    this.detailed = new Component(this.startInfo.element, 'a',['card-container__content__start-block__start-des__detailed'], 'Характеристики');
    this.detailed.element.setAttribute('href', '#characteristics');
    this.deliveryBox = new Component(this.startDescription.element, 'div',['card-container__content__start-block__start-des__delivery-box']);
    this.deliveryBox.element.innerHTML = 'Заказать товар можно по номеру телефона <b>+375 44 505 39 49</b> (звонок/Viber), через Instagram, или написав на почту moldir.minsk@mail.ru. Раздел "Корзина" временно не работает, приносим извинения за доставленные неудобства.<br>- С правилами оплаты и доставки товара можно ознакомиться в разделе <a href="#/payment-and-delivery">Оплата и доставка</a>.<br>- О производителе можно узнать <a href="#/about-melana">здесь</a>.';

    this.about = new Component(this.content.element, 'div', ['card-container__content__about']);
    this.about.element.id = 'characteristics';
    this.additional = new Component(this.about.element, 'p', ['card-container__content__about__additional']);
    if (this.card.additional) { this.additional.element.innerHTML = `<b>Дополнительно:</b> ${this.card.additional}` }
    
    this.characteristics = new Component(this.about.element, 'div', ['card-container__content__about__characteristics']);
    this.createCharacteristics();

    this.sameBlock = new Component(this.content.element, 'div', ['card-container__content__same']);
    if (this.card.same[0]) { this.createSameCards() }

    this.popularGoods = new PopularGoods(this.element);
  }

  private createNavigation() {
    const navNames = ['Главная', ...this.currentPathNames];
    const navLinks = ['#/', ...this.currentPath];

    for (let i = 0; i < navNames.length; i++) {
      const element = new Component(this.navigation.element, 'a', ['card-container__navigation__element'], `${navNames[i]}`);

      if (i !== navNames.length - 1) {
        const path = navNames[i] === 'Главная' ? '#/' : createPath();

        function createPath() {
          const pathes = ['#', 'catalog'];
          for (let e = 1; e <= i; e++) { pathes.push(navLinks[e]) }

          return pathes.join('/');
        }

        element.element.classList.add('link');
        element.element.setAttribute('href', `${path}`);
        const arrow = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow']);
        arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
      } else {
        element.element.style.textDecoration = 'underline';
      }
    }
  }

  private createPhotos() {
    if (this.card.photoAmount > 1) {
      let i = 1;

      while(i <= this.card.photoAmount) {
        const littlePhoto = new Component(this.photos.element, 'div',['card-container__content__start-block__photo-block__photos__element']);
        littlePhoto.element.style.backgroundImage = `url("./assets/img/${this.card.id}/${i}.jpg")`;
        littlePhoto.element.setAttribute('data-number', `${i}`);
        if (i === 1) { littlePhoto.element.classList.add('active') }
        i++;
      }
  
      this.photos.element.addEventListener('click', (e) => {
        if ((e.target as HTMLDivElement).className.includes('element')) {
          const imgs = document.querySelectorAll('[data-number]');
          for (let elem of Array.from(imgs)) { elem.classList.remove('active') }
          (e.target as HTMLDivElement).classList.add('active');
          let number = (e.target as HTMLDivElement).dataset.number;
          (this.photo.element as HTMLImageElement).src = `./assets/img/${this.card.id}/${number}.jpg`;
        }
      });
    }
  }

  private createCharacteristics() {
    for (let characteristic of this.card.characteristics) {
      const block = new Component(this.characteristics.element, 'div', ['card-container__content__about__characteristics__block']);
      const parameter = new Component(block.element, 'p', ['card-container__content__about__characteristics__block__parameter'], `${characteristic[0]}`);
      const spaces = new Component(block.element, 'div', ['card-container__content__about__characteristics__block__spaces']);

      for (let item of characteristic[1]) {
        const valueBlock = new Component(block.element, 'div', ['card-container__content__about__characteristics__block__value-block']);
        const value = new Component(valueBlock.element, 'p', ['card-container__content__about__characteristics__block__value-block__value'], `${item}`);
      }
    }
  }

  private createSameCards() {
    const sameTitle = new Component(this.sameBlock.element, 'h3', ['card-container__content__same__same-title'], 'Похожие товары');
    const cards = new Component(this.sameBlock.element, 'div', ['card-container__content__same__cards']);

    for (let category of Goods) {
      if (category.subCategory[1] === this.currentPath[1]) {
        const categoriesInfo = [category.category[0], category.subCategory[0], category.category[1], category.subCategory[1]];

        for (let card of category.cards) {
          if (this.card.same.includes(card.id)) {
            cards.element.appendChild(CardCreation.createCard(card, 'four', categoriesInfo));
          }
        }

        break;
      }
    }
  }
}

export default CardContainer;