import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-toastify';
import { history } from '..';
import { IHeading } from '../models/Headings';
import { IWOffers } from '../models/Offer';
import { IProduct } from '../models/Product';
import { ISlider } from '../models/slider';
import { IUser, UserFormValues } from '../models/User';
import { IUserAddress } from '../models/userAddress';
import { store } from '../stores/store';
import { ICategories } from './models';
import { IOrder } from '../models/Order';

axios.defaults.baseURL = 'http://localhost:41830/api';
https://frozanmeatapp.azurewebsites.net

//axios.defaults.baseURL = 'https://frozanmeatapp.azurewebsites.net/api'

axios.interceptors.request.use(config =>{
    
    const token = store.commonStore.token
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response => {
    return response;
}, (error: AxiosError) =>{
    const {data, status, config} = error.response!;
    switch(status){
        case 400:
            if(typeof data === 'string'){
                toast.error(data);
            }
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
                //toast.error(data);
            }
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.flat();
            } else {
                toast.error(data);
            }
            break;
        case 401:
            toast.error('Unauthorized!')
            break;
        case 404:
            toast.error(data)
            //history.push('/not-found')
            break;
        case 500:
            toast.error('Server error!')
            break;  
    }
    return Promise.reject(error);
})

const responseBody =<T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body:{}) => axios.post<T>(url, body).then(responseBody),
    put:<T> (url: string, body:{}) => axios.put<T>(url, body).then(responseBody),
    del:<T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const category ={
    list:() => requests.get<ICategories[]>('/Category')
}
const slider={
    list: () => requests.get<ISlider[]>('/Slider')
}

const WidgetHeadings ={
    list: () => requests.get<IHeading[]>('/WidgetHeading')
}

const Woffers={
    list:() => requests.get<IWOffers[]>('/Offers')
}

const Products ={
    list:() => requests.get<IProduct[]>('/Product/GetProducts'),
    getProductForCategory :(id: string) => requests.get<IProduct[]>(`/Product/GetProductByCategoryId/${id}`),
    getProductById:(id:string) => requests.get<IProduct>(`/Product/GetProductById/${id}`)
}

const users={
    current:() => requests.get<IUser>('/account'),
    login: (user: UserFormValues) => requests.post<IUser>('/account/login', user),
    register: (user: UserFormValues) => requests.post('/account/register', user),
    address:(id: string) => requests.get<IUserAddress[]>(`/UserAddress/GetAddressForUser/${id}`),
    addAddress: (address: IUserAddress) => requests.post('/UserAddress/CreateAddress',address)
}

const orders ={
    create: (order : any) => {
        return axios.post('/Orders/CreateOrder', order,{
            headers:{'Content-type':'application/json'}
        }).then(res => {
            if(res.status == 200)
            {
                store.orderStore.orderRegistery.set(order.productId, order)
                history.push('/ordercomplete')
                store.cartStore.cartRegistry.clear()
            }
            else
            {
                toast.error(`Unable to add Order with Error Code ${res.status}`)
            }
        })

    },
    list:(id: string) => requests.get<IOrder[]>(`/Orders/GetOrderById/${id}`)
}

const agent ={
    category,
    slider,
    WidgetHeadings,
    Woffers,
    Products,
    users,
    orders
}

export default agent;