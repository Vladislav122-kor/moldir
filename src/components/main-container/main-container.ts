import Component from '../../utils/component';
import StartBlock from './start-block/start-block';
import CategoriesBlock from './categories-block/categories-block';

class MainContainer extends Component {
  private startBlock: StartBlock;

  private categoriesBlock: CategoriesBlock;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-container']);

    this.startBlock = new StartBlock(this.element);
    this.categoriesBlock = new CategoriesBlock(this.element);
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default MainContainer;