import Component from '../../../utils/component';
import goods from '../../../assets/files/goods';

import './categories-block.scss';

class CategoriesBlock extends Component {
    private container: Component;

    private titleContainer: Component;

    private title: Component;

    private line: Component;

    private cards: Component;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['categories-block']);

        this.container = new Component(this.element, 'div', ['categories-block__container']);

        // create title
        this.titleContainer = new Component(this.container.element, 'div', ['categories-block__container__title-cont']);
        this.title = new Component(this.titleContainer.element, 'h2', ['categories-block__container__title-cont__title'], 'Категории');
        this.line = new Component(this.titleContainer.element, 'div', ['categories-block__container__title-cont__line']);

        this.cards = new Component(this.container.element, 'div', ['categories-block__container__cards']);
        this.createCards();
    }

    private createCards() {
        for (let elem of goods) {
            const card = new Component(this.cards.element, 'a', ['categories-block__container__cards__card']);
            card.element.setAttribute('href', `#/categories/${elem.link}`);
            card.element.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(29, 53, 100, 0.15) ), url('./assets/img/${elem.photo}')`;
            const cardTitle = new Component(card.element, 'p', ['categories-block__container__cards__card__title'], `${elem.name}`);
        }
    }

    private clear() {
        // this.content.element.innerHTML = '';
    }
}

export default CategoriesBlock;