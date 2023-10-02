import { error } from "console";
import Link from "next/link";

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new error('Error')
    }
    return res.json();

} 
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new error('Error')
    }
    return res.json();

} 

const PostsPage = async () => {
    // const post =await getPosts();
    const [post, users] = await Promise.all([getPosts(), getUsers()])
    
  return <div>
      <h1 className="text-4xl">Users Page</h1>
      {
          users.map((usersData, index) => {
              return (
                  <p key={index}>{usersData.name}</p>
              )
          })
      }
      <h1 className="text-4xl">Post Page</h1>
      <div className="flex flex-col gap-4">
      {
          post.map((postData, index) => {
              return (
                <Link href={`/posts/${postData.id}`} key={index} className="bg-gray-100 p-5">
                      <h2 className="text-2xl">{postData.title}</h2>
                      <p>{postData.body}</p>
                </Link>
              )
          })
      }
      </div>
  </div>;
};
export default PostsPage;



