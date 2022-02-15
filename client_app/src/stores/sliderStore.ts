import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../apis/agent";
import { ISlider } from "../models/slider";

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
}