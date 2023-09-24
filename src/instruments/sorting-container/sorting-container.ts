/*import Component from '../../utils/component';
import { Category } from '../../interfaces/index';
import CategoriesContainer from '../../components/categories-container/categories-container';

class SortingContainer extends Component {
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['sorting-container']);

        this.createSortings();

        this.element.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).className.includes('crease')) {
                if ((e.target as HTMLElement).className.includes('increase') && !((e.target as HTMLElement).classList.contains('active'))) {
                    this.sortingValue = 'increase';
                    (e.target as HTMLElement).classList.add('active');
                    document.querySelector('.categories-container__content__panel__sorting-buttons__sorting-decrease')?.classList.remove('active');
                } else if ((e.target as HTMLElement).className.includes('decrease') && !((e.target as HTMLElement).classList.contains('active'))) {
                    this.sortingValue = 'decrease';
                    (e.target as HTMLElement).classList.add('active');
                    document.querySelector('.categories-container__content__panel__sorting-buttons__sorting-increase')?.classList.remove('active');
                } else if ((e.target as HTMLElement).className.includes('increase') && (e.target as HTMLElement).classList.contains('active')) {
                    this.sortingValue = '';
                    (e.target as HTMLElement).classList.remove('active');
                } else if ((e.target as HTMLElement).className.includes('decrease') && (e.target as HTMLElement).classList.contains('active')) {
                    this.sortingValue = '';
                    (e.target as HTMLElement).classList.remove('active');
                }
                this.defineCards();
            }
        });
    }

    private createSortings() {
        this.createSorting()
    }

    private createSorting() {
        const sortingItem = new Component(this.element, 'div', ['sorting-container__sorting-item']);
        const sortingTitle = new Component(sortingItem.element, 'div', ['sorting-container__sorting-item__title'], 'Сортировать по стоимости:');
        const sortingButtons = new Component(sortingItem.element, 'div', ['sorting-container__sorting-item__sorting-btns']);
        const sortingIncrease = new Component(sortingButtons.element, 'div', ['sorting-container__sorting-item__sorting-btns__increase'], 'по возрастанию');
        const sortingDecrease = new Component(sortingButtons.element, 'div', ['sorting-container__sorting-item__sorting-btns__decrease'], 'по убыванию');
    }
}

export default SortingContainer;*/

  /*static defineCards() {
    let cards = [];
    // filter by price
    const minPrice = document.querySelector('.categories-container__content__filter__filter-item__inputs__minPrice');
    const maxPrice = document.querySelector('.categories-container__content__filter__filter-item__inputs__maxPrice');
    for (let elem of this.categories) {
      for (let item of elem.cards) {
        if (item.price >= Number((minPrice as HTMLInputElement).value) && item.price <= Number((maxPrice as HTMLInputElement).value)) {
          cards.push(item);
        }
      }
    }
    // sorting by price
    switch(this.sortingValue) {
      case 'increase':
        cards.sort((a, b) => a.price - b.price);
        break;
      case 'decrease':
        cards.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    this.count.element.innerHTML = `Найдено товаров: ${cards.length}`;
    this.count.element.style.fontSize = '1.6rem';
    this.createCards(cards);
  }*/