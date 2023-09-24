import Component from '../../utils/component';
import { Category } from '../../interfaces/index';

class FiltersContainer extends Component {
    categories: Category[];
    clearButton: Component;

    constructor(parentNode: HTMLElement, categories: Category[]) {
        super(parentNode, 'div', ['filters-container']);

        this.categories = categories;
        this.createFilters();

        this.clearButton = new Component(this.element, 'div', ['filters-container__clear-btn'], 'Сбросить настройки');
        this.clearButton.element.addEventListener('click', () => {  });

        this.element.addEventListener('input', (e) => {
          if ((e.target as HTMLElement).classList.contains('number')) {
        
          }
        });
    }

    private createFilters() {
        this.createPriceFilter();
    }

    private createPriceFilter() {
        const filterItem = new Component(this.element, 'div', ['filters-container__filter-item']);
        const title = new Component(filterItem.element, 'h4', ['filters-container__filter-item__title'], 'Цена');
        const inputBlock = new Component(filterItem.element, 'div', ['filters-container__filter-item__inputs']);
        const minPrice = new Component(inputBlock.element, 'input', ['filters-container__filter-item__inputs__minPrice', 'number']);
        minPrice.element.setAttribute('type', 'number');
        minPrice.element.setAttribute('value', '0');
        const dash = new Component(inputBlock.element, 'div', ['filters-container__filter-item__inputs__dash']);
        dash.element.innerHTML = '&#8212';
        const maxPrice = new Component(inputBlock.element, 'input', ['filters-container__filter-item__inputs__maxPrice', 'number']);
        maxPrice.element.setAttribute('type', 'number');
        maxPrice.element.setAttribute('value', '0');
    }
}

export default FiltersContainer;