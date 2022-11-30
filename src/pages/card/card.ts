import CardContainer from '../../components/card-container/card-container';
import Component from '../../utils/component';

class Category extends Component {
  private cardContainer: CardContainer;

  private cardLink: string;

  constructor(parentNode: HTMLElement, cardLink: string) {
    super(parentNode, 'div', ['category']);

    this.cardLink = cardLink;

    this.cardContainer = new CardContainer(this.element, cardLink);
  }
}

export default Category;