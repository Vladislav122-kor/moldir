import Component from '../../../utils/component';
import popularGoods from '../../../assets/files/popular-goods';

import './popular-goods.scss';

class PopularGoods extends Component {
    private container: Component;
    title: Component;
    cards: Component;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['popular-goods']);

        this.container = new Component(this.element, 'div', ['popular-goods__container']);

        // create title
        this.title = new Component(this.container.element, 'h2', ['popular-goods__title'], 'Популярные товары');

        this.cards = new Component(this.container.element, 'div', ['popular-goods__cards']);
        this.createCards();
    }

    private createCards() {
        let i = 1;
        for (let elem of popularGoods) {
            const card = new Component(this.cards.element, 'a', ['popular-goods__cards__card']);
            card.element.setAttribute('href', `#/catalog/${elem.preLink.split('_')[0]}/${elem.preLink}/${elem.link}`);
            const photo = new Component(card.element, 'div', ['popular-goods__cards__card__img']);
            photo.element.style.backgroundImage = `url('./assets/img/${elem.photo[0]}/1.${elem.photo[1]}')`;
            const name = new Component(card.element, 'p', ['popular-goods__cards__card__name'], `${elem.name}`);
            const description = new Component(card.element, 'div', ['popular-goods__cards__card__description']);
            const vendorCode = new Component(description.element, 'p', ['popular-goods__cards__card__vendor-code']);
            vendorCode.element.innerHTML = `<u>Артикул</u>: ${(elem.link).toUpperCase()}`;
            const presence = new Component(description.element, 'p', ['popular-goods__cards__card__presence']);
            presence.element.innerHTML = `<u>Наличие</u>: <span class='popular-goods-create-color-${i}'>${elem.presence}</span>`;
            if (elem.presence === 'на складе') {
              (document.querySelector(`.popular-goods-create-color-${i}`) as HTMLSpanElement).style.color = 'green';
            } else {
              (document.querySelector(`.popular-goods-create-color-${i}`) as HTMLSpanElement).style.color = 'orange';
            }
            const price = new Component(card.element, 'p', ['popular-goods__cards__card__price'], `${elem.price} BYN/шт.`);
            i++;
        }
    }

    private clear() {
        // this.content.element.innerHTML = '';
    }
}

export default PopularGoods;