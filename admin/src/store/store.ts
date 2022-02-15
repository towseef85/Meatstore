import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import HeadingStore from "./headingStore";
import ModelStore from "./modelStore";
import ProductStore from "../models/productStore";
import SliderStore from "./sliderStore";
import UnitStore from "./unitStore";
import WOfferStore from "./offerStore";
import WidgetItemStore from "./widgetItemStore";
import UserStore from "./userStore";
import CommonStore from "./commonStore";
import OrderStore from "./orderStore";
import RecepieStore from "./recepieStore";

interface Store{
    categoryStore: CategoryStore;
    productStore: ProductStore;
    unitStore: UnitStore;
    modelStore: ModelStore;
    sliderStore: SliderStore;
    headingStore: HeadingStore;
    offerStore: WOfferStore;
    widgetItemStore: WidgetItemStore;
    userStore: UserStore;
    commonStore: CommonStore;
    orderStore: OrderStore;
    recepieStore: RecepieStore;
}

export const store : Store={
    categoryStore: new CategoryStore(),
    productStore: new ProductStore(),
    unitStore:new UnitStore(),
    modelStore: new ModelStore(),
    sliderStore: new SliderStore(),
    headingStore: new HeadingStore(),
    offerStore: new WOfferStore(),
    widgetItemStore: new WidgetItemStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    orderStore: new OrderStore(),
    recepieStore: new RecepieStore()
}

export const StoreContext = createContext(store);


export function useStore(){
    return useContext(StoreContext)
}