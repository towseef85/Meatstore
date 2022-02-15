import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { IUnits } from "../models/Units";
import agent from "../services/agent";

export default class UnitStore{
    unitRegistry = new Map<string, IUnits>()

   
    constructor() {
        makeAutoObservable(this)
        
    }

    get Units(){
        return Array.from(this.unitRegistry.values()).sort()
    }

    loadUnits= async() =>{
        try {
            const units = await agent.units.list();
            runInAction(() =>{

                units.forEach(u => {
                    this.unitRegistry.set(u.id, u)
            })
               
            })
        } catch (error) {
            toast.error(error);
        } 

    }

    createUnit = async(unit: IUnits)=>{
        try {
            await agent.units.create(unit);
            runInAction(() =>{
                
            })
        } catch (error) {
            
        }
    }
}