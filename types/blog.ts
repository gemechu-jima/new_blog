
export interface PropsInput{
    type:"text" | 'number' |'textarea' |"password" |'file'
    placeholder:string
    value?:string  | number
    title?:string
    name:string
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BlogProps {
  id: string
  name?: string | null
  title: string
  content: string
  introduction: string
  images: string[]
  link: string
  author?: string |null
  published?: boolean |null
  userId?: string |null
  createdAt: Date
  updatedAt: Date
}
