import { PostItemProps } from '../../pageInterfaces/IndexPageProps';
import PostItem from '../../components/PostItem/PostItem';

const PostPage = (postData: PostItemProps): JSX.Element => {
    return (
        <PostItem {...postData} />
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { postSlug: 'sth' } }, { params: { postSlug: 'sth-else' } }],
        fallback: true,
    };
}

export async function getStaticProps({ params }: any) {
    const { postSlug } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postSlug}`);
    const postItem = await response.json();

    return {
        props: postItem
    }
}

export default PostPage;

