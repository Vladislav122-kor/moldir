import Component from '../../../utils/component';
import popularGoods from '../../../assets/files/popular-goods';

import './popular-goods.scss';

class PopularGoods extends Component {
    private container: Component;
    private title: Component;
    private cards: Component;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'section', ['popular-goods']);

        this.container = new Component(this.element, 'div', ['popular-goods__container']);
        this.title = new Component(this.container.element, 'h2', ['popular-goods__title'], 'Популярные товары');
        this.cards = new Component(this.container.element, 'div', ['popular-goods__cards']);
        this.createCards();
    }

    private createCards() {
        let i = 1;
        for (let elem of popularGoods) {
            const card = new Component(this.cards.element, 'a', ['popular-goods__cards__card']);
            card.element.setAttribute('href', `#/catalog/${elem.preLink.split('_')[0]}/${elem.preLink}/${elem.link}`);
            const photo = new Component(card.element, 'img', ['popular-goods__cards__card__img']);
            (photo.element as HTMLImageElement).src = `./assets/img/${elem.photo[0]}/1.${elem.photo[1]}`;
            (photo.element as HTMLImageElement).setAttribute('alt', 'Фото товара');
            const textBlock = new Component(card.element, 'div', ['popular-goods__cards__card__text-block']);
            const name = new Component(textBlock.element, 'p', ['popular-goods__cards__card__text-block__name'], `${elem.name}`);
            const description = new Component(textBlock.element, 'div', ['popular-goods__cards__card__text-block__description']);
            const producer = new Component(description.element, 'p', ['popular-goods__cards__card__text-block__producer']);
            producer.element.innerHTML = `<u>${elem.characteristics[elem.characteristics.length - 1][0]}</u>: ${elem.characteristics[elem.characteristics.length - 1][1][0]}`;
            const presence = new Component(description.element, 'p', ['popular-goods__cards__card__text-block__presence']);
            presence.element.innerHTML = `<u>Наличие</u>: <span class='popular-goods-create-color-${i}'>${elem.presence}</span>`;
            if (elem.presence === 'на складе') {
              (document.querySelector(`.popular-goods-create-color-${i}`) as HTMLSpanElement).style.color = 'green';
            } else {
              (document.querySelector(`.popular-goods-create-color-${i}`) as HTMLSpanElement).style.color = '#DFA974';
            }
            const price = new Component(textBlock.element, 'p', ['popular-goods__cards__card__text-block__price'], `${elem.price} BYN/шт.`);
            i++;
        }
    }
}

export default PopularGoods;