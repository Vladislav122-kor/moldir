import Component from '../../utils/component';

import './footer.scss';

class Footer extends Component {
    private container: Component;
    private contacts: Component;
    private logoContainer: Component;
    private logo: Component;
    private title: Component;
    private contactsContainer: Component;
    private navigation: Component;
  
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['footer']);

        this.container = new Component(this.element, 'div', ['footer__container']);

        this.contacts = new Component(this.container.element, 'div', ['footer__container__contacts']);

        this.logoContainer = new Component(this.contacts.element, 'div', ['footer__container__contacts__logo-cont']);
        this.logo = new Component(this.logoContainer.element, 'a', ['footer__container__contacts__logo-cont__logo']);
        this.logo.element.style.backgroundImage = 'url("./assets/img/logo.png")';
        this.logo.element.setAttribute('href', '#/');
        this.title = new Component(this.logoContainer.element, 'p', ['footer__container__contacts__logo-cont__title'], 'Интернет-магазин');

        this.contactsContainer = new Component(this.contacts.element, 'div', ['footer__container__contacts__contacts-cont']);
        this.createContacts();

        this.navigation = new Component(this.container.element, 'div', ['footer__container__nav']);
        this.createNavElements();
    }

    private createNavElements() {
        const navNames: string[] = ['Доставка и оплата', 'Контакты'];
        const navLinks: string[] = ['#/delivery_and_payment', '#/contacts'];

        for (let i: number = 0; i < navNames.length; i += 1) {
            const element = new Component(this.navigation.element, 'a', ['footer__container__nav__element'], `${navNames[i]}`);
            element.element.setAttribute('href', `${navLinks[i]}`);
        }
    }

    private createContacts() {
        const photos = ['phone-orange.svg', 'email-orange.svg', 'insta-orange.svg'];
        const urls = ['tel:+375445053949', 'mailto:moldir.minsk@mail.ru', 'https://www.instagram.com/moldir.opt/'];
        for (let i = 0; i < urls.length; i++) {
            const svg = new Component(this.contactsContainer.element, 'a', ['footer__container__contacts__contacts-cont__svg']);
            svg.element.setAttribute('href', `${urls[i]}`);
            svg.element.style.backgroundImage = `url("./assets/svg/${photos[i]}")`;
            if (photos[i].includes('insta')) {
                svg.element.setAttribute('target', '_blank');
            }
        }
    }
}

export default Footer;