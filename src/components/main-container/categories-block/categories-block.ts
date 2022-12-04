import Component from '../../../utils/component';
import goods from '../../../assets/files/goods';

import './categories-block.scss';

class CategoriesBlock extends Component {
    private container: Component;
    private title: Component;
    private cards: Component;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['categories-block']);

        this.container = new Component(this.element, 'div', ['categories-block__container']);

        // create title
        this.title = new Component(this.container.element, 'h2', ['categories-block__title'], 'Категории');

        this.cards = new Component(this.container.element, 'div', ['categories-block__cards']);
        this.createCards();
    }

    private createCards() {
        for (let elem of goods) {
            const card = new Component(this.cards.element, 'a', ['categories-block__cards__card']);
            card.element.setAttribute('href', `#/catalog/${elem.link.split('_')[0]}/${elem.link}`);
            card.element.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(29, 53, 100, 0.15) ), url('./assets/img/${elem.photo}')`;
            const cardTitle = new Component(card.element, 'p', ['categories-block__cards__card__title'], `${elem.name.split('|').join('')}`);
        }
    }

    private clear() {
        // this.content.element.innerHTML = '';
    }
}

export default CategoriesBlock;