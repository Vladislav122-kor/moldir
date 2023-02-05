import Component from '../../utils/component';

import './contacts-container.scss';

class ContactsContainer extends Component {
    private container: Component;
    //private map: Component;
    private contactsBlock: Component;
    
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'section', ['contacts-container']);

        this.container = new Component(this.element, 'div', ['contacts-container__container']);
        //this.map = new Component(this.container.element, 'div', ['contacts-container__map']);
        //this.map.element.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.127418705064!2d27.42076143720768!3d53.8881892159864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdb1e1ff3ec81%3A0x25913ca0bac68f4b!2z0YPQuy4g0KHQutGA0LjQv9C90LjQutC-0LLQsCAzLCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1671963217451!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        this.contactsBlock = new Component(this.container.element, 'div', ['contacts-container__contacts-block']);
        this.createText();
    }

    private createText() {
        const textBlocks = [
            'Телефон: +375 44 505 39 49',
            'Email: moldir.minsk@mail.ru',
            'Инстаграм: moldir.opt',
        ];

        for (let elem of textBlocks) {
            const text = new Component(this.contactsBlock.element, 'p', ['contacts-container__contacts-block__text']);
            text.element.innerHTML = elem;
        }
    }
}

export default ContactsContainer;