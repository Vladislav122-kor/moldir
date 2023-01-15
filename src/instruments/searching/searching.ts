import Component from '../../utils/component';
import Goods from '../../assets/files/goods';

import './searching.scss';

class Searching extends Component {
    private input: Component;
    private button: Component;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['searching']);
        this.input = new Component(this.element, 'input', ['searching__input']);
        this.button = new Component(this.element, 'div', ['searching__button'], 'Найти');
    }
}

export default Searching;