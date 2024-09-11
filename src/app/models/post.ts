export interface Post {
    id: number,
    user: string,
    content: string,
    likes: number,
    comments: [
        { user: string, "text": string }
    ]
}