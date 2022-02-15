import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../apis/agent";
import { ICategories } from "../apis/models";

export default class CategoryStore{
    CategoryRegistory = new Map<string, ICategories>()

    
    constructor() {
        makeAutoObservable(this);
        
    }

    get Categories(){
        return Array.from(this.CategoryRegistory.values()).sort()
    }

    loadCategories = async () =>{
        try {
            const cateogries = await agent.category.list();
            runInAction(()=>{
                cateogries.forEach(c => {
                    this.CategoryRegistory.set(c.id, c)
                })
            })
          
        } catch (error) {
            console.log(error)
        }
    }
}