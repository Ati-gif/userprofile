import React from 'react'

const UserEdit = (props) => {
    const {name, id} = props.user
    return(
        <div>
            <h1>Edit User Here</h1>
            <form action={`/users/${id}`} method='post'>
                <input type='hidden' name='_method' value='patch' />
              <input defaultValue={name} placeholder='name' name="user[name]"/>
              <button type='submit'>add</button>
            </form>
        </div>
    )
}
export default UserEdit 