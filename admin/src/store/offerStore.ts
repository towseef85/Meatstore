import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { IWOffers } from "../models/Widgets/WOffers";
import agent from "../services/agent";
import { store } from "./store";

export default class WOfferStore{
    OfferRegistry= new Map<string, IWOffers>()
    loading=false

   
    constructor() {
        makeAutoObservable(this)
    }

    get Woffers(){
        return Array.from(this.OfferRegistry.values()).sort()
    }

    loadOffers = async() =>{
        try {
            this.loading=true
            const offers = await agent.Woffers.list()
            runInAction(() =>{
                this.loading=false
                offers.forEach(o => {
                    this.OfferRegistry.set(o.id, o)
                })
            })
        } catch (error) {
            this.loading=false;
            toast.error(error)
        }
    }

    createOffers= async(offerData: FormData) =>{
        try {
            this.loading= true
            await agent.Woffers.create(offerData)
            runInAction(() =>{
                this.loading=false;
                store.modelStore.closeModal();
                toast.success("Offer Added Successfully")
            })
        } catch (error) {
            
        }
    }
}