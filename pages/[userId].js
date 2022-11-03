const UserIdPage = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
};

export default UserIdPage;

export const getServerSideProps = async (context) => {
  const { params } = context;

  const userId = params.userId;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
};

// it did work without us adding getStaticPaths. Why ?
// because getServerSideProps runs on the server only, so Next.js doesn't pre-generate any pages at all, therefore it also doesn't need to know which pages to pre-generate  (no pre-generation no problem)
