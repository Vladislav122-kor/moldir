export interface IRoute {
  name: string;
  component: () => void;
}

export interface Category {
  name: string,
  photo: string,
  link: string,
  cards: {
    id: number,
    photo: string[],
    name: string,
    price: number,
    characteristics: [string, string[]][],
    additional: string[],
    presence: string,
    vendorCode: string,
    link: string,
    preLink: string,
  }[]
}

export interface Card {
  id: number,
  photo: string[],
  name: string,
  price: number,
  characteristics: [string, string[]][],
  additional: string[],
  presence: string,
  vendorCode: string,
  link: string,
  preLink: string,
}