import Component from '../../utils/component';

import './scrollUp.scss';

class ScrollUp extends Component {
    private arrow: Component;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['scroll-up']);

        this.arrow = new Component(this.element, 'div', ['scroll-up__arrow']);
        this.arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-up.svg")';

        this.element.addEventListener('click', () => {
            window.scrollTo(0, 0);
        })
    }
}

export default ScrollUp;