import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { IHeading } from "../models/Widgets/Headings";
import agent from "../services/agent";
import { store } from "./store";

export default class HeadingStore{
    headingRegistry = new Map<string, IHeading>()
    loading=false
   
    constructor() {
        makeAutoObservable(this)
        
    }

    get WHeadings(){
        return Array.from(this.headingRegistry.values()).sort()
    }

    loadHeadings= async() =>{
        try {
            this.loading= true;
            const headings = await agent.WidgetHeadings.list();
            runInAction(() =>{
                this.loading=false
                headings.forEach(u => {
                    this.headingRegistry.set(u.id, u)
            })
               
            })
        } catch (error) {
            toast.error(error);
            this.loading=false
        } 

    }

    createWidgetHeading = async(heading: IHeading)=>{
        try {
            this.loading= true
            await agent.WidgetHeadings.create(heading);
            runInAction(() =>{
                toast.success("Heading Added Successfully")
                this.headingRegistry.set(heading.id, heading)
                store.modelStore.closeModal();
                this.loading=false
            })
        } catch (error) {
            toast.error(error)
            this.loading=false
        }
    }
}