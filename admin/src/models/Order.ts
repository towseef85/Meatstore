import { IUser } from "./User";
import { IUserAddress } from "./UserAddress";

export interface IOrder {
    id: string;
    userId?: string;
    userAddressId?: string;
    status?: string;
    total?: string;
    createdOn: Date;
    orderDetails?: OrderDetails[];
    user?:IUser;
    userAddress?:IUserAddress;
}

export interface OrderDetails{
    productId?: string;
    price?: number;
    title?: string;
    orderId?: string;
    quantity?: number;
}

export interface OrderStatusUpdate{
    id:string;
    status:string;
}

