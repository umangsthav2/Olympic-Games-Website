import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Userlogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleUsername = (e) => {
        setUsername(e.target.value);
        console.log(username);
    }

    const userValidate = () => {
            console.log(username.match(/\d/g));
    
    }




    const formValidate = () => {
        // alert("Validate Function");
        alert("Validate Function for Login");
    }



    useEffect(() => { console.log("State changed") }, []);


    return (
        <>
            <div className="h-100 d-flex flex-column align-items-center form-container">
                <form onSubmit={formValidate} className="needs-validation p-5 w-75" noValidate>
                    <h1 className="text-center">LOGIN</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={handleUsername} onBlur={userValidate} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check form-control-lg">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                    </div>
                    <button type="submit" className=" w-100 btn btn-success">Login</button>
                    <hr />
                    <Link to="/user/signup" className=" w-100 btn btn-primary">Register</Link>
                </form>
            </div>
        </>
    );
}
export default Userlogin