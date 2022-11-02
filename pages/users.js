import User from "../components/user";

const UserList = (props) => {
  const { users } = props;
  return (
    <div>
      <h1>List of users:</h1>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
    revalidate: 60,
  };
};

// generating html after fetching data by using getStaticProps function

/*
using Incremental Static re-Generation (ISR)

what if we have data that changes frequently ?

Next.js has a built-in feature which is called incremental static generation. It means that we don't just generate our page statically once at build time, but it's continuously updated even after deployment without us re-deploying it.

We have a pre-generated page, but then we can also tell Next.js that a given page should be re-generated again for every incoming request at most every x seconds.

So, we have ongoing pre-rendering on the server for incoming requests.
And all we need to do to unlock this is in the object, which we return in getStaticProps function.

revalidate: time in seconds that Next.js should wait until it re-generates this page.

during development, the page will be re-generated for every request, no matter what we enter revalidate value. (getStaticProps function always run again)
But in production, this number will matter.

*/
