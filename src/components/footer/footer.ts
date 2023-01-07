import Component from '../../utils/component';

import './footer.scss';

class Footer extends Component {
    private container: Component;
    private logoContainer: Component;
    private logo: Component;
    private title: Component;
    private instagram: Component;
    private phone: Component;
    private email: Component;
    private navigation: Component;
    contacts: Component;
    contactsContainer: Component;
  
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['footer']);

        this.container = new Component(this.element, 'div', ['footer__container']);

        this.contacts = new Component(this.container.element, 'div', ['footer__container__contacts']);

        this.logoContainer = new Component(this.contacts.element, 'div', ['footer__container__contacts__logo-cont']);
        this.logo = new Component(this.logoContainer.element, 'a', ['footer__container__contacts__logo-cont__logo'], 'LOGO-NAME');
        this.title = new Component(this.logoContainer.element, 'p', ['footer__container__contacts__logo-cont__title'], 'Интернет-магазин');

        this.contactsContainer = new Component(this.contacts.element, 'div', ['footer__container__contacts__contacts-cont']);
        this.instagram = new Component(this.contactsContainer.element, 'a', ['footer__container__contacts__contacts-cont__insta']);
        this.instagram.element.style.backgroundImage = 'url("./assets/svg/insta-orange.svg")';
        this.phone = new Component(this.contactsContainer.element, 'a', ['footer__container__contacts__contacts-cont__phone']);
        this.phone.element.style.backgroundImage = 'url("./assets/svg/phone-orange.svg")';
        this.email = new Component(this.contactsContainer.element, 'a', ['footer__container__contacts__contacts-cont__email']);
        this.email.element.style.backgroundImage = 'url("./assets/svg/email-orange.svg")';

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
}

export default Footer;