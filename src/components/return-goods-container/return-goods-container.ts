import Component from '../../utils/component';

import './return-goods-container.scss';

class ReturnGoodsContainer extends Component {
    private container: Component;
    private textBlock: Component;
    
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'section', ['return-goods-container']);

        this.container = new Component(this.element, 'div', ['return-goods-container__container']);

        this.textBlock = new Component(this.container.element, 'div', ['return-goods-container__text-block']);
        this.createText();
    }

    private createText() {
        const titles = [
            '',
            'Статья 23. Замена товара ненадлежащего качества',
            'Статья 28. Право потребителя на обмен и возврат товара надлежащего качества'
        ]
        const texts = [
            'Возврат товара осуществляется в соответствии с Законом Республики Беларусь от 9 января 2002 г. N 90-З "О защите прав потребителей".<br>Вернуть или обменять товар можно в течение 14 дней с момента его покупки.<br>Заявить о намерении вернуть товар можно по номеру телефона +375 44 505 39 49 либо написав на почту moldir.minsk@mail.ru, указав причину возврата товара (в случае товара ненадлежащего качества - описать дефекты и приложить подтверждающие фотографии).<br>Возврат денежных средств будет осуществлен на банковскую платежную карточку в течение 30 (тридцати) календарных дней со дня получения заявления о возврате.',
            `<ol>
                <li>В случае обнаружения потребителем недостатков товара и предъявления требования о замене такого товара продавец (изготовитель, поставщик, представитель) обязан заменить такой товар незамедлительно, а при необходимости дополнительной проверки качества такого товара продавцом (изготовителем, поставщиком, представителем) - заменить его в течение четырнадцати дней со дня предъявления указанного требования. При отсутствии у продавца (изготовителя, поставщика, представителя) необходимого для замены товара на день предъявления потребителем требования о его замене продавец (изготовитель, поставщик, представитель) должен заменить такой товар в течение месяца со дня предъявления указанного требования. В случае отсутствия у продавца (изготовителя, поставщика, представителя) товара данной модели (марки, типа, артикула и др.) по не зависящим от него причинам в течение месяца со дня предъявления требования потребителем продавец (изготовитель, поставщик, представитель) обязан предоставить ему аналогичный товар другой модели (марки, типа, артикула и др.) с согласия потребителя.</li>
                <li>Потребитель вправе предъявить продавцу или изготовителю требование о предоставлении потребителю на период замены безвозмездно во временное пользование аналогичного товара. Продавец или изготовитель обязаны удовлетворить требование потребителя в трехдневный срок со дня его предъявления, а также обеспечить доставку потребителю такого товара за свой счет. Порядок предоставления таких товаров, а также перечень товаров длительного пользования, на которые указанное требование не распространяется, устанавливаются Правительством Республики Беларусь. Требования настоящего пункта не распространяются на случаи, когда продавцом (изготовителем) является физическое лицо, осуществляющее реализацию товаров в рамках ремесленной деятельности или разовую реализацию товаров на рынке (производящее товары).</li>
                <li>Товар ненадлежащего качества должен быть заменен на новый, то есть на товар, не бывший в употреблении.</li>
                <li>При замене товара гарантийный срок исчисляется заново со дня передачи товара потребителю.</li>
            </ol>`,
            `<ol>
                <li>Потребитель вправе в течение четырнадцати дней с момента передачи ему непродовольственного товара, если более длительный срок не объявлен продавцом, в месте приобретения или иных местах, объявленных продавцом, возвратить товар надлежащего качества или обменять его на аналогичный товар других размера, формы, габарита, фасона, расцветки или комплектации, произведя в случае разницы в цене необходимый перерасчет с продавцом.</li>
                <li>Требование потребителя об обмене либо возврате товара подлежит удовлетворению, если товар не был в употреблении, сохранены его потребительские свойства и имеются доказательства приобретения его у данного продавца.</li>
                <li>Перечень непродовольственных товаров надлежащего качества, не подлежащих обмену и возврату, утверждается Правительством Республики Беларусь.</li>
                <li>При возврате потребителем товара надлежащего качества его требование о возврате уплаченной за товар денежной суммы подлежит удовлетворению продавцом незамедлительно. В случае, если удовлетворить требование потребителя незамедлительно не представляется возможным, максимальный срок для удовлетворения требования не может превышать семи дней. За нарушение указанных сроков продавец уплачивает потребителю за каждый день просрочки неустойку в размере одного процента цены товара на день его реализации потребителю.</li>
                <li>Пищевые продукты надлежащего качества обмену и возврату не подлежат.</li>
                <li>Требования настоящей статьи не распространяются на случаи, когда продавцом является физическое лицо, осуществляющее реализацию товаров в рамках ремесленной деятельности или разовую реализацию товаров на рынке.</li>
            </ol>`
        ];
        for (let i = 0; i < texts.length; i++) {
            const paragraph = new Component(this.textBlock.element, 'div', ['return-goods-container__text-block__paragraph']);
            const title = new Component(paragraph.element, 'h5', ['return-goods-container__text-block__paragraph__title'], titles[i]);
            const textPiece = new Component(paragraph.element, 'p', ['return-goods-container__text-block__paragraph__text']);
            textPiece.element.innerHTML = `${texts[i]}`;
        }
    }
}

export default ReturnGoodsContainer;