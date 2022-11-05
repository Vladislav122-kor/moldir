import { IRoute } from '../interfaces';
import Main from '../pages/main/main';
import Category from '../pages/category/category';

class Router {
  private readonly routes: Array<IRoute>;

  private defaultRoute: IRoute;

  private categoryLink: string;

  // Pages
  private mainPage: Main | undefined;

  private categoryPage: Category | undefined;

  constructor(private rootElement: HTMLElement) {
    this.categoryLink = '';

    this.routes = [
      {
        name: '/',
        component: () => {
          //document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
          //document.querySelector('.header__link-main')?.classList.add('active');
          this.mainPage = new Main(this.rootElement);
          this.rootElement.append(this.mainPage.element);
        },
      },

      {
        name: '/category',
        component: () => {
          //document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
          //document.querySelector('.header__link-trainings')?.classList.add('active');
          this.categoryPage = new Category(this.rootElement, this.categoryLink);
          this.rootElement.append(this.categoryPage.element);
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

    this.rootElement.innerHTML = '';

    if (currentRouteName.split('/').length === 3) {
      this.categoryLink = currentRouteName.split('/')[2];
      const currentRoute = this.routes.find(
        (page) => page.name === '/category',
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