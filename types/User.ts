export interface UserProps{
   id: string;
    email: string;
    username?: string | null;
    password: string;
    confirmPassword?:string
    createdAt: Date;
    updatedAt: Date;
}