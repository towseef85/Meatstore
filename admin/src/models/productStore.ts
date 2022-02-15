import { makeAutoObservable, reaction, runInAction } from "mobx";
import { toast } from "react-toastify";
import { IProduct } from "./Product";
import agent from "../services/agent";
import { store } from "../store/store";

export default class ProductStore{
    imageLoading=false
    ProductRegistry = new Map<string,IProduct>()

   
    constructor() {
        makeAutoObservable(this);
        
    }

    get products(){
        return Array.from(this.ProductRegistry.values()).sort()
    }

    loadProducts = async() =>{
        try {
            const product = await agent.product.list();
            runInAction(() =>{

                product.forEach(p => {
                    this.ProductRegistry.set(p.id, p)
                    
                })
            })
        } catch (error) {
            toast.error(error);
        }

    }

    createProduct = async(product: IProduct) =>{
        try {
            this.imageLoading = true
         await agent.product.create(product)
         runInAction(() =>{
            this.imageLoading= false
             toast.success("Product added successfully");    
         })
        } catch (error) {
            toast.error(error)
        }
    }

    uploadPhoto = async(imageData: FormData) =>{
        try {
            this.imageLoading= true;
            const response = await agent.product.upload(imageData)
            .then(res => {
                if(res.status == 200)
                {
                    runInAction(() =>{
                        this.imageLoading=false;
                        toast.success("Image Uploaded successfully");
                        store.modelStore.closeModal();
                        
                        this.loadProducts();
                    })
                }
            })
        } catch (error) {
            
        }
    }
}