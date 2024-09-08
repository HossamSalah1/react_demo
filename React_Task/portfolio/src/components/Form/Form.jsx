import { useState } from "react"


export default function Form() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });

    const enteringValidate = (evt) => {
        const { name, value } = evt.target;
        setUser({ ...user, [name]: value });  // Dynamically update the state based on input name
        console.log(user);
    }

    

    // const enteringValidate = (evt) => {
    //     // console.log(evt.target.name);
    //     if (evt.target.name == "name") {
    //         setUser({ ...user, name: evt.target.value })
    //         console.log(user);
    //     }else{
    //         setUser({ ...user, email: evt.target.value })
    //         console.log(user);
    //     }



    // }

    return (<>
        <div className="container max-5 mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input
                        onChange={(e) => { enteringValidate(e) }}
                        value={user.name}
                        name="name"
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={(e) => { enteringValidate(e) }} value={user.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"> we will never share your email with anyone else.</div>
                </div>
                <div
                    className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">phone number</label>
                    <input onChange={(e) => { enteringValidate(e) }} value={user.phone} name="phone" type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"> </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={(e) => { enteringValidate(e) }} value={user.password} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>

    )
}

