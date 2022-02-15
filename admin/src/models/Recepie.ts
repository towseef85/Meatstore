export interface IRecepie{
    id: string;
    productId:string;
    type:string;
    title:string;
    description:string;
    cookingTime:string;
    serves:string;
    method:string;
    status:boolean;
    ImageFile:null;
    recepieIngredients: IRecepieIngredients[]
}

export interface IRecepieIngredients{
    title:string;
    description:string;
}