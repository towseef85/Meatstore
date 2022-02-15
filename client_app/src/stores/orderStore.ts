import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../apis/agent";
import { IOrder } from "../models/Order";

export default class OrderStore{
   orderRegistery = new Map<string, IOrder>()
    constructor() {
        makeAutoObservable(this)
        
    }
    get GetOrdersForUser(){
        return Array.from(this.orderRegistery.values()).sort()
    }

    loadOrders = async (id: string) =>{
        try {
            const orders = await agent.orders.list(id);
            runInAction(()=>{
                orders.forEach(c => {
                    this.orderRegistery.set(c.id, c)
                    console.log("user orders", c.id)
                })
            })
          
        } catch (error) {
            console.log(error)
        }
    }

    addOrder = async (order : any) =>{
       
       try {
        
         await  agent.orders.create(order)
         
         
       } catch (error) {
          toast.error(error)
       }
      }
}