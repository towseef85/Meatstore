import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { IOrder, OrderStatusUpdate } from "../models/Order";
import agent from "../services/agent";
import { store } from "./store";

export default class OrderStore{
    orderRegistery = new Map<string, IOrder>()
    constructor() {
        makeAutoObservable(this)
        
    }
    get GetOrders(){
        return Array.from(this.orderRegistery.values()).sort((a,b) => a.createdOn.valueOf() - b.createdOn.valueOf())
    }

     loadOrders = async () => {
        try {
            const orders = await agent.orders.list();
            runInAction(() => {
                orders.forEach(c => {
                    this.orderRegistery.set(c.id, c);
                    
                });
            });

        } catch (error) {
            console.log(error);
        }
    };

    updateStatus = async(orderstatus: OrderStatusUpdate) =>{
        const orderdata = this.orderRegistery.get(orderstatus.id)
        try {
            await agent.orders.updateStatus(orderstatus)
            runInAction(()=>{
               orderdata!.status = orderstatus.status
               
                store.modelStore.closeModal()
            })
        } catch (error) {
            toast.error("unable to update order status")
        }
    }

}