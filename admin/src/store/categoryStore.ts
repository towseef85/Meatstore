import { makeAutoObservable, reaction, runInAction } from "mobx";
import { toast } from "react-toastify";
import { ICategory } from "../models/Category";
import agent from "../services/agent";
import { store } from "./store";


export default class CategoryStore{
    loading = false;
    CategoryRegistry = new Map<string,ICategory>()

   
    constructor() {
        makeAutoObservable(this);
        
    }

    get categories(){
        return Array.from(this.CategoryRegistry.values()).sort()
    }

    loadCategories = async() =>{
        try {
            const categories = await agent.category.list();
            runInAction(() =>{

                categories.forEach(c =>{
                    this.CategoryRegistry.set(c.id, c)
            })
               
            })
        } catch (error) {
            console.log(error)
        }
    }

    createCategory = async(categoryData: FormData) =>{
        try {
            this.loading = true
            const result = await agent.category.create(categoryData)
            .then(res => {
                if(res.status == 200)
                {
                    runInAction(() =>{

                        this.loading= false;
                        toast.success("Category Created successfully");
                        store.modelStore.closeModal();
                        this.loadCategories();
                    })
                }
            })
        } catch (error) {
            
        }
    }
}