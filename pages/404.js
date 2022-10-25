import Link from "next/link";
const PageNotFound = () => {
  return (
    <div>
      <h1>404 Page ⚠</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
export default PageNotFound;
