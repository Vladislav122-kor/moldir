import Component from '../../utils/component';
import { Card } from '../../interfaces/index';

import './card-creation.scss';

class CardCreation {
    static createCard(item: Card, cardsAmount: string, categoriesInfo: string[]) {
        const card = document.createElement('a');
        card.classList.add('card');
        card.classList.add(`${cardsAmount}`);
        card.setAttribute('href', `#/catalog/${categoriesInfo[2]}/${categoriesInfo[3]}/${item.id}`);

        const photo = new Component(card, 'img', ['card__img']);
        (photo.element as HTMLImageElement).src = `./assets/img/${item.id}/1.jpg`;
        (photo.element as HTMLImageElement).setAttribute('alt', 'Фото товара');

        const textBlock = new Component(card, 'div', ['card__text-block']);
        const name = new Component(textBlock.element, 'p', ['card__text-block__name'], `${item.name}`);
        const description = new Component(textBlock.element, 'div', ['card__text-block__description']);
        const producer = new Component(description.element, 'p', ['card__text-block__producer']);
        producer.element.innerHTML = `<u>${item.characteristics[item.characteristics.length - 1][0]}</u>: ${item.characteristics[item.characteristics.length - 1][1][0]}`;

        const presence = new Component(description.element, 'p', ['card__text-block__presence'], 'Наличие: ');
        const presenceSpan = new Component(presence.element, 'span', ['card__text-block__presence-span'], `${item.presence}`);
        if (item.presence === 'на складе') { presenceSpan.element.classList.add('presence-span-color-green') }
        else if (item.presence === 'под заказ') { presenceSpan.element.classList.add('presence-span-color-orange') }

        const price = new Component(textBlock.element, 'p', ['card__text-block__price'], `${item.price} BYN/шт.`);

        return card;
    }
}

export default CardCreation;