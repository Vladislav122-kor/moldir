import Component from '../../utils/component';

import './payment-and-delivery-container.scss';

class PaymentAndDeliveryContainer extends Component {
    private container: Component;
    private buttons: Component;
    private informationBlock: Component;
    private paymentBlock: Component;
    private littleTitle: Component;
    private aboutPayment: Component;
    
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'section', ['payment-container']);

        this.container = new Component(this.element, 'div', ['payment-container__container']);
        this.informationBlock = new Component(this.container.element, 'div', ['payment-container__inform-block']);
        this.createTextForInformBlock();
        this.paymentBlock = new Component(this.container.element, 'div', ['payment-container__payment-block']);
        this.littleTitle = new Component(this.paymentBlock.element, 'h5', ['payment-container__payment-block__title'], 'Способы оплаты');
        this.buttons = new Component(this.paymentBlock.element, 'div', ['payment-container__payment-block__buttons']);
        this.createButtons();
        this.aboutPayment = new Component(this.paymentBlock.element, 'div', ['payment-container__payment-block__about']);
        this.createTextForPaymentDescription('cash');
    }

    private createTextForInformBlock() {
        const titles = ['Оформление заказа', '', '', 'Доставка'];
        const blocks = [
            'Заказать товар можно по номеру телефона <b>+375 44 505 39 49</b> (звонок/Viber), через Instagram, или написав на почту info@s-klad.by.<br>Раздел "Корзина" временно не работает, приносим извинения за доставленные неудобства.',
            'Выбирая товар <b>в наличии</b>, вы можете оплатить его при получении* либо посредством онлайн-оплаты.<br>Если товар есть в наличии, доставка возможна в этот же день*, при условии оформления заказа до 12:00. В иных случаях доставка будет осуществляться на следующий день.<br>* <i>Обратите внимание, что отмеченные опции доступны только при условии доставки в пределах города Минска.</i>',
            'Если товар помечен надписью <b>"под заказ"</b>, его доставка осуществляется по предоплате 100%. Предоплата производится онлайн после подтверждения заказа оператором. В таком случае товар доставляется в течение 10-14 рабочих дней.',
            'Доставка в пределах города Минска осуществляется бесплатно. Время доставки ежедневно с 18:00 до 22:00.<br>Доставка за пределы города Минска осуществляется европочтой. В таком случае оплатить товар можно только посредством онлайн-оплаты.'
        ];

        for (let i = 0; i < blocks.length; i++) {
            const paragraph = new Component(this.informationBlock.element, 'div', ['payment-container__inform-block__paragraph']);
            const title = new Component(paragraph.element, 'h5', ['payment-container__inform-block__paragraph__title'], titles[i]);
            const textPiece = new Component(paragraph.element, 'p', ['payment-container__inform-block__paragraph__text']);
            textPiece.element.innerHTML = blocks[i];
        }
    }

    private createButtons() {
        const classNames = ['cash', 'online'];
        const text = ['Оплата при получении', 'Онлайн-оплата'];
        for (let i = 0; i < text.length; i++) {
            const button = new Component(this.buttons.element, 'div', ['payment-container__payment-block__buttons__button', `${classNames[i]}`], `${text[i]}`);
            button.element.addEventListener('click', (e) => {
                document.querySelectorAll('.payment-container__payment-block__buttons__button').forEach((item) => item.classList.remove('active'));
                (e.target as HTMLDivElement).classList.add('active');
                this.createTextForPaymentDescription((e.target as HTMLDivElement).classList[1]);
            });
            if (i === 0) {
                button.element.classList.add('active');
            }
        }
    }

    private createTextForPaymentDescription(className: string) {
        const paymentDescription: any = {
            cash: 'Вы можете оплатить заказ <b>наличными</b> либо <b>банковской картой</b> при получении. Сотрудник службы доставки вместе с товаром передаст все необходимые документы и кассовый чек.',
            online: `<p>Оплата банковскими картами осуществляется через <i>ЗАО «Альфа-Банк»</i>. К оплате принимаются карты международных платежных систем VISA, MasterCard, платежной системы БЕЛКАРТ. Оплату также можно совершить посредством сервисов Apple Pay, Samsung Pay.</p>
            <img src="./assets/img/cards_horizontal.png" width="100%" alt="Логотипы карточек">
            <p>Безопасность совершения платежа обеспечивается современными методами проверки, шифрования и передачи данных по закрытым каналам связи. Ввод данных карточки осуществляется на защищенной авторизационной странице банка. Для оплаты необходимо ввести реквизиты карточки: номер, имя держателя, срок действия и трехзначный код безопасности. Трёхзначный код безопасности (CVV2 для VISA, CVC2 для MasterCard) — это три цифры, находящиеся на обратной стороне карточки.<br>Если карточка поддерживает технологию 3DSecure или Интернет-пароль для держателей карточек БЕЛКАРТ, Вы будете перенаправлены на страницу банка, выпустившего карточку, для ввода кода безопасности. При оплате с помощью Apple Pay выберете карту из приложения Wallet, воспользуйтесь кодпаролем или иным способом аутентификации, в зависимости от того, какой способ выбран в приложении. При оформлении заказа с помощью Samsung Pay нажмите «Оплатить Samsung Pay», введите ваш Samsung Account и подтвердите покупку на вашем смартфоне (по отпечатку пальца, радужке или PIN-коду Samsung Pay).</p>
            <p>Предоставляемая Вами персональная информация (например, имя, адрес, телефон, e-mail, номер банковской карты и прочее) является конфиденциальной и не подлежит разглашению. Данные карточки передаются только в зашифрованном виде и не сохраняются на данном интернет-ресурсе</p>`,
        }
        this.aboutPayment.element.innerHTML = `${paymentDescription[className]}`;
    }
}

export default PaymentAndDeliveryContainer;