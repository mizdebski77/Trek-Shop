export interface ProductInterface {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string
};

export interface CartItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    cartQuantity: number; 
};