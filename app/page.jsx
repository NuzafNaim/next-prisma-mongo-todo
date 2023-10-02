import Link from "next/link";

const HomePage = () => {
  return <div>
    <h1 className="text-4xl">Home Page</h1>
    <p className="py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio voluptatibus, blanditiis accusantium non totam rem sed commodi? Consequuntur, earum! Amet omnis possimus hic numquam minima tempora aut voluptates tempore facilis? Dolorem accusantium, quod tenetur voluptas eos ex laborum voluptates repellendus doloremque beatae debitis, porro delectus perferendis veniam provident labore!</p>
    <Link href="/about">About Page</Link>
  </div>;
};
export default HomePage;