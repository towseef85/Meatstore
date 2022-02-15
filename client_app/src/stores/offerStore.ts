import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../apis/agent";
import { IWOffers } from "../models/Offer";

export default class OfferStore{
    OfferRegistry = new Map<string, IWOffers>()

   
    constructor() {
        makeAutoObservable(this)
        
    }

    get offers(){
        return Array.from(this.OfferRegistry.values()).sort()
    }

    loadOffers= async() =>{
        try {
            const units = await agent.Woffers.list();
            runInAction(() =>{

                units.forEach(u => {
                    this.OfferRegistry.set(u.id, u)
            })
               
            })
        } catch (error) {
            toast.error(error);
        } 

    }
}