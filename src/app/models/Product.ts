export interface Product{
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
}

export const DEFAULT_PRODUCT: Product = {
    id: 0,
    name: "",
    price: 0,
    url: "",
    description: ""
}