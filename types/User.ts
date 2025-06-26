export interface UserProps{
   id: string;
    email: string;
    username?: string | null;
    password: string;
    image?:string | null
    confirmPassword?:string
    createdAt: Date;
    updatedAt: Date;
}