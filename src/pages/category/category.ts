import CategoryContainer from '../../components/category-container/category-container';
import Component from '../../utils/component';

class Category extends Component {
  private categoryContainer: CategoryContainer;

  private categoryLink: string;

  constructor(parentNode: HTMLElement, categoryLink: string) {
    super(parentNode, 'div', ['category']);

    this.categoryLink = categoryLink;

    this.categoryContainer = new CategoryContainer(this.element, this.categoryLink);
  }
}

export default Category;