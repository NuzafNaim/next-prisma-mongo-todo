import Link from "next/link";

const DynamicPage = ({params}) => {
    return <div>
        <h1 className="text-4xl">About Page with ID: { params.id }</h1>
        <p className="py-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis eveniet assumenda doloribus libero corrupti suscipit nemo molestias incidunt maiores rerum officia ab, unde dicta eum. Eligendi amet sit voluptas, eum sunt temporibus mollitia, ex corrupti odio ipsa aut est quam quidem, nemo quo neque. Ipsum molestias repellat dolor quibusdam.</p>
        <Link href="/">Home Page</Link>
  </div>;
};
export default DynamicPage;