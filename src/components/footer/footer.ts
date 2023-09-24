import Component from '../../utils/component';

import './footer.scss';

class Footer extends Component {
    private container: Component;
    private contacts: Component;
    private logoContainer: Component;
    private logo: Component;
    private title: Component;
    private contactsContainer: Component;
    private address: Component;
    private navigation: Component;
    private navPanel: Component;
    private cardsLogos: HTMLImageElement;
    private logoBlock: Component;
    private brandName: Component;
  
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'footer', ['footer']);

        this.container = new Component(this.element, 'div', ['footer__container']);

        this.navPanel = new Component(this.container.element, 'div', ['footer__nav-panel']);

        this.contacts = new Component(this.navPanel.element, 'div', ['footer__nav-panel__contacts']);
        this.logoContainer = new Component(this.contacts.element, 'div', ['footer__nav-panel__contacts__logo-cont']);
        this.logoBlock = new Component(this.logoContainer.element, 'a', ['footer__nav-panel__contacts__logo-cont__logo-block']);
        this.logo = new Component(this.logoBlock.element, 'img', ['footer__nav-panel__contacts__logo-cont__logo-block__logo']);
        (this.logo.element as HTMLImageElement).src = "./assets/img/logo_pink.png";
        this.logoBlock.element.setAttribute('href', '#/');
        this.brandName = new Component(this.logoBlock.element, 'p', ['footer__nav-panel__contacts__logo-cont__logo-block__brand-name'], 'S-klad.by');
        this.title = new Component(this.logoContainer.element, 'p', ['footer__nav-panel__contacts__logo-cont__title'], 'Интернет-магазин');

        this.contactsContainer = new Component(this.navPanel.element, 'div', ['footer__nav-panel__contacts-cont']);
        this.createContacts();

        this.navigation = new Component(this.navPanel.element, 'nav', ['footer__nav-panel__nav']);
        this.createNavElements();

        this.cardsLogos = document.createElement('img');
        this.cardsLogos.src = "./assets/img/cards_horizontal.png";
        this.cardsLogos.setAttribute('width', '100%');
        this.cardsLogos.setAttribute('alt', 'Логотипы карточек');
        this.container.element.appendChild(this.cardsLogos);

        this.address = new Component(this.container.element, 'p', ['footer__address']);
        this.address.element.innerHTML = 'ООО "Молдир", УНП: 193639694<br>Юр. адрес: 220019, Республика Беларусь, г. Минск, пер. Монтажников 4-й, д. 5, пом. 18<br>Свидетельство о государственной регистрации № 193639694 от 05.08.2022 г. выдано Минским горисполкомом<br>Интернет-магазин зарегистрирован в Торговом реестре РБ 27.02.2023<br>Режим работы: 09:00 – 20:00. Телефон: 375 (44) 505 39 49. e-mail: info@s-klad.by';
    }

    private createNavElements() {
        const navNames: string[] = ['Оплата и доставка', 'Возврат товара', 'Контакты'];
        const navLinks: string[] = ['#/payment-and-delivery', '#/return', '#/contacts'];

        for (let i: number = 0; i < navNames.length; i += 1) {
            const element = new Component(this.navigation.element, 'a', ['footer__nav-panel__nav__element'], `${navNames[i]}`);
            element.element.setAttribute('href', `${navLinks[i]}`);
        }
    }

    private createContacts() {
        const photos = ['phone-orange.svg', 'email-orange.svg', 'insta-orange.svg'];
        const urls = ['tel:+375445053949', 'mailto:info@s-klad.by', 'https://www.instagram.com/moldir.opt/'];

        for (let i = 0; i < urls.length; i++) {
            const svg = new Component(this.contactsContainer.element, 'a', ['footer__nav-panel__contacts-cont__svg']);
            svg.element.setAttribute('href', `${urls[i]}`);
            svg.element.style.backgroundImage = `url("./assets/svg/${photos[i]}")`;
            
            if (photos[i].includes('insta')) {
                svg.element.setAttribute('target', '_blank');
            }
        }
    }
}

export default Footer;