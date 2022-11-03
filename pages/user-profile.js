const UserProfilePage = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
};

export default UserProfilePage;

/*
we need to get access to the request object which carries the cookies and the headers to find out which users sent this request. That would be a typical use case for getServerSideProps.

We can't pre-render as page because we don't know which users will have in advance and we don't get access to their cookies in advance.
*/

export const getServerSideProps = async (context) => {
  // return object is the same format as it does in getStaticProps, the only difference is revalidate key and that is not required here because getServerSideProps runs for every incoming request

  return {
    props: {
      username: "Dwight",
    },
  };
};

// getServerSideProps function only executes on the server after deployment and also on our development server but the page is not statically pre-generated
