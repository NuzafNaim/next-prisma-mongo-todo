import AddPost from "../components/AddPost";
import PostList from "../components/PostList";
import { error } from 'console';


async function getPost() {

    const res = await fetch('http://127.0.0.1:3000/api/posts', {cache: "no-store"});
    if (!res.ok) {
        throw new error("Error")
    }

    return res.json()
}


const CRUD = async() => {
    const postList = await getPost();
    return <div className="max-w-4xl mx-auto mt-4">
        <div className="my-5 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Todo List App</h1>
            <AddPost/>
        </div>
        <PostList posts={ postList } />
  </div>;
};
export default CRUD;