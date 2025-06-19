export const data=[
    {
        id:1,
        name:"",
        title:"",
        content:"",
        introduction:"",
        image:"",
        link:"",
        author:""
    }
]
export interface PropsInput{
    type:"text" | 'number' |'textarea' |"password" |'file'
    placeholder:string
    value?:string  | number
    title?:string
    name:string
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

