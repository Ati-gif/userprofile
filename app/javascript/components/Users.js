import React from 'react'

const Users = (props) => {
    const { users } = props
    
  
    const renderUsers = () => {
        return users.map( user => {
            return (
                <div>
                    <h1>{user.name}</h1>
                    <a href={`/users/${user.id}`}>show user</a> 
                    <a href={`/users/${user.id}/edit`}>edit</a>
                    <a href={`/users/${user.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    } 
   
    return(
        <div>
            <h1>Users Index</h1>
            <a href='/users/new'>new user</a>
            {renderUsers()}
        </div>
    )
}
export default Users