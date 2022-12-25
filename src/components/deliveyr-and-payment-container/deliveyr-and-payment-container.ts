import Component from '../../utils/component';

import './deliveyr-and-payment-container.scss';

class DeliveryAndPaymentContainer extends Component {
    container: Component;
    
    
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['deliveyr-and-payment-container']);

        this.container = new Component(this.element, 'div', ['deliveyr-and-payment-container__container']);
        this.createText();
    }

    private createText() {
        const blocks = [
            'При заказе товара можно воспользоваться бесплатной услугой доставки в пределах города Минск, либо забрать самостоятельно по адресу г. Минск, ул. ... Доставка и самовывоз работают ежедневно с 09:00 до 22:00.',
            'В случае если товар на сайте помечен надписью "под заказ" - оператор свяжется с Вами в течение недели о его приходе на склад, в иных случаях товар может быть доставлен или получен в пункте самовывоза в течение дня.',
            'Заказать товар можно по номеру телефона +375 29 123 45 67, через инстаграм, или написав письмо на почту the.best.san@technica.by. Раздел "Корзина" временно не работает, приносим извенения за доставленные неудобства.'
        ];

        for (let elem of blocks) {
            const textPiece = new Component(this.container.element, 'p', ['deliveyr-and-payment-container__text']);
            textPiece.element.innerHTML = elem;
        }
    }
}

export default DeliveryAndPaymentContainer;