export interface IProduct {
  unit: {  square: number;
    status: string;
    price: number;
    bed: number;
    bath: number;
    room: number;
    direction: string;
    image: 
        {image: string,stas: string}[]
    },
    gallery: {image: string,type: string}[]
}