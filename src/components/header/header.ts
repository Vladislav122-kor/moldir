import Component from '../../utils/component';
import Goods from '../../assets/files/goods';
//import Searching from '../../instruments/searching/searching';

import './header.scss';

class Header extends Component {
    private informationPanel: Component;
    private navigationPanel: Component;
    private informationPanelContainer: Component;
    private navigationPanelContainer: Component;
    private logoContainer: Component;
    private logo: Component;
    private title: Component;
    private button: Component;
    private buttonText: Component;
    private buttonBurgerContainer: Component;
    private buttonSpan: Component;
    private navigation: Component;
    private categories: Component;
    private contacts: Component;
    private instagram: Component;
    private phone: Component;
    private email: Component;
    //private searching: Searching;
  
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['header']);

        this.informationPanel = new Component(this.element, 'div', ['header__info-panel']);
        this.navigationPanel = new Component(this.element, 'div', ['header__nav-panel']);

        this.informationPanelContainer = new Component(this.informationPanel.element, 'div', ['header__info-panel__container']);
        this.navigationPanelContainer = new Component(this.navigationPanel.element, 'div', ['header__nav-panel__container']);

        this.logoContainer = new Component(this.informationPanelContainer.element, 'div', ['header__info-panel__logo-cont']);
        this.logo = new Component(this.logoContainer.element, 'a', ['header__info-panel__logo-cont__logo']);
        this.logo.element.style.backgroundImage = 'url("./assets/img/logo.png")';
        this.logo.element.setAttribute('href', '#/');
        this.title = new Component(this.logoContainer.element, 'p', ['header__info-panel__logo-cont__title'], 'Интернет-магазин');

        this.contacts = new Component(this.informationPanelContainer.element, 'div', ['header__info-panel__contacts']);

        this.instagram = new Component(this.contacts.element, 'div', ['header__info-panel__contacts-insta']);
        this.instagram.element.style.backgroundImage = 'url("./assets/svg/insta-grey.svg")';
        this.phone = new Component(this.contacts.element, 'div', ['header__info-panel__contacts-phone']);
        this.phone.element.style.backgroundImage = 'url("./assets/svg/phone-grey.svg")';
        this.email = new Component(this.contacts.element, 'div', ['header__info-panel__contacts-email']);
        this.email.element.style.backgroundImage = 'url("./assets/svg/email-grey.svg")';

        //this.searching = new Searching(this.informationPanelContainer.element);
        //this.searching.element.classList.add('header__info-panel__searching');

        this.button = new Component(this.navigationPanelContainer.element, 'div', ['header__nav-panel__button']);
        this.buttonText = new Component(this.button.element, 'p', ['header__nav-panel__button__text'], 'Каталог');
        this.buttonBurgerContainer = new Component(this.button.element, 'div', ['header__nav-panel__button__burger-cont']);
        this.buttonSpan = new Component(this.buttonBurgerContainer.element, 'span', ['header__nav-panel__button__burger-cont__span']);
        this.categories =  new Component(this.button.element, 'div', ['header__nav-panel__button__categories']);
        this.findCategories();
        this.button.element.addEventListener('click', (e) => {
            if (!(e.target as HTMLElement).className.includes('categories')) {
                this.categories.element.classList.toggle('active');
            } else if ((e.target as HTMLElement).className.includes('element')) {
                this.categories.element.classList.toggle('active');
            }
        })

        this.navigation = new Component(this.navigationPanelContainer.element, 'div', ['header__nav-panel__nav']);
        this.createNavElements();
    }

    private createNavElements() {
        const navNames: string[] = ['Доставка и оплата', 'Контакты'];
        const navLinks: string[] = ['#/delivery_and_payment', '#/contacts'];
        for (let i: number = 0; i < navNames.length; i += 1) {
            const element = new Component(this.navigation.element, 'a', ['header__nav-panel__nav__element'], `${navNames[i]}`);
            element.element.setAttribute('href', `${navLinks[i]}`);
        }
    }

    private findCategories() {
        let item = '';
        for (let elem of Goods) {
            if (elem.name.split('|')[0] !== item) {
                item = elem.name.split('|')[0];
                const element = new Component(this.categories.element, 'a', ['header__nav-panel__button__categories__element']);
                element.element.innerHTML = `<b>${elem.name.split('|')[0]}</b>`;
                element.element.setAttribute('href', `#/catalog/${elem.link.split('_')[0]}`);
            }
            const element = new Component(this.categories.element, 'a', ['header__nav-panel__button__categories__element'], `${elem.name.split('|').join('')}`);
            element.element.setAttribute('href', `#/catalog/${elem.link.split('_')[0]}/${elem.link}`);
        }
    }
}

export default Header;