// * fetch all users information here
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchUsers = () => {
  return axios.get("http://heroku-json-server-fake-api.herokuapp.com/posts");
};

function Users() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchUsers = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchUsers();
    //   console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    handleFetchUsers();
  }, []);
//   console.log(data[0]);
  if (isLoading) {
    return <div>...loading</div>;
  }
//   for(let i=0;i<4;i++) {console.log(data[0][i]);}
  return (
    <div>
      <h3>Products</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data[0].map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              margin: 2,
              padding: 5,
              border:"1px solid black"
            }}
          >
            
            <div>{item.id}</div>
            <div>{item.name}</div>
            <img width="40px" src={item.url} alt={item.id} />
            <Link to={`/products/${item.id}`}>Show more info</Link>
           </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
