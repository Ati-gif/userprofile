import React from "react";

const User = (props) =>  {

    const { id, name, created_at } = props.user;
    return (
      <>
        <h1>User Profile</h1>
        <h3>{name}</h3>
        <p>
          created: {created_at}, id: {id}
        </p>
        <a href="/">back</a>
      </>
    );
  
}

export default User