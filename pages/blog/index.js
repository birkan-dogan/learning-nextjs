import Link from "next/link";
const Blog = () => {
  return (
    <div>
      <h1>Blog page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Blog;
