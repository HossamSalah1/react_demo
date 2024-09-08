import { Component } from "react";

export default class Users extends Component {
    constructor() {
        super()

        this.state = {
            users: [
                { id: 1, name: "Hossam", email: "hossam@gmail.com", isAdmin: true },
                { id: 1, name: "Ali", email: "hossam@gmail.com", isAdmin: false },
                { id: 1, name: "mohammed", email: "hossam@gmail.com", isAdmin: false },
                { id: 1, name: "dina", email: "hossam@gmail.com", isAdmin: false }
            ], isAusanticated: true,


        }

    }

    userHandelar=() => {
        {
            this.setState({isAusanticated:!this.state.isAusanticated })
        }
    }

    //conditinal rendering   --->  &&  --->  if the first is false will return false if true will return the second
    //or use ternary operator

    render() {
        return <>
            {this.state.isAusanticated && <ul>
                {this.state.users.map((user) => {
                    if (user.isAdmin == true)

                        return <li key={user.id}>
                            {user.name}
                        </li>
                })}

            </ul>}

            <button className="btn btn-danger" onClick={(() => { this.userHandelar() })}>togglr user</button>


        </>


    }

}



