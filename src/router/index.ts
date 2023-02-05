import { IRoute } from '../interfaces';
import Main from '../components/main-container/main-container';
import Categories from '../components/categories-container/categories-container';
import Category from '../components/category-container/category-container';
import Card from '../components/card-container/card-container';
import PaymentAndDelivery from '../components/payment-and-delivery-container/payment-and-delivery-container';
import ReturnGoods from '../components/return-goods-container/return-goods-container';
import Contacts from '../components/contacts-container/contacts-container';
import Melana from '../components/melana-container/melana-container';

class Router {
  private readonly routes: Array<IRoute>;
  private defaultRoute: IRoute;
  private categoriesLink: string;
  private categoryLink: string;
  private cardLink: string;
  // Components
  private mainComponent: Main | undefined;
  private categoriesComponent: Categories | undefined;
  private categoryComponent: Category | undefined;
  private cardComponent: Card | undefined;
  private paymentAndDeliveryComponent: PaymentAndDelivery | undefined;
  private returnGoods: ReturnGoods | undefined;
  private contactsComponent: Contacts | undefined;
  private melanaComponent: Melana | undefined;

  constructor(private rootElement: HTMLElement) {
    this.categoriesLink = '';
    this.categoryLink = '';
    this.cardLink = '';

    this.routes = [
      {
        name: '/',
        component: () => {
          this.mainComponent = new Main(this.rootElement);
          this.rootElement.append(this.mainComponent.element);
        },
      },

      {
        name: '/catalog/categories',
        component: () => {
          this.categoriesComponent = new Categories(this.rootElement, this.categoriesLink);
          this.rootElement.append(this.categoriesComponent.element);
        },
      },

      {
        name: '/catalog/category/goods',
        component: () => {
          this.categoryComponent = new Category(this.rootElement, this.categoryLink);
          this.rootElement.append(this.categoryComponent.element);
        },
      },

      {
        name: '/catalog/category/goods/card',
        component: () => {
          this.cardComponent = new Card(this.rootElement, this.cardLink);
          this.rootElement.append(this.cardComponent.element);
        },
      },

      {
        name: '/payment-and-delivery',
        component: () => {
          this.paymentAndDeliveryComponent = new PaymentAndDelivery(this.rootElement);
          this.rootElement.append(this.paymentAndDeliveryComponent.element);
        },
      },

      {
        name: '/return',
        component: () => {
          this.returnGoods = new ReturnGoods(this.rootElement);
          this.rootElement.append(this.returnGoods.element);
        },
      },

      {
        name: '/contacts',
        component: () => {
          this.contactsComponent = new Contacts(this.rootElement);
          this.rootElement.append(this.contactsComponent.element);
        },
      },

      {
        name: '/about-melana',
        component: () => {
          this.melanaComponent = new Melana(this.rootElement);
          this.rootElement.append(this.melanaComponent.element);
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