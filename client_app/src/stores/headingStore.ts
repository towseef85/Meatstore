import { makeAutoObservable, runInAction } from "mobx";
import agent from "../apis/agent";
import { IHeading } from "../models/Headings";
import { toast } from "react-toastify";

export default class HeadingStore{
    headingRegistry = new Map<string, IHeading>()

    constructor() {
        makeAutoObservable(this)
        
    }

    get Headings(){
        return Array.from(this.headingRegistry.values()).sort()
    }

    loadHeadings= async() =>{
        try {
            const headings = await agent.WidgetHeadings.list();
            runInAction(() =>{
                headings.forEach(u => {
                    this.headingRegistry.set(u.id, u)
            })
               
            })
        } catch (error) {
            toast.error(error);
        } 

    }
}
