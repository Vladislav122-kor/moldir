export interface IRoute {
  name: string;
  component: () => void;
}

export interface Category {
  category: string[],
  subCategory: string[],
  cards: {
    id: string,
    photoAmount: number,
    name: string,
    price: number,
    characteristics: [string, string[]][],
    additional: string,
    presence: string,
    same: string[]
  }[]
}

export interface Card {
  id: string,
  photoAmount: number,
  name: string,
  price: number,
  characteristics: [string, string[]][],
  additional: string,
  presence: string,
  same: string[]
}

export interface PopularCard {
  id: string,
  photoAmount: number,
  name: string,
  price: number,
  characteristics: [string, string[]][],
  additional: string,
  presence: string,
  category: string[],
  subCategory: string[],
  same: string[]
}