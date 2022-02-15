export interface IHeading {
    id: string;
    title: string;
    arabicTitle: string;
    rows?: number;
    isVisible: boolean;
    widgetItems:IWidgetItems[]
}

export interface IWidgetItems {
    id: string;
    title: string;
    redirectTo: string;
    redirectToId: string;
    imageName?: string;
    imageSrc?: string;
    imageFile: any;
    widgetId: string;
    isVisible:boolean;
}