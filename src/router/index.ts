import { IRoute } from '../interfaces';
import Main from '../pages/main/main';
import Categories from '../pages/categories/categories';
import Category from '../pages/category/category';
import Card from '../pages/card/card';
import DeliveryAndPayment from '../pages/delivery-and-payment/delivery-and-payment';
import Contacts from '../pages/contacts/contacts';

class Router {
  private readonly routes: Array<IRoute>;
  private defaultRoute: IRoute;
  private categoriesLink: string;
  private categoryLink: string;
  private cardLink: string;
  // Pages
  private mainPage: Main | undefined;
  private categoriesPage: Categories | undefined;
  private categoryPage: Category | undefined;
  private cardPage: Card | undefined;
  private deliveryAndPayment: DeliveryAndPayment | undefined;
  private contacts: Contacts | undefined;

  constructor(private rootElement: HTMLElement) {
    this.categoriesLink = '';
    this.categoryLink = '';
    this.cardLink = '';

    this.routes = [
      {
        name: '/',
        component: () => {
          this.mainPage = new Main(this.rootElement);
          this.rootElement.append(this.mainPage.element);
        },
      },

      {
        name: '/catalog/categories',
        component: () => {
          this.categoriesPage = new Categories(this.rootElement, this.categoriesLink);
          this.rootElement.append(this.categoriesPage.element);
        },
      },

      {
        name: '/catalog/category/goods',
        component: () => {
          this.categoryPage = new Category(this.rootElement, this.categoryLink);
          this.rootElement.append(this.categoryPage.element);
        },
      },

      {
        name: '/catalog/category/goods/card',
        component: () => {
          this.cardPage = new Card(this.rootElement, this.cardLink);
          this.rootElement.append(this.cardPage.element);
        },
      },

      {
        name: '/delivery_and_payment',
        component: () => {
          this.deliveryAndPayment = new DeliveryAndPayment(this.rootElement);
          this.rootElement.append(this.deliveryAndPayment.element);
        },
      },

      {
        name: '/contacts',
        component: () => {
          this.contacts = new Contacts(this.rootElement);
          this.rootElement.append(this.contacts.element);
        },
      },
    ];

    this.defaultRoute = {
      name: 'Default router',
      component: () => {
        //document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
        this.rootElement.innerHTML = '404. Page not found.';
      },
    };
  }

  updateRouter(): void {
    window.scrollTo(0, 0);
    const currentRouteName = window.location.hash.slice(1);
    if (currentRouteName === 'characteristics') {
      window.location.hash = `#${this.cardLink}`;
      return;
    }
    this.rootElement.innerHTML = '';
    if (currentRouteName.split('/').length === 3) {
      this.categoriesLink = currentRouteName.split('/')[currentRouteName.split('/').length - 1];
      const currentRoute = this.routes.find(
        (page) => page.name === '/catalog/categories',
      );
      (currentRoute || this.defaultRoute).component();
    } else if (currentRouteName.split('/').length === 4) {
      this.categoryLink = currentRouteName.split('/')[currentRouteName.split('/').length - 1];
      const currentRoute = this.routes.find(
        (page) => page.name === '/catalog/category/goods',
      );
      (currentRoute || this.defaultRoute).component();
    } else if (currentRouteName.split('/').length === 5) {
      this.cardLink = currentRouteName;
      const currentRoute = this.routes.find(
        (page) => page.name === '/catalog/category/goods/card',
      );
      (currentRoute || this.defaultRoute).component();
    } else {
      const currentRoute = this.routes.find(
        (page) => page.name === currentRouteName,
      );
      (currentRoute || this.defaultRoute).component();
    }
  }

  initRouter(): void {
    if (window.location.hash === '') {
      window.location.hash = '#/';
    }
    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}

export default Router;