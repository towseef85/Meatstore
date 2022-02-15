import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { ISlider } from "../models/Slider";
import agent from "../services/agent";
import { store } from "./store";

export default class SliderStore{
    SliderRegistry = new Map<string, ISlider>()

   
    constructor() {
        makeAutoObservable(this)
        
    }

    get sliders(){
        return Array.from(this.SliderRegistry.values()).sort()
    }

    loadSliders= async() =>{
        try {
            const units = await agent.slider.list();
            runInAction(() =>{

                units.forEach(u => {
                    this.SliderRegistry.set(u.id, u)
            })
               
            })
        } catch (error) {
            toast.error(error);
        } 

    }

    createSlider = async(slider: FormData)=>{
        try {
            await agent.slider.create(slider)
            .then(res => {
                if(res.status == 200){
                    runInAction(() =>{
                
                        toast.success("Slider Added Successfully")
                        store.modelStore.closeModal();
                        this.loadSliders();
                    })
                }
            })
           
        } catch (error) {
            toast.error(error)
        }
    }
}