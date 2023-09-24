import { IRoute } from '../interfaces';
import Main from '../components/main-container/main-container';
import Category from '../components/category-container/category-container';
import Card from '../components/card-container/card-container';
import PaymentAndDelivery from '../components/payment-and-delivery-container/payment-and-delivery-container';
import ReturnGoods from '../components/return-goods-container/return-goods-container';
import Contacts from '../components/contacts-container/contacts-container';
import Melana from '../components/melana-container/melana-container';

class Router {
  private readonly routes: Array<IRoute>;
  private defaultRoute: IRoute;
  private cardLink: string;

  private mainComponent: Main | undefined;
  private categoryComponent: Category | undefined;
  private cardComponent: Card | undefined;
  private paymentAndDeliveryComponent: PaymentAndDelivery | undefined;
  private returnGoods: ReturnGoods | undefined;
  private contactsComponent: Contacts | undefined;
  private melanaComponent: Melana | undefined;

  constructor(private rootElement: HTMLElement) {
    this.cardLink = '';

    this.routes = [
      {
        name: '/',
        component: () => {
          this.mainComponent = new Main(this.rootElement);
          this.rootElement.append(this.mainComponent.element);
        }
      },

      {
        name: '/catalog/category',
        component: () => {
          this.categoryComponent = new Category(this.rootElement);
          this.rootElement.append(this.categoryComponent.element);
        }
      },

      {
        name: '/catalog/category/card',
        component: () => {
          this.cardComponent = new Card(this.rootElement);
          this.rootElement.append(this.cardComponent.element);
        }
      },

      {
        name: '/payment-and-delivery',
        component: () => {
          this.paymentAndDeliveryComponent = new PaymentAndDelivery(this.rootElement);
          this.rootElement.append(this.paymentAndDeliveryComponent.element);
        }
      },

      {
        name: '/return',
        component: () => {
          this.returnGoods = new ReturnGoods(this.rootElement);
          this.rootElement.append(this.returnGoods.element);
        }
      },

      {
        name: '/contacts',
        component: () => {
          this.contactsComponent = new Contacts(this.rootElement);
          this.rootElement.append(this.contactsComponent.element);
        }
      },

      {
        name: '/about-melana',
        component: () => {
          this.melanaComponent = new Melana(this.rootElement);
          this.rootElement.append(this.melanaComponent.element);
        }
      }
    ];

    this.defaultRoute = {
      name: 'Default router',
      component: () => {
        this.rootElement.innerHTML = '404. Page not found.';
      },
    }
  }

  updateRouter(): void {
    const currentRouteName = window.location.hash.slice(1);

    if (currentRouteName === 'characteristics') {
      window.location.hash = `#${this.cardLink}`;
      return;
    }

    window.scrollTo(0, 0);
    this.rootElement.innerHTML = '';

    if (currentRouteName.split('/').length === 3 || currentRouteName.split('/').length === 4) {
      const currentRoute = this.routes.find(
        (page) => page.name === '/catalog/category',
      );
      (currentRoute || this.defaultRoute).component();
    } 
    else if (currentRouteName.split('/').length === 5) {
      this.cardLink = currentRouteName;
      const currentRoute = this.routes.find(
        (page) => page.name === '/catalog/category/card',
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