import Component from '../../utils/component';
import { Card } from '../../../src/interfaces/index';
import Goods from '../../assets/files/goods';
import PopularGoods from '../main-container/popular-goods/popular-goods';

import './card-container.scss';

class CardContainer extends Component {
  private cardLink: string;
  private card: Card;
  private container: Component;
  private navigation: Component;
  private main: Component;
  private arrow_1: Component;
  private currentCategory: Component;
  private currentCard: Component;
  private categoryName: string;
  private content: Component;
  private title: Component;
  private photoBlock: Component;
  private photo: Component;
  private  photos: Component;
  private startDescription: Component;
  private price: Component;
  private presence: Component;
  private vendorCode: Component;
  private deliveryBox: Component;
  private characteristics: Component;
  private preCategory: Component;
  private startBlock: Component;
  private detailed: Component;
  private about: Component;
  private additional: Component;
  private popularGoods: PopularGoods;
  private sameBlock: Component;
  
  constructor(parentNode: HTMLElement, cardLink: string) {
    super(parentNode, 'div', ['card-container']);
    this.cardLink = cardLink;
    this.categoryName = '';
    this.card = {} as Card;
    for (let elem of Goods) {
      if (elem.link === this.cardLink.split('/')[3]) {
        this.categoryName = elem.name;
        for (let item of elem.cards) {
          if (item.link === this.cardLink.split('/')[4]) {
            this.card = item;
            break;
          }
        }
        break;
      }
    }
    this.container = new Component(this.element, 'div', ['card-container__container']);
    this.navigation = new Component(this.container.element, 'div', ['card-container__navigation']);
    this.main = new Component(this.navigation.element, 'a', ['card-container__navigation__main'], 'Главная');
    this.main.element.setAttribute('href', '#/');
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow']);
    this.arrow_1.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.preCategory = new Component(this.navigation.element, 'a', ['card-container__navigation__pre-category'], `${this.categoryName.split('|')[0]}`);
    this.preCategory.element.setAttribute('href', `#/catalog/${this.cardLink.split('/')[2]}`);
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow']);
    this.arrow_1.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.currentCategory = new Component(this.navigation.element, 'a', ['card-container__navigation__current-category'], `${this.categoryName.split('|').join('')}`);
    this.currentCategory.element.setAttribute('href', `#/catalog/${this.cardLink.split('/')[2]}/${this.cardLink.split('/')[3]}`);
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow']);
    this.arrow_1.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.currentCard = new Component(this.navigation.element, 'a', ['card-container__navigation__current-card'], `${this.card.name}`);

    this.content = new Component(this.container.element, 'div', ['card-container__content']);
    this.title = new Component(this.content.element, 'h2', ['card-container__content__title'], `${this.card.name}`);

    this.startBlock = new Component(this.content.element, 'div',['card-container__content__start-block']);
    this.photoBlock = new Component(this.startBlock.element, 'div',['card-container__content__start-block__photo-block']);
    this.photo = new Component(this.photoBlock.element, 'div',['card-container__content__start-block__photo-block__photo']);
    this.photo.element.style.backgroundImage = `url("./assets/img/${this.card.photo[0]}/1.${this.card.photo[1]}")`;
    this.photos = new Component(this.photoBlock.element, 'div',['card-container__content__start-block__photo-block__photos']);
    this.createPhotos();
    this.startDescription = new Component(this.startBlock.element, 'div',['card-container__content__start-block__start-des']);
    this.price = new Component(this.startDescription.element, 'p',['card-container__content__start-block__start-des__price'], `${this.card.price} BYN/шт.`);
    this.presence = new Component(this.startDescription.element, 'p',['card-container__content__start-block__start-des__presence']);
    this.presence.element.innerHTML = `<u>Наличие</u>: <span class='card-container-create-color'>${this.card.presence}</span>`;
    if (this.card.presence === 'на складе') {
      (document.querySelector('.card-container-create-color') as HTMLSpanElement).style.color = 'green';
    } else {
      (document.querySelector('.card-container-create-color') as HTMLSpanElement).style.color = 'orange';
    }
    this.vendorCode = new Component(this.startDescription.element, 'p',['card-container__content__start-block__start-des__vendorCode']);
    this.vendorCode.element.innerHTML = `<u>Артикул</u>: ${(this.card.link).toUpperCase()}`;
    this.detailed = new Component(this.startDescription.element, 'a',['card-container__content__start-block__start-des__detailed'], 'ПОДРОБНЕЕ О ТОВАРЕ');
    this.detailed.element.setAttribute('href', '#characteristics');
    this.deliveryBox = new Component(this.startDescription.element, 'div',['card-container__content__start-block__start-des__delivery-box']);
    this.deliveryBox.element.innerHTML = 'Заказать товар можно по номеру +375 29 123 45 67 или вайбер на этот же номер.' + '\nДоставка осуществляется в пределах города Минска бесплатно. За пределы МКАД - 100% стоимости товара';

    this.about = new Component(this.content.element, 'div', ['card-container__content__about']);
    this.about.element.id = 'characteristics';
    this.additional = new Component(this.about.element, 'p', ['card-container__content__about__additional']);
    if (this.card.additional) { this.additional.element.innerHTML = `<b>Дополнительно:</b> ${this.card.additional}` }
    
    this.characteristics = new Component(this.about.element, 'div', ['card-container__content__about__characteristics']);
    this.createCharacteristics();

    this.sameBlock = new Component(this.content.element, 'div', ['card-container__content__same']);
    if (this.card.same[0]) {
      this.createCards();
    }

    this.popularGoods = new PopularGoods(this.element);
  }

