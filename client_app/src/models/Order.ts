import { ICart } from "./cart";


    export interface OrderDetail {
        id: string;
        orderId: string;
        productId: string;
        quantity: number;
    }

    export interface IOrder {
        id: string;
        userId?: string;
        userAddressId?: string;
        status?: string;
        total?: string;
        createdOn?: string;
        orderDetails?: ICart[];
    }



