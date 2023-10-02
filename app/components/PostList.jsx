import Post from "../components/Post";

const PostList = ({posts}) => {
    // console.log(postList);
    return <ul>
        
        {
            posts.map(post => (
                <Post key={post.id} post={post}/>
            ))
        }
        
  </ul>;
};
export default PostList;