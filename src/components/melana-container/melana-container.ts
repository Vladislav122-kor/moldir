import Component from '../../utils/component';

import './melana-container.scss';

class MelanaContainer extends Component {
    private container: Component;
    private informationBlock: Component;
    private logoContainer: Component;
    private title: Component;
    private logo: HTMLImageElement;
    
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'section', ['melana-container']);

        this.container = new Component(this.element, 'div', ['melana-container__container']);
        this.logoContainer = new Component(this.container.element, 'div', ['melana-container__logo-cont']);
        this.title = new Component(this.logoContainer.element, 'h5', ['melana-container__logo-cont__title'], 'О компании');
        this.logo = document.createElement('img');
        this.logo.src = "./assets/img/melana-logo.png";
        this.logo.setAttribute('width', '150');
        this.logo.setAttribute('alt', 'Логотип Melana');
        this.logoContainer.element.appendChild(this.logo);
        this.informationBlock = new Component(this.container.element, 'div', ['melana-container__inform-block']);
        this.createTextForInformBlock();
    }

    private createTextForInformBlock() {
        const blocks = [
            'Торговая марка «Мелана» основана в 2006 году в России крупным поставщиком сантехники.',
            'Под этой маркой начинается производство кухонных моек из нержавеющей стали. Стратегия MELANA™ предусматривает одновременное динамичное продвижение на все крупные рынки сантехники в России и СНГ. Благодаря продуманным решениям в области ценовой политики MELANA™ занимает нишу с минимальной стоимостью в своем классе.',
            'Высокое качество продукции в сочетании с гибким производством и коммерческой организацией вывели MELANA™ на значимые позиции среди лидеров в производстве кухонных моек из нержавеющей стали.',
            'При разработке новых моделей профессиональные дизайнеры учитывают существующие тенденции рынка, поэтому каждый год в ассортимент добавляется порядка пяти оригинальных позиций.',
            'В конце 2009 года было принято решение запустить производство сантехнических изделий: унитазов раковин, биде.',
            'Все товары производятся из высококачественного сырья и имеют интересный дизайн.',
            'Все это в сочетании с невысокой ценой представляет MELANA™.',
            'Кухонные мойки MELANA™ сделаны из высококачественной нержавеющей стали марки 201. Сталь 201 марки — это смесь хрома и никеля, которая рассчитана на использование в пищевой промышленности (т.е. она не вступает в контакт с пищевыми кислотами и т.п. воздействием).<br>Также данный вид стали обладает высокой коррозионной стойкостью, что позволяет по праву называть ее нержавеющей.<br>Кухонные мойки под торговой маркой MELANA™ имеют ряд преимуществ перед своими конкурентами оптимальным соотношением цены и качества.<br>Вот уже уже 6 лет продукция MELANA™ покупается на территории России, Украины, Белоруссии и Казахстана, и зарекомендовала себя как стабильно качественная кухонная мойка.<br>С каждым годом не только увеличивается объем продаж, но и растет ассортимент моек из нержавейки, вводятся новые модели.<br>Торговая марка MELANA™ заняла свою нишу в эконом классе и удерживает ее уже довольно долгий период, ведь каждая четвертая кухонная мойка из нержавейки — мойка MELANA™. MELANA ProfLine это новое направление в кухонной мойке, то есть она толще, тяжелее, с еще более высоким качеством стали, каждая мойка из нержавеющей стали индивидуально упакована, использованы не стандартные, а дизайнерские формы, одним словом, вы покупаете европейскую кухонную мойку по азиатским ценам.<br>Мойки MELANA™ почти не требуют ухода, главное не использовать абразивные моющие средства и не оставлять капли воды на поверхности, т.е. протирать насухо. При соблюдении этих простых правил эксплуатации технически мойка прослужит не менее 10 лет.'
        ];

        for (let i = 0; i < blocks.length; i++) {
            const textPiece = new Component(this.informationBlock.element, 'p', ['melana-container__inform-block__text']);
            textPiece.element.innerHTML = blocks[i];
        }
    }
}

export default MelanaContainer;