  private createPhotos() {
    let size = +(this.card.photo[2]);
    if (size > 1) {
      let i = 1;
      while(i <= size) {
        const littlePhoto = new Component(this.photos.element, 'div',['card-container__content__start-block__photo-block__photos__element']);
        littlePhoto.element.style.backgroundImage = `url("./assets/img/${this.card.photo[0]}/${i}.${this.card.photo[1]}")`;
        littlePhoto.element.setAttribute('data-number', `${i}`);
        if (i === 1) {
          littlePhoto.element.classList.add('active');
        }
        i++;
      }
  
      this.photos.element.addEventListener('click', (e) => {
        if ((e.target as HTMLDivElement).className.includes('element')) {
          const imgs = document.querySelectorAll('[data-number]');
          for (let elem of Array.from(imgs)) {
            elem.classList.remove('active');
          }
          (e.target as HTMLDivElement).classList.add('active');
          let number = (e.target as HTMLDivElement).dataset.number;
          this.photo.element.style.backgroundImage = `url("./assets/img/${this.card.photo[0]}/${number}.${this.card.photo[1]}")`;
        }
      })
    }
    
  }

  private createCharacteristics() {
    for (let elem of this.card.characteristics) {
      const block = new Component(this.characteristics.element, 'div', ['card-container__content__about__characteristics__block']);
      const parameter = new Component(block.element, 'p', ['card-container__content__about__characteristics__block__parameter'], `${elem[0]}`);
      const spaces = new Component(block.element, 'div', ['card-container__content__about__characteristics__block__spaces']);
      for (let item of elem[1]) {
        const valueBlock = new Component(block.element, 'div', ['card-container__content__about__characteristics__block__value-block']);
        const value = new Component(valueBlock.element, 'p', ['card-container__content__about__characteristics__block__value-block__value'], `${item}`);
      }
    }
  }

  private createCards() {
    const sameTitle = new Component(this.sameBlock.element, 'h3', ['card-container__content__same__same-title'], 'Похожие товары');
    const cards = new Component(this.sameBlock.element, 'div', ['card-container__content__same__cards']);
    for (let elem of Goods) {
      if (elem.link === this.cardLink.split('/')[3]) {
        let i = 1;
        for (let item of elem.cards) {
          if (this.card.same.includes(item.link)) {
            const card = new Component(cards.element, 'a', ['card-container__content__same__cards__card']);
            card.element.setAttribute('href', `#/catalog/${this.cardLink.split('/')[2]}/${item.preLink}/${item.link}`);
            const photo = new Component(card.element, 'div', ['card-container__content__same__cards__card__img']);
            photo.element.style.backgroundImage = `url('./assets/img/${item.photo[0]}/1.${item.photo[1]}')`;
            const name = new Component(card.element, 'p', ['card-container__content__same__cards__card__name'], `${item.name}`);
            const description = new Component(card.element, 'div', ['card-container__content__same__cards__card__description']);
            const vendorCode = new Component(description.element, 'p', ['card-container__content__same__cards__card__vendor-code']);
            vendorCode.element.innerHTML = `<u>Артикул</u>: ${(item.link).toUpperCase()}`;
            const presence = new Component(description.element, 'p', ['card-container__content__same__cards__card__presence']);
            presence.element.innerHTML = `<u>Наличие</u>: <span class='card-container-create-color-card-${i}'>${item.presence}</span>`;
            if (item.presence === 'на складе') {
              (document.querySelector(`.card-container-create-color-card-${i}`) as HTMLSpanElement).style.color = 'green';
            } else {
              (document.querySelector(`.card-container-create-color-card-${i}`) as HTMLSpanElement).style.color = 'orange';
            }
            const price = new Component(card.element, 'p', ['card-container__content__same__cards__card__price'], `${item.price} BYN/шт.`);
            i++;
          }
        }
        break;
      }
    }
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default CardContainer;