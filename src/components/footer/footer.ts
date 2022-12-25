import Component from '../../utils/component';

import './footer.scss';

class Footer extends Component {
    private container: Component;
    private logoContainer: Component;
    private logo: Component;
    private title: Component;
    private instagram: Component;
    private phoneContainer: Component;
    private phone: Component;
    private phoneText: Component;
    private emailContainer: Component;
    private email: Component;
    private emailText: Component;
    private navigation: Component;
  
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['footer']);

        this.container = new Component(this.element, 'div', ['footer__container']);

        this.logoContainer = new Component(this.container.element, 'div', ['footer__container__logo-cont']);
        this.logo = new Component(this.logoContainer.element, 'a', ['footer__container__logo-cont__logo'], 'LOGO-NAME');
        this.title = new Component(this.logoContainer.element, 'p', ['footer__container__logo-cont__title'], 'Интернет-магазин');
        this.instagram = new Component(this.logoContainer.element, 'a', ['footer__container__logo-cont__instagram']);
        this.instagram.element.style.backgroundImage = 'url("./assets/svg/instagram.svg")';

        this.phoneContainer = new Component(this.container.element, 'div', ['footer__container__phone-cont']);
        this.phone = new Component(this.phoneContainer.element, 'a', ['footer__container__phone-cont__phone'], '+375 29 123 45 67');
        this.phone.element.setAttribute('href', 'tel:+375291234567');
        this.phoneText = new Component(this.phoneContainer.element, 'p', ['footer__container__phone-cont__text'], 'Ежедневно с 08:00 до 21:00');

        this.emailContainer = new Component(this.container.element, 'div', ['footer__container__email-cont']);
        this.email = new Component(this.emailContainer.element, 'a', ['footer__container__email-cont__email'], 'the.best.san@technica.by');
        this.email.element.setAttribute('href', 'mailto:the.best.san@technica.by');
        this.emailText = new Component(this.emailContainer.element, 'p', ['footer__container__email-cont__text'], 'Круглосуточно');

        this.navigation = new Component(this.container.element, 'div', ['footer__container__nav']);
        this.createNavElements();
    }

    private createNavElements() {
        const navNames: string[] = ['доставка и оплата', 'контакты'];
        const navLinks: string[] = ['#/delivery_and_payment', '#/contacts'];

        for (let i: number = 0; i < navNames.length; i += 1) {
            const element = new Component(this.navigation.element, 'a', ['footer__container__nav__element'], `${navNames[i]}`);
            element.element.setAttribute('href', `${navLinks[i]}`);
        }
    }
}

export default Footer;