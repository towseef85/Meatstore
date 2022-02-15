import { makeAutoObservable, observable, runInAction } from "mobx";
import { persist } from 'mobx-persist'
import { history } from "..";
import { IUser, UserFormValues } from "../models/User";
import agent from "../apis/agent";
import { toast } from "react-toastify";
import { IUserAddress } from "../models/userAddress";
import { store } from "./store";

export default class UserStore{
   @persist('object') @observable user: IUser | null = null;
    userAddress!: IUserAddress[];

  
    constructor() {
        makeAutoObservable(this)
        
    }

    
    get isLoggedIn(){
        return !!this.user;
    }

    login = async(creds: UserFormValues) =>{
        try {
            const user = await agent.users.login(creds);
            store.commonStore.setToken(user.token)
            runInAction(() => 
                this.user = user
                
            );
            if(creds.from =="login") history.goBack()
            toast.success("Login Successful")
            
        } catch (error) {
            throw error
        }
    }

    logout= () => {
        store.commonStore.setToken(null)
        window.localStorage.removeItem('jwt');
        this.user = null;
        history.push('/')
    }

    getUser = async() =>{
        try {
            const user = await agent.users.current()
            runInAction(() => this.user = user)
        } catch (error) {
            console.log(error)
        }
    }

    getAddress= async(id: string) =>{
        try {
            
            const getaddress = await agent.users.address(id)
            runInAction(()=> {
                this.userAddress = getaddress;
                console.log("addresses", getaddress.map(a =>a.address))
            })
        } catch (error) {
            
        }
    }

    addAddress = async(address : IUserAddress) =>{
        try {
            await agent.users.addAddress(address)
            runInAction(() =>{
                this.userAddress.push(address)
                
                toast.success("Address Added Successfully")
            })
        } catch (error) {
            toast.error(error)
        }
    }


}