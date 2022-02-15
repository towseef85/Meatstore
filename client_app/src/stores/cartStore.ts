import { makeAutoObservable, runInAction } from "mobx";
import { ICart } from "../models/cart";
import agent from "../apis/agent";
import { toast } from "react-toastify";

export default class CartStore{
 cartRegistry = new Map<string, ICart>()


  constructor() {
      makeAutoObservable(this)
      
  }

  get totalAmount(){
    let total =0;
     this.cartRegistry.forEach( item  =>
      total = total + item.price! * item.quantity!)
      return total;
  }


  get AddedCartItems(){
    return Array.from(this.cartRegistry.values()).sort()
}

  handleAddToCart= async(clickedCartItem: ICart) =>{
        const isItemInCart= this.cartRegistry.get(clickedCartItem.productId!)
        runInAction(() =>{
          
          if(isItemInCart){
            isItemInCart.quantity = isItemInCart.quantity! + 1
            
            this.cartRegistry.set(isItemInCart.productId!, isItemInCart) 
           
          }
          
          return this.cartRegistry.set(clickedCartItem.productId!, clickedCartItem)
          
        })
        
  }

  handleRemoveFromCart= (removeItem: ICart) =>{
    const isItemInCart= this.cartRegistry.get(removeItem.productId!)
      runInAction(()=>{
        if(isItemInCart)
        {
          isItemInCart.quantity = isItemInCart.quantity! -1
          
          if(isItemInCart.quantity == 0) return this.cartRegistry.delete(isItemInCart.productId!)
          this.cartRegistry.set(isItemInCart.productId!, isItemInCart)
         
        }
        
      
       })
  }

  removeCompleteProduct =(removeProduct: ICart) =>{
    runInAction(() => this.cartRegistry.delete(removeProduct.productId!))
  }
   
  addOrder = async (order : any) =>{
    console.log("from store", order)
   try {
    
     await  agent.orders.create(order)
     
     runInAction(() =>{
      
     })
   } catch (error) {
      toast.error(error)
   }
  }

  
}
