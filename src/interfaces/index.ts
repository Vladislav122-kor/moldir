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
    size: [string, number][],
    additional: string[],
    vendorCode: string,
    link: string
  }[]
}