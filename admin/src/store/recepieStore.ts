import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { IRecepie, IRecepieIngredients } from "../models/Recepie";
import agent from "../services/agent";

export default class RecepieStore{
    RecepieRegistery= new Map<string, IRecepie>()
    ingredients= new Map<string, IRecepieIngredients>()

   
    constructor() {
        makeAutoObservable(this)
        
    }

    addIngredients = async(ingredients: IRecepieIngredients) =>{
        this.ingredients.set(ingredients.title, ingredients);
    }

    addRecepie= async(recepie: IRecepie) =>{
        agent.recepies.create(recepie).then(res =>{
            if(res.status == 200){

                runInAction(() =>{
                    toast.success("Recepie Added Successfully")
                })
            }
            else
            {
                toast.error("unable to add error", res.data)
            }
        })
    }


}