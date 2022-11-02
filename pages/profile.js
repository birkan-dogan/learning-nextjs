import User from "../components/user";

const Profile = (props) => {
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

export default Profile;

/*
a closer look at getStaticProps function
there are 2 other keys which we can set on this object.

notFound is a boolean value, if we set it to "true", the function will return a 404 page

The redirect key allows us to redirect the user:

ex.) if we aren't able to access to database, we can use redirect keyword to avoid crash
*/

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (data.length === 0) {
    return { notFound: true }; // this will trigger 404 page
  }

  if (!data) {
    return {
      redirect: { destination: "/" }, // if data doesn't exist we can redirect user to another page instead of rendering this page
    };
  }

  return {
    props: {
      users: data,
    },
    revalidate: 60,
  };
};
