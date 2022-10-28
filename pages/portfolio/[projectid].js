import { useRouter } from "next/router";

// Next.js gives us a hook for getting special value from url. We can use useRouter hook in our components

const PortfolioProjectPage = () => {
  const router = useRouter();
  const projectid = router.query.projectid;

  // we can send a request to some backend server to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The portfolio project page</h1>
    </div>
  );
};
export default PortfolioProjectPage;
