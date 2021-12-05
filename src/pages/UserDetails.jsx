import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UserCard from "../Components/UserCard";

const getUserById = (id) => {
  return axios.get("http://heroku-json-server-fake-api.herokuapp.com/posts/" + id);
};

// HOOkS
function UserDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const handleGetUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await getUserById(id);
      console.log(data);
      setData(data[0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, [id]);

  if (isLoading) return <div>...loading</div>;
  console.log(data);
  return (

    // <div>
    //   <h3> User ID: {id} </h3>
    //   <UserCard
    //     id={data.id}
    //     name={data.name}
    //   />
    // </div>
    <UserCard
        id={id}
        name={`${data?.data?.first_name} ${data?.data?.last_name}`}
        avatar={data?.data?.avatar}
        email={data?.data?.email}
      />

  );
}

export default UserDetails;
