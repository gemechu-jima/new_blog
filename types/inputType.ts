
export interface PropsInput{
    type:"text" | 'number' |'textarea' |"password" |'file'
    placeholder:string
    value?:string  | number
    title?:string
    name:string
    onChange?:(_event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PropsSelect {
    title: string;
    name: string;
}

export interface PropsTetxarea{
     name:string
       placeholder:string
        onChange?:(_event: React.ChangeEvent<HTMLInputElement>) => void;
        resize:boolean
}