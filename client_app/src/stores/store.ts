import { createContext, useContext, useEffect } from "react";
import { create } from "mobx-persist";
import CartStore from "./cartStore";
import CategoryStore from "./categoryStore";
import CommonStore from "./commonStore";
import HeadingStore from "./headingStore";
import OfferStore from "./offerStore";
import ProductStore from "./productStore";
import SliderStore from "./sliderStore";
import UserStore from "./userStore";
import OrderStore from "./orderStore";

interface Store{
    categoryStore: CategoryStore;
    sliderStore: SliderStore;
    headingStore: HeadingStore;
    offerStore:OfferStore;
    productStore: ProductStore;
    cartStore: CartStore;
    commonStore:CommonStore;
    userStore: UserStore;
    orderStore: OrderStore;
}

export const store: Store ={
    categoryStore: new CategoryStore(),
    sliderStore: new SliderStore(),
    headingStore: new HeadingStore(),
    offerStore: new OfferStore(),
    productStore: new ProductStore(),
    cartStore: new CartStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    orderStore: new OrderStore()
        
 
}

const hydrate = create({
    Storage:localStorage,
    jsonify: true
})

export const StoreContext = createContext(store)

export function useStore(){
    useEffect(()=>{
        hydrate("userStore", store.userStore)
    },[])
    return useContext(StoreContext);
}