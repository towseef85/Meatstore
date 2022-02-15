export interface IUserAddress{
    id: string;
    userId: string;
    address: string;
    landmark: string;
    city: string;
    alternateNumber?: string;
    isDefault: boolean;
}