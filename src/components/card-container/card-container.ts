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
  
  constructor(parentNode: HTMLElement, cardLink: string) {
    super(parentNode, 'div', ['card-container']);
    this.cardLink = cardLink;
    console.log(this.cardLink)
    this.categoryName = '';
    this.card = {} as Card;
    for (let elem of Goods) {
      if (elem.link === this.cardLink.split('/')[0]) {
        this.categoryName = elem.name;
        for (let item of elem.cards) {
          if (item.link === this.cardLink.split('/')[1]) {
            this.card = item;
          }
        }
      }
    }
    this.container = new Component(this.element, 'div', ['card-container__container']);
    this.navigation = new Component(this.container.element, 'div', ['card-container__navigation']);
    this.main = new Component(this.navigation.element, 'a', ['card-container__navigation__main'], 'Главная');
    this.main.element.setAttribute('href', '#/');
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow-1']);
    this.arrow_1.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.preCategory = new Component(this.navigation.element, 'a', ['category-container__navigation__pre-category'], `${this.categoryName.split(' ')[0]}`);
    this.preCategory.element.setAttribute('href', `#/catalog/${this.cardLink.split('_')[0]}`);
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow-1']);
    this.arrow_1.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.currentCategory = new Component(this.navigation.element, 'a', ['card-container__navigation__current-category'], `${this.categoryName}`);
    this.currentCategory.element.setAttribute('href', `#/catalog/${this.cardLink.split('_')[0]}/${this.cardLink.split('/')[0]}`);
    this.arrow_1 = new Component(this.navigation.element, 'div', ['card-container__navigation__arrow-1']);
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
    this.presence = new Component(this.startDescription.element, 'p',['card-container__content__start-block__start-des__presence'], `Наличие: ${this.card.presence}`);
    this.vendorCode = new Component(this.startDescription.element, 'p',['card-container__content__start-block__start-des__vendorCode'], `Артикул: ${this.card.vendorCode}`);
    this.deliveryBox = new Component(this.startDescription.element, 'div',['card-container__content__start-block__start-des__delivery-box']);
    this.deliveryBox.element.innerHTML = 'Заказать товар можно по номеру +375 29 123 45 67 или вайбер на этот же номер.' + '\nДоставка осуществляется в пределах города Минска бесплатно. За пределы МКАД - 100% стоимости товара';

    this.characteristics = new Component(this.content.element, 'div', ['card-container__content__characteristics']);
    this.createCharacteristics();
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
      const block = new Component(this.characteristics.element, 'div', ['card-container__content__characteristics__block']);
      const parameter = new Component(block.element, 'p', ['card-container__content__characteristics__block__parameter'], `${elem[0]}`);
      const spaces = new Component(block.element, 'div', ['card-container__content__characteristics__block__spaces']);
      for (let item of elem[1]) {
        const valueBlock = new Component(block.element, 'div', ['card-container__content__characteristics__block__value-block']);
        const value = new Component(valueBlock.element, 'p', ['card-container__content__characteristics__block__value-block__value'], `${item}`);
      }
    }
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default CardContainer;