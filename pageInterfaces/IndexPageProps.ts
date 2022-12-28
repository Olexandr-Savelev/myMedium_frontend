export interface PostListProps {
    postList: PostItemProps[]
}

export type PostItemProps = {
    userId: number;
    id: number;
    title: string;
    body: string
}