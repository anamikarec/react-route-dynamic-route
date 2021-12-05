import React from "react";
function UserCard({ id,name,url,price }) {
    return (
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          gap: 2,
          padding: 5,
          margin: 2
        }}
      >
        <img src={url} alt={id} />
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div>{name}</div>
          <div>{price}</div>
        </div>
      </div>
    );
  }
  
  export default UserCard;
  