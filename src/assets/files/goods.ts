import { Category } from '../../../src/interfaces/index';

const exchangeRates: number = 2.4336;

/*fetch('https://www.nbrb.by/api/exrates/rates/431')
      .then((res) => {
        if (!res.ok) {
          exchangeRates = 2.5;
        }
        return res;
      })
      .then((data) => data.json())
      .then((number) => {
        exchangeRates = number.Cur_OfficialRate
      })
      .catch(() => exchangeRates = 2.5);*/


const goods: Category[] = [
    {
        name: 'Раковины| встраиваемые сверху',
        photo: 'rakoviny_vstraivaemye_sverhu.jpg',
        link: 'rakoviny_vstraivaemye_sverhu',
        cards: [
            {
                id: 1,
                photo: ['mln-307', 'jpg', '3'],
                name: 'Встраиваемая сверху раковина mln-307',
                price: parseFloat((49.6 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['есть']], ['Отверстие под смеситель', ['есть']], ['Тип', ['встраиваемая сверху']], ['Форма', ['овальная']], ['Ширина', ['520 мм']], ['Глубина', ['460 мм']], ['Высота', ['200 мм']], ['Цвет', ['белый']] ],
                additional: '',
                presence: 'под заказ',
                link: 'mln-307',
                preLink: 'rakoviny_vstraivaemye_sverhu',
                same: ['mln-308']
            },

            {
                id: 2,
                photo: ['mln-308', 'jpg', '2'],
                name: 'Встраиваемая сверху раковина mln-308',
                price: parseFloat((43.98 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['есть']], ['Отверстие под смеситель', ['есть']], ['Тип', ['встраиваемая сверху']], ['Форма', ['овальная']], ['Ширина', ['560 мм']], ['Глубина', ['480 мм']], ['Высота', ['205 мм']], ['Цвет', ['белый']] ],
                additional: 'Элегантная врезная раковина прекрасно впишется в стиль любой ванной комнаты: от классики до лофта. Помимо привлекательного внешнего вида и удобной формы раковина не требует особых усилий в уходе, долго сохраняет насыщенный белый цвет и глянцевый блеск.',
                presence: 'под заказ',
                link: 'mln-308',
                preLink: 'rakoviny_vstraivaemye_sverhu',
                same: ['mln-307']
            },

            {
                id: 3,
                photo: ['mln-320323', 'jpg', '2'],
                name: 'Встраиваемая сверху раковина mln-320323',
                price: parseFloat((59.92 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['есть']], ['Отверстие под смеситель', ['есть']], ['Тип', ['встраиваемая сверху']], ['Форма', ['прямоугольная']], ['Ширина', ['500 мм']], ['Глубина', ['440 мм']], ['Высота', ['250 мм']], ['Цвет', ['белый']] ],
                additional: '',
                presence: 'под заказ',
                link: 'mln-320323',
                preLink: 'rakoviny_vstraivaemye_sverhu',
                same: ['']
            },

            {
                id: 4,
                photo: ['mln-509', 'jpg', '6'],
                name: 'Встраиваемая сверху раковина mln-509',
                price: parseFloat((83.9 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['есть']], ['Отверстие под смеситель', ['нет']], ['Тип', ['встраиваемая сверху']], ['Форма', ['овальная']], ['Ширина', ['560 мм']], ['Глубина', ['420 мм']], ['Высота', ['170 мм']], ['Цвет', ['белый']] ],
                additional: '',
                presence: 'под заказ',
                link: 'mln-320323',
                preLink: 'rakoviny_vstraivaemye_sverhu',
                same: ['']
            },

            {
                id: 5,
                photo: ['mln-9048B', 'jpg', '7'],
                name: 'Встраиваемая сверху раковина mln-9048B',
                price: parseFloat((57.08 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['есть']], ['Отверстие под смеситель', ['есть']], ['Тип', ['встраиваемая сверху']], ['Форма', ['прямоугольная']], ['Ширина', ['415 мм']], ['Глубина', ['420 мм']], ['Высота', ['170 мм']], ['Цвет', ['белый']] ],
                additional: '',
                presence: 'под заказ',
                link: 'mln-9048B',
                preLink: 'rakoviny_vstraivaemye_sverhu',
                same: ['']
            },
        ]
    },

    {
        name: 'Раковины| встраиваемые снизу',
        photo: 'rakoviny_vstraivaemye_snizu.jpg',
        link: 'rakoviny_vstraivaemye_snizu',
        cards: [
            {
                id: 1,
                photo: ['mln-540', 'jpg', '2'],
                name: 'Встраиваемая снизу раковина mln-540',
                price: parseFloat((43.98 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['нет']], ['Отверстие под смеситель', ['нет']], ['Тип', ['встраиваемая снизу']], ['Форма', ['овальная']], ['Ширина', ['560 мм']], ['Глубина', ['440 мм']], ['Высота', ['200 мм']], ['Цвет', ['белый']] ],
                additional: '',
                presence: 'под заказ',
                link: 'mln-540',
                preLink: 'rakoviny_vstraivaemye_snizu',
                same: ['']
            },

            {
                id: 2,
                photo: ['mln-540n', 'jpg', '2'],
                name: 'Встраиваемая снизу раковина mln-540n',
                price: parseFloat((48.24 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['есть']], ['Отверстие под смеситель', ['нет']], ['Тип', ['встраиваемая снизу']], ['Форма', ['прямоугольная']], ['Ширина', ['480 мм']], ['Глубина', ['360 мм']], ['Высота', ['195 мм']], ['Цвет', ['белый']] ],
                additional: 'Врезная раковина, устанавливаемая под столешницу, придает современный вид всей ванной комнате. Отсутствие внешних стыков позволяет легко осуществлять уход "одним движением" и экономить полезную площадь на поверхности столешницы.',
                presence: 'под заказ',
                link: 'mln-540n',
                preLink: 'rakoviny_vstraivaemye_snizu',
                same: ['']
            },
        ]
    },

    {
        name: 'Раковины| накладные (цветные)',
        photo: 'rakoviny_nakladnye_cvetnye.png',
        link: 'rakoviny_nakladnye_cvetnye',
        cards: [
            {
                id: 1,
                photo: ['mln-t4022-g28', 'jpg', '2'],
                name: 'Накладная раковина mln-t4022-g28 (золото)',
                price: 456.59,
                characteristics: [ ['Отверстие под перелив', ['нет']], ['Отверстие под смеситель', ['нет']], ['Поверхность', ['декоративная']], ['Тип', ['накладная']], ['Форма', ['круглая']], ['Ширина', ['390 мм']], ['Глубина', ['390 мм']], ['Высота', ['140 мм']], ['Цвет', ['золото']] ],
                additional: 'Обжиг при температуре 1200-1300 C&#176.',
                presence: 'на складе',
                link: 'mln-t4022-g28',
                preLink: 'rakoviny_nakladnye_cvetnye',
                same: ['']
            },
        ]
    },

    {
        name: 'Кухонные мойки| 1,2 мм',
        photo: 'kuhonnye_mojki_1,2_mm.jpg',
        link: 'kuhonnye_mojki_1,2_mm',
        cards: [
            {
                id: 1,
                photo: ['d400b', 'jpg', '3'],
                name: 'Кухонная мойка 1,2/200 графит d400b',
                price: parseFloat((265.68 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['да']], ['Отверстие под смеситель', ['нет']], ['Тип', ['врезная']], ['Форма', ['многоугольная']], ['Толщина стали', ['1,2 мм']], ['Расположение чаши', ['универсальная']], ['Ширина', ['400 мм']], ['Глубина', ['400 мм']], ['Высота', ['200 мм']], ['Цвет', ['графит']] ],
                additional: '',
                presence: 'под заказ',
                link: 'd400b',
                preLink: 'kuhonnye_mojki_1,2_mm',
                same: ['d400br', 'd400g']
            },

            {
                id: 2,
                photo: ['d400br', 'jpg', '3'],
                name: 'Кухонная мойка 1,2/200 бронза d400br',
                price: parseFloat((265.68 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['да']], ['Отверстие под смеситель', ['нет']], ['Тип', ['врезная']], ['Форма', ['многоугольная']], ['Толщина стали', ['1,2 мм']], ['Расположение чаши', ['универсальная']], ['Ширина', ['400 мм']], ['Глубина', ['400 мм']], ['Высота', ['200 мм']], ['Цвет', ['бронза']] ],
                additional: '',
                presence: 'под заказ',
                link: 'd400br',
                preLink: 'kuhonnye_mojki_1,2_mm',
                same: ['d400b', 'd400g']
            },

            {
                id: 3,
                photo: ['d400g', 'jpg', '3'],
                name: 'Кухонная мойка 1,2/200 золото d400g',
                price: parseFloat((265.68 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['да']], ['Отверстие под смеситель', ['нет']], ['Тип', ['врезная']], ['Форма', ['многоугольная']], ['Толщина стали', ['1,2 мм']], ['Расположение чаши', ['универсальная']], ['Ширина', ['400 мм']], ['Глубина', ['400 мм']], ['Высота', ['200 мм']], ['Цвет', ['золото']] ],
                additional: '',
                presence: 'под заказ',
                link: 'd400g',
                preLink: 'kuhonnye_mojki_1,2_mm',
                same: ['d400b', 'd400br']
            },
        ]
    },

    {
        name: 'Кухонные мойки| 3 мм',
        photo: 'kuhonnye_mojki_3_mm.jpg',
        link: 'kuhonnye_mojki_3_mm',
        cards: [
            {
                id: 1,
                photo: ['d5050hg', 'jpg', '4'],
                name: 'Кухонная мойка 3/200 золото d5050hg',
                price: parseFloat((236.68 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['да']], ['Отверстие под смеситель', ['да']], ['Тип', ['врезная']], ['Форма', ['квадратная']], ['Вид поверхности', ['PVD золото']], ['Монтаж', ['сверху на столешницу']], ['Комплектация', ['сифон']], ['Толщина стали борта', ['3 мм']], ['Толщина стали чаши', ['1,2 мм']], ['Диаметр слива, дюйм', ['3 1/2']], ['Ширина', ['500 мм']], ['Глубина', ['500 мм']], ['Высота', ['200 мм']], ['Цвет', ['золото']] ],
                additional: 'Квадратная кухонная мойка с небольшой платформой для смесителя и моющих средств компактно впишется в интерьер современной кухни. Глубокая вместительная чаша справится с большим объемом посуды. Толстая сталь, устойчивая к высоким температурам, легко выдержит горячие сковороды и кастрюли.<br>Особенностью мойки является ее золотое PVD-покрытие, созданное на основе нанотехнологий, которое делает ее более долговечной и устойчивой к появлению царапин. Также покрытие способствует скатыванию капель воды со стенок чаши. На поверхности не остается следов от них, поэтому не требуется лишних усилий для поддержания привлекательного вида мойки.<br>Мойка практична и гигиенична. Поддерживать ее чистоту проще благодаря скругленным внутренним углам и конструкции дна с небольшим уклоном, который не позволяет воде застаиваться в чаше.<br>Широкий диаметр слива препятствует возникновению засоров, а наличие отверстия для перелива делает использование мойки более безопасным.<br>Снижение шума от воды при эксплуатации мойки обеспечивают изоляционный слой и накладки на обратной стороны мойки. Благодаря им использование мойки становится тихим и комфортным.<br>Мойка комплектуется сифоном с выводом для подключения к канализации и набором для базового способа монтажа.<br>Базовым способом монтажа для мойки является установка сверху в вырезанное в столешнице отверстие. Однако данная модель подходит для установки под столешницу. В таком случае крепежи приобретаются отдельно.',
                presence: 'под заказ',
                link: 'd5050hg',
                preLink: 'kuhonnye_mojki_3_mm',
                same: ['']
            },
        ]
    },

    {
        name: 'Донные клапаны| без перелива',
        photo: 'donnye_klapany_bez_pereliva.jpg',
        link: 'donnye_klapany_bez_pereliva',
        cards: [
            {
                id: 1,
                photo: ['mln-tb20-1', 'jpg', '2'],
                name: 'Донный клапан без перелива (белый) mln-tb20-1',
                price: parseFloat((25.31 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['нет']], ['Ширина', ['70 мм']], ['Глубина', ['70 мм']], ['Высота', ['110 мм']], ['Цвет', ['белый']] ],
                additional: 'Белый донный клапан - стильное решение для оформления слива у раковины. Он идеально подходит для белых раковин, но также прекрасно может дополнить умывальники из коллекции цветного фаянса Melana.<br>Донный клапан изготовлен из долговечной латуни. Керамический диск покрыт белой глазурью. Он оснащен механизмом click-clack, который позволяет перекрыть слив и набрать воду в раковине.<br>Донный клапан без перелива подходит для раковин, не имеющих отверстия для перелива.',
                presence: 'под заказ',
                link: 'mln-tb20-1',
                preLink: 'donnye_klapany_bez_pereliva',
                same: ['']
            },

            {
                id: 2,
                photo: ['mln-330303br', 'jpg', '3'],
                name: 'Донный клапан без перелива (бронза) mln-330303br в блистере',
                price: parseFloat((25.65 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['нет']], ['Ширина', ['65 мм']], ['Глубина', ['65 мм']], ['Высота', ['90-110 мм']], ['Цвет', ['бронза']] ],
                additional: 'Донный клапан выполнен из долговечной латуни. Механизм клик-клак позволяет перекрыть слив и набрать воду в раковине.',
                presence: 'под заказ',
                link: 'mln-330303br',
                preLink: 'donnye_klapany_bez_pereliva',
                same: ['']
            },

            {
                id: 3,
                photo: ['mln-330304g', 'jpg', '3'],
                name: 'Донный клапан без перелива (золото) mln-330304g в блистере',
                price: parseFloat((25.65 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['нет']], ['Ширина', ['65 мм']], ['Глубина', ['65 мм']], ['Высота', ['90-110 мм']], ['Цвет', ['золото']] ],
                additional: 'Донный клапан выполнен из долговечной латуни. Механизм клик-клак позволяет перекрыть слив и набрать воду в раковине.',
                presence: 'под заказ',
                link: 'mln-330304g',
                preLink: 'donnye_klapany_bez_pereliva',
                same: ['']
            },

            {
                id: 4,
                photo: ['mln-tb52-1', 'jpg', '3'],
                name: 'Донный клапан без перелива (хром) mln-tb52-1',
                price: parseFloat((25.31 * exchangeRates).toFixed(2)),
                characteristics: [ ['Отверстие под перелив', ['нет']], ['Ширина', ['70 мм']], ['Глубина', ['85 мм']], ['Высота', ['107 мм']], ['Цвет', ['серебро']] ],
                additional: 'Донный клапан хром - стильное и современное решение для оформления слива у раковины. Он подходит для умывальников практически любого цвета. Прекрасно гармонирует со смесителями и аксессуарами серебристого оттенка.<br>Донный клапан изготовлен из долговечной латуни. Керамический диск покрыт серебристой глазурью. Он оснащен механизмом click-clack, который позволяет перекрыть слив и набрать воду в раковине.',
                presence: 'под заказ',
                link: 'mln-tb52-1',
                preLink: 'donnye_klapany_bez_pereliva',
                same: ['']
            },
        ]
    },
]

export default goods;