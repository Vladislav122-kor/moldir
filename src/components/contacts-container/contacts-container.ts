import Component from '../../utils/component';

import './contacts-container.scss';

class ContactsContainer extends Component {
    private container: Component;
    //private map: Component;
    private about: Component;
    private contacts: Component;
    
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'section', ['contacts-container']);

        this.container = new Component(this.element, 'div', ['contacts-container__container']);
        //this.map = new Component(this.container.element, 'div', ['contacts-container__map']);
        //this.map.element.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.127418705064!2d27.42076143720768!3d53.8881892159864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdb1e1ff3ec81%3A0x25913ca0bac68f4b!2z0YPQuy4g0KHQutGA0LjQv9C90LjQutC-0LLQsCAzLCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1671963217451!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        this.contacts = new Component(this.container.element, 'div', ['contacts-container__contacts']);
        this.createContacts();
        this.about = new Component(this.container.element, 'div', ['contacts-container__about']);
        this.about.element.innerHTML = 'ООО "Молдир", УНП: 193639694<br>Юр. адрес: 220019, Республика Беларусь, г. Минск, пер. Монтажников 4-й, д. 5, пом. 18<br>Свидетельство о государственной регистрации № 193639694 от 05.08.2022 г. выдано Минским горисполкомом<br>Интернет-магазин зарегистрирован в Торговом реестре РБ 27.02.2023<br>Режим работы: 09:00 – 20:00';
    }

    createContacts() {
        const photos = ['phone-blue.svg', 'email-blue.svg', 'insta-blue.svg'];
        const urls = ['tel:+375445053949', 'mailto:info@s-klad.by', 'https://www.instagram.com/moldir.opt/'];
        const texts = ['+375 44 505 39 49', 'info@s-klad.by', 'moldir.opt'];
        for (let i = 0; i < urls.length; i++) {
            const block = new Component(this.contacts.element, 'a', [`contacts-container__contacts__block`]);
            block.element.setAttribute('href', `${urls[i]}`);
            const svg = new Component(block.element, 'div', [`contacts-container__contacts__block-svg`]);
            svg.element.style.backgroundImage = `url("./assets/svg/${photos[i]}")`;
            const text = new Component(block.element, 'p', [`contacts-container__contacts__block-text`]);
            text.element.innerHTML = `${texts[i]}`;
            if (photos[i].includes('insta')) {
                block.element.setAttribute('target', '_blank');
            }
        }
    }
}

export default ContactsContainer;