import Component from '../../utils/component';
import { Card } from '../../../src/interfaces/index';
import Goods from '../../assets/files/goods';

import './card-container.scss';

class CardContainer extends Component {
  private cardLink: string;
  private card: Card;
  private container: Component;
  navigation: Component;
  main: Component;
  arrow_1: Component;
  currentCategory: Component;
  currentCard: Component;
  categoryName: string;
  content: Component;
  title: Component;
  photoBlock: Component;
  photo: Component;
  photos: Component;
  startDescription: Component;
  price: Component;
  presence: Component;
  vendorCode: Component;
  deliveryBox: Component;
  characteristics: Component;
  preCategory: Component;
  startBlock: Component;
  detailed: Component;
  about: Component;
  additional: Component;
  cards: Component;
  sameTitle: Component;
  
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
          }
        }
      }
    }
    this.container = new Component(this.element, 'div', ['card-container__container']);
    this.navigation = new Component(this.container.element, 'div', ['card-container__navigation']);
    this.main = new Component(this.navigation.element, 'a', ['card-container__navigation__main'], 'Главная');
    this.main.element.setAttribute('href', '#/');
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow']);
    this.arrow_1.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.preCategory = new Component(this.navigation.element, 'a', ['card-container__navigation__pre-category'], `${this.categoryName.split(' ')[0]}`);
    this.preCategory.element.setAttribute('href', `#/catalog/${this.cardLink.split('/')[2]}`);
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow']);
    this.arrow_1.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.currentCategory = new Component(this.navigation.element, 'a', ['card-container__navigation__current-category'], `${this.categoryName}`);
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
    this.presence.element.innerHTML = `<u>Наличие</u>: <span class='create-color'>${this.card.presence}</span>`;
    if (this.card.presence === 'на складе') {
      (document.querySelector('.create-color') as HTMLSpanElement).style.color = 'green';
    } else {
      (document.querySelector('.create-color') as HTMLSpanElement).style.color = 'orange';
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
    this.additional.element.innerHTML = `<b>Дополнительно:</b> ${this.card.additional}`;
    this.characteristics = new Component(this.about.element, 'div', ['card-container__content__about__characteristics']);
    this.createCharacteristics();

    this.sameTitle = new Component(this.content.element, 'h3', ['card-container__content__same-title'], 'Похожие товары');
    this.cards = new Component(this.content.element, 'div', ['card-container__content__cards']);
    this.createCards();
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
    for (let elem of Goods) {
      if (elem.link === this.cardLink.split('/')[3]) {
        for (let item of elem.cards) {
          if (this.card.same.includes(item.link)) {
            const card = new Component(this.cards.element, 'a', ['card-container__content__cards__card']);
            card.element.setAttribute('href', `#/catalog/${this.cardLink.split('/')[3]}/${item.preLink}/${item.link}`);
            const photo = new Component(card.element, 'div', ['card-container__content__cards__card__img']);
            photo.element.style.backgroundImage = `url('./assets/img/${item.photo[0]}/1.${item.photo[1]}')`;
            const name = new Component(card.element, 'p', ['card-container__content__cards__card__name'], `${item.name}`);
            const description = new Component(card.element, 'div', ['card-container__content__cards__card__description']);
            const vendorCode = new Component(description.element, 'p', ['card-container__content__cards__card__vendor-code']);
            vendorCode.element.innerHTML = `<u>Артикул</u>: ${(item.link).toUpperCase()}`;
            const presence = new Component(description.element, 'p', ['card-container__content__cards__card__presence']);
            presence.element.innerHTML = `<u>Наличие</u>: <span class='create-color-create'>${item.presence}</span>`;
            switch(item.presence) {
              case 'на складе':
                (document.querySelector('.create-color-create') as HTMLSpanElement).style.color = 'green';
                break;
              default:
                (document.querySelector('.create-color-create') as HTMLSpanElement).style.color = 'orange';
                break;
            }
            const price = new Component(card.element, 'p', ['category-container__panel__cards__card__price'], `${item.price} BYN/шт.`);
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