export interface IProduct {
    id: string;
    title: string;
    subTitle?: string;
    arabicSubTitle?: string;
    arabicTitle: string;
    description: string;
    descriptionArabic: string;
    minQuantity: string;
    unitId: string;
    price: number;
    categoryId: string;
    showAsBestSeller: boolean;
    photos?:IPhoto[]
}

export interface IPhoto {
    id: string;
    url: string;
    isMain: boolean;
    productId: string;
}