import Component from '../../utils/component';
import StartBlock from './start-block/start-block';
import CategoriesBlock from './categories-block/categories-block';
import PopularGoods from './popular-goods/popular-goods';

class MainContainer extends Component {
  private startBlock: StartBlock;
  private categoriesBlock: CategoriesBlock;
  private popularGoods: PopularGoods;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-container']);

    this.startBlock = new StartBlock(this.element);
    this.categoriesBlock = new CategoriesBlock(this.element);
    this.popularGoods = new PopularGoods(this.element);
  }
}

export default MainContainer;