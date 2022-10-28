import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  const { id, clientprojectid } = router.query;
  return (
    <div>
      <h1>
        The project page for a specific project for a selected client id: {id}{" "}
        <br />
        client: {clientprojectid}
      </h1>
    </div>
  );
};
export default SelectedClientProjectPage;

// this page will be visible when the url like this: http://localhost:3000/clients/id/clientprojectid
// all these pages we can get access to the concrete values entered in the url by using useRouter hook
