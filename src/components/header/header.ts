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
    private dark: Component;
    private logoBlock: Component;
    private brandName: Component;
    //private searching: Searching;
  
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'header', ['header']);

        this.dark = new Component(this.element, 'div', ['dark']);

        this.informationPanel = new Component(this.element, 'div', ['header__info-panel']);
        this.navigationPanel = new Component(this.element, 'div', ['header__nav-panel']);

        this.informationPanelContainer = new Component(this.informationPanel.element, 'div', ['header__info-panel__container']);
        this.navigationPanelContainer = new Component(this.navigationPanel.element, 'div', ['header__nav-panel__container']);

        this.logoContainer = new Component(this.informationPanelContainer.element, 'div', ['header__info-panel__logo-cont']);
        this.logoBlock = new Component(this.logoContainer.element, 'a', ['header__info-panel__logo-cont__logo-block']);
        this.logo = new Component(this.logoBlock.element, 'img', ['header__info-panel__logo-cont__logo-block__logo']);
        (this.logo.element as HTMLImageElement).src = "./assets/img/logo.png";
        this.logoBlock.element.setAttribute('href', '#/');
        this.brandName = new Component(this.logoBlock.element, 'p', ['header__info-panel__logo-cont__logo-block__brand-name'], 'S-klad.by');
        this.title = new Component(this.logoContainer.element, 'p', ['header__info-panel__logo-cont__title'], 'Интернет-магазин');

        //this.searching = new Searching(this.informationPanelContainer.element);
        //this.searching.element.classList.add('header__info-panel__searching');

        this.contacts = new Component(this.informationPanelContainer.element, 'div', ['header__info-panel__contacts']);
        this.createContacts();

        this.button = new Component(this.navigationPanelContainer.element, 'div', ['header__nav-panel__button']);
        this.buttonText = new Component(this.button.element, 'p', ['header__nav-panel__button__text'], 'Каталог');
        this.buttonBurgerContainer = new Component(this.button.element, 'div', ['header__nav-panel__button__burger-cont']);
        this.buttonSpan = new Component(this.buttonBurgerContainer.element, 'span', ['header__nav-panel__button__burger-cont__span']);
        this.categories =  new Component(this.button.element, 'div', ['header__nav-panel__button__categories']);
        this.findCategories();

        const openCategories = (e: { target: any }) => {
            if (e.target.classList[0] === 'header__nav-panel__button__categories' || e.target.classList[0] === 'header__nav-panel__button__categories__elements-block') {
                return;
            }

            if (this.dark.element.classList.contains('active')) {
                this.dark.element.style.height = `100vh`;
                this.dark.element.style.transitionTimingFunction = `ease-out`;
            } else {
                //this.dark.element.style.height = `${window.innerHeight + window.pageYOffset}px`;
                this.dark.element.style.height = `${document.documentElement.scrollHeight - 5}px`;
                this.dark.element.style.transitionTimingFunction = `ease-in`;
            }

            this.categories.element.classList.toggle('active');
            this.dark.element.classList.toggle('active');
        }

        this.button.element.addEventListener('click', openCategories);
        this.dark.element.addEventListener('click', openCategories);

        this.navigation = new Component(this.navigationPanelContainer.element, 'nav', ['header__nav-panel__nav']);
        this.createNavElements();
    }

    private createNavElements() {
        const navNames = ['Оплата и доставка', 'Возврат товара', 'Контакты'];
        const navLinks = ['#/payment-and-delivery', '#/return', '#/contacts'];
        for (let i = 0; i < navNames.length; i += 1) {
            const element = new Component(this.navigation.element, 'a', ['header__nav-panel__nav__element'], `${navNames[i]}`);
            element.element.setAttribute('href', `${navLinks[i]}`);
        }
    }

    private findCategories() {
        let item = '';
        let index = 0;
        for (let elem of Goods) {
            if (elem.name.split('|')[0] !== item) {
                item = elem.name.split('|')[0];
                index++;
                const elementsBlock = new Component(this.categories.element, 'div', ['header__nav-panel__button__categories__elements-block', `elements-block_${index}`]);
                const element = new Component(elementsBlock.element, 'a', ['header__nav-panel__button__categories__elements-block__element']);
                element.element.innerHTML = `<b>${elem.name.split('|')[0]}</b>`;
                element.element.setAttribute('href', `#/catalog/${elem.link.split('_')[0]}`);
            }
            const element = new Component(document.querySelector(`.elements-block_${index}`), 'a', ['header__nav-panel__button__categories__elements-block__element'], `${elem.name.split('|').join('')}`);
            element.element.setAttribute('href', `#/catalog/${elem.link.split('_')[0]}/${elem.link}`);
        }
    }

    private createContacts() {
        const photos = ['phone-blue.svg', 'email-blue.svg', 'insta-blue.svg'];
        const urls = ['tel:+375445053949', 'mailto:info@s-klad.by', 'https://www.instagram.com/moldir.opt/'];
        const texts = ['+375 44 505 39 49', 'info@s-klad.by', 'moldir.opt'];
        for (let i = 0; i < urls.length; i++) {
            const block = new Component(this.contacts.element, 'a', [`header__info-panel__contacts__block`]);
            block.element.setAttribute('href', `${urls[i]}`);
            const svg = new Component(block.element, 'div', [`header__info-panel__contacts__block-svg`]);
            svg.element.style.backgroundImage = `url("./assets/svg/${photos[i]}")`;
            const text = new Component(block.element, 'p', [`header__info-panel__contacts__block-text`]);
            text.element.innerHTML = `${texts[i]}`;
            if (photos[i].includes('insta')) {
                block.element.setAttribute('target', '_blank');
            }
        }
    }
}

export default Header;