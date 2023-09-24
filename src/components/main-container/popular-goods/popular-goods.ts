import Component from '../../../utils/component';
import popularGoods from '../../../assets/files/popular-goods';
import CardCreation from '../../../instruments/card-creation/card-creation';

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
        for (let item of popularGoods) {
            const categoriesInfo = [item.category[0], item.subCategory[0], item.category[1], item.subCategory[1]];
            const card = CardCreation.createCard(item, 'four', categoriesInfo);
            this.cards.element.appendChild(card);
        }
    }
}

export default PopularGoods;