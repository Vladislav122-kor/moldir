import { Category } from '../../../src/interfaces/index';

const goods: Category[] = [
    {
        name: 'Раковины',
        photo: 'rakoviny.png',
        link: 'rakoviny',
        cards: [
            {
                id: 1,
                photo: [
                    ''
                ],
                name: 'Накладная раковина melana mln-107sm (бронза)',
                price: 286.20,
                characteristics: [
                    ['Поверхность', ['декоративная']],
                    ['Материал', ['керамика']],
                    ['Тип', ['накладная']],
                    ['Форма', ['круглая']],
                    ['Отверстие под клапан для перелива', ['нет']],
                    ['Отверстие под смеситель', ['нет']],
                    ['Цвет', ['бронза']],
                ],
                size: [
                    ['Ширина, мм', 360],
                    ['Глубина, мм', 360],
                    ['Высота, мм', 155],
                ],
                additional: [
                    'Обжиг при температуре 1200-1300 С'
                ],
                vendorCode: 'MLN-107SM',
                link: 'MLN-107SM'
            },
        ]
    }
]

export default goods;