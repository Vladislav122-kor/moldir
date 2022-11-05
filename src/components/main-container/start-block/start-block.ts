import Component from '../../../utils/component';

import './start-block.scss';

class StartBlock extends Component {
  private container: Component;

  private text: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['start-block']);

    // create background image for this block
    this.element.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1) ), url("./assets/img/start-image.png")';

    this.container = new Component(this.element, 'div', ['start-block__container']);

    this.text = new Component(this.container.element, 'h1', ['start-block__container__text'], 'Интернет-магазин сантехники в городе Минске');
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default StartBlock;