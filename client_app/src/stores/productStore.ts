import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../apis/agent";
import { IProduct } from "../models/Product";


export default class ProductStore{

    ProductRegistry = new Map<string,IProduct>();
    ProductForCategory: IProduct[] | undefined = undefined;
    selectedProduct: IProduct | undefined = undefined;

   
    constructor() {
        makeAutoObservable(this);
        
    }

    get products(){
        return Array.from(this.ProductRegistry.values()).sort()
    }

    getProductsbyId= (id: string)=>{
        return this.ProductRegistry.get(id)
    }

    loadProducts = async() =>{
        try {
            const product = await agent.Products.list();
            runInAction(() =>{

                product.forEach(p => {
                    this.ProductRegistry.set(p.id, p)
                    
                })
            })
        } catch (error) {
            toast.error(error);
        }

    }

    loadProductforCategory= async(id: string)=>{
        try {
            const products = await agent.Products.getProductForCategory(id)
            runInAction(()=>{
                this.ProductForCategory= products;
                console.log("products for category", products.map(x=>x.title))
            })
        } catch (error) {
            toast.error(error)
        }
    }
    loadProductById= async(id: string) =>{
        try {
            let product = await agent.Products.getProductById(id)
         if(product){
             runInAction(() =>{
                    console.log("product", product)
                 this.selectedProduct = product;
             })
             return product
         }
        } catch (error) {
            toast.error(error)
        }
    }
}