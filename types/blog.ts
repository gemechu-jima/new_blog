
export interface PropsInput{
    type:"text" | 'number' |'textarea' |"password" |'file'
    placeholder:string
    value?:string  | number
    title?:string
    name:string
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BlogProps{
        id:string
        name?:string
        title:string
        content:string
        introduction?:string
        image?:string
        link?:string
        author:string
        published?:boolean
        userId:string
}
