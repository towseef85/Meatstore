import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { IWidgetItems } from "../models/Widgets/WidgetItems";
import agent from "../services/agent";
import { store } from "./store";


export default class WidgetItemStore{
    WidgetItemRepository = new Map<string, IWidgetItems>()
    loading=false

    constructor() {
        makeAutoObservable(this)
        
    }

    get WidgetItems(){
        return Array.from(this.WidgetItemRepository.values()).sort()
    }

    createItem = async(item: FormData)=>{
        try {
            await agent.WidgetItems.create(item)
            .then(res => {
                if(res.status == 200){
                    runInAction(() =>{
                
                        toast.success("Widget Item Added Successfully")
                        store.modelStore.closeModal();
                      
                    })
                }
            })
           
        } catch (error) {
            toast.error(error)
        }
    }
}