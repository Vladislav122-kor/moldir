import { Category } from '../../../src/interfaces/index';

const goods: Category[] = [
    {
        name: 'Раковины накладные',
        photo: 'rakoviny_nakladnye.png',
        link: 'rakoviny_nakladnye',
        cards: [
            {
                id: 1,
                photo: ['mln-107sm', 'jpg', '4'],
                name: 'Накладная раковина mln-107sm (бронза)',
                price: 286.20,
                characteristics: [
                    ['Отверстие под перелив', ['нет']],
                    ['Отверстие под смеситель', ['нет']],
                    ['Поверхность', ['декоративная']],
                    ['Тип', ['накладная']],
                    ['Форма', ['круглая']],
                    ['Ширина', ['360']],
                    ['Глубина', ['360']],
                    ['Высота', ['155']],
                    ['Цвет', ['бронза']],
                ],
                additional: [
                    'Обжиг при температуре 1200-1300 С'
                ],
                presence: 'на складе',
                vendorCode: 'MLN-107SM',
                link: 'mln-107sm',
                preLink: 'rakoviny_nakladnye',
            },
        ]
    },
]

export default goods;