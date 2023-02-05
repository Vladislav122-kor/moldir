import App from './app';
import './index.scss';

window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#root');
  const app = new App(rootElement as HTMLDivElement);

  app.init();
});