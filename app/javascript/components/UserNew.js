import React from 'react'

const UserNew = (props) => {
    return(
        <div>
            <h1>Add New User Here</h1>
            <form action='/users' method='post'>
              <input placeholder='name' name="user[name]"/>
              <button type='submit'>add</button>
            </form>
        </div>
    )
}
export default UserNew