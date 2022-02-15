import { ICart } from "./cart";

export interface cartItems {
totalAmount: number;
items: ICart[]
}

export interface TotalAmount {
    totalAmount:{
        price: number;
        amount:number;
    }
}