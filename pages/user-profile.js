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

  const { params, req, res } = context; // getting access to this kind of data can sometimes be important if we need special header or cookie data

  // closer look at request object https://nodejs.org/api/http.html#http_class_http_incomingmessage
  // closer look at response object https://nodejs.org/api/http.html#http_class_http_serverresponse

  return {
    props: {
      username: "Dwight",
    },
  };
};

// getServerSideProps function only executes on the server after deployment and also on our development server but the page is not statically pre-generated

/*
using getServerSideProps could be very useful when we want to ensure that this function runs for every incoming request, so it is never static pre-generated. If we have highly dynamic data which changes multiple times every second and therefore that any old page we would be serving would already be outdated.

*/
