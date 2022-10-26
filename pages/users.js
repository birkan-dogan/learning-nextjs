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
  };
};

// generating html after fetching data by using getStaticProps function