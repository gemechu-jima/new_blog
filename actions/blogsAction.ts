export async function getBlogs(limit=5) {
     try {
        const blogs=await prisma.blog.findMany({
            include:{
                author:true
            },
            orderBy:{
                createdAt:"desc"
            },
            take:limit
        })
        return blogs
    } catch (error) {
        console.error("Error fetching posts ", error)
        throw new Error("Failed to fetch posts")
    }
}

export async function getUser(){
    try {
        const user=await prisma.user.findUnique({
            include:{
                blog:true
            },
            orderBy:{
                createdAt:"desc"
            }
        })
        return user
    } catch (error) {
        console.error("Error fetching user ", error)
        throw new Error("Failed to fetch user")
    }
}


 export async function createPost({title, content, userId}:{title:string, content:string, userId:string}){
     if(!title){
        throw new Error("Title is required")
     }
    try {
        const userExists=await prisma.user.findUnique({
            where:{id:userId}
        })
        if(!userExists){
            throw new Error("User not founnd")
        }
        const post=await prisma.post.create({
            data:{
                 title,
                 content,
                 user:{
                    connect:{id:userId}
                 }
            }
        })
        revalidatePath("/")
        return post
    } catch (error) {
        console.error("Error creating post  ", error)
        throw new Error("Failed to create post")
    }
 }