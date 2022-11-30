import CategoriesContainer from '../../components/categories-container/categories-container';
import Component from '../../utils/component';

class Categories extends Component {
  private categoriesContainer: CategoriesContainer;

  private categoriesLink: string;

  constructor(parentNode: HTMLElement, categoriesLink: string) {
    super(parentNode, 'div', ['categories']);

    this.categoriesLink = categoriesLink;

    this.categoriesContainer = new CategoriesContainer(this.element, this.categoriesLink);
  }
}

export default Categories;