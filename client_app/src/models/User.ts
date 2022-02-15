export interface IUser{
    userId: string;
    username: string;
    displayName: string;
    token: string;

}

export interface UserFormValues {
    email: string;
    password: string;
    displayName?:string;
    mobileNumber?:string;
    gender?:string;
    username?:string;
    from?:string;
}