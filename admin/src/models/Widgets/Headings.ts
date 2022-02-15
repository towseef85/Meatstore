import { IWidgetItems } from "./WidgetItems";

export interface IHeading {
    id: string;
    title: string;
    arabicTitle: string;
    rows?: number;
    isVisible: boolean;
    widgetItems?: IWidgetItems[]
}