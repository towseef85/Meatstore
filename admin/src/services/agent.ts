import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-toastify';
import { history } from '..';
import { ICategory } from '../models/Category';
import { IOrder, OrderStatusUpdate } from '../models/Order';
import { IProduct } from '../models/Product';
import { ISlider } from '../models/Slider';
import { IUnits } from '../models/Units';
import { IUser, UserFormValues } from '../models/User';
import { IHeading } from '../models/Widgets/Headings';
import { IWOffers } from '../models/Widgets/WOffers';
import { store } from '../store/store';

axios.defaults.baseURL = 'http://localhost:41830/api/';
//axios.defaults.baseURL = 'https://frozanmeatapp.azurewebsites.net/api/';

axios.interceptors.request.use(config =>{
    const token = store.commonStore.token;
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
            history.push('/not-found')
            break;
        case 500:
            toast.error('Server error!')
            break;  
    }
    return Promise.reject(error);
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const category={
    list: () => requests.get<ICategory[]>('/Category'),
    create:(categoryData: FormData) =>{
        return axios.post('/Category', categoryData,{
            headers:{'Content-type':'multipart/form-data'}
        })
    }
}

const product ={
    list: () => requests.get<IProduct[]>('/Product/GetProducts'),
    create: (product: IProduct) => requests.post<void>('/Product',product),
    upload:(imageData: FormData) => {
        return axios.post('/Photo', imageData,{
            headers:{'Content-type':'multipart/form-data'}
        })
    }
}

const units ={
    list: () => requests.get<IUnits[]>('/Pieceunit'),
    create:(unit: IUnits) => requests.post<void>('/Pieceunit', unit)
}

const slider={
    list: () => requests.get<ISlider[]>('/Slider'),
    create: (imageData: FormData) => {
        return axios.post('/Slider', imageData,{
            headers:{'Content-type':'multipart/form-data'}
        })
}
}
const WidgetHeadings ={
    list: () => requests.get<IHeading[]>('/WidgetHeading'),
    create:(heading: IHeading) => requests.post<void>('/WidgetHeading', heading)
    
}
const Woffers={
    list:() => requests.get<IWOffers[]>('/Offers'),
    create:(offerData: FormData) =>{
        return axios.post('/Offers', offerData,{
            headers:{'Content-type':'multipart/form-data'}
        })
    }
}

const WidgetItems={
    create:(widgetItem: FormData) =>{
        return axios.post('/WidgetItem', widgetItem,{
            headers:{'Content-type':'multipart/form-data'}
        })
    },
    
}

const users={
    current:() => requests.get<IUser>('/account'),
    login: (user: UserFormValues) => requests.post<IUser>('/account/login', user),
    register: (user: UserFormValues) => requests.post('/account/register', user)
}

const orders={
    list:()=> requests.get<IOrder[]>('/Orders/GetOrders'),
    updateStatus:(orderStatus: OrderStatusUpdate)=> requests.put<void>('/Orders/UpdateStatus',orderStatus)
}

const recepies={
    create:(recepies: any) =>{
        return axios.post('/CreateRecepie', recepies,{
            headers:{'Content-type':'multipart/form-data'}
        })
    }
}


const agent = {
    category,
    product,
    units,
    slider,
    WidgetHeadings,
    Woffers,
    WidgetItems, 
    users,
    orders,
    recepies
}


export default agent;