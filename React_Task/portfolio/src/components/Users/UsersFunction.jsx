import { useState } from "react"


function UsersFunction() {

    const[users,setUsers]=useState([
        { id: 1, name: "Hossam", email: "hossam@gmail.com", isAdmin: true },
        { id: 1, name: "Ali", email: "hossam@gmail.com", isAdmin: false },
        { id: 1, name: "mohammed", email: "hossam@gmail.com", isAdmin: false },
        { id: 1, name: "dina", email: "hossam@gmail.com", isAdmin: false }
    ])

    const[isAuth,setAuth]=useState(false)
    return (
        <>
        <ul>
            {users.map((user)=>{
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>

        </>

    )
}

export default UsersFunction
