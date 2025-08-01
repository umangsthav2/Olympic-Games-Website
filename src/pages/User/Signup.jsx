import { useState } from "react";
import { Link } from "react-router-dom";

const Usersignup = () => {


    const [fname, setFname] = useState("");
    const [fnameclass, setFnameClass] = useState("");
    const [fnameErrMsg, setFnameErrMsg] = useState();

    const handleFname = (e) => {
        setFname(e.target.value);
    }

    const validateFname = () => {
        if (fname.match(/\d/g)) {
            setFnameClass(" is-invalid");
            setFnameErrMsg("First Name should not contain digits");

        }
        else if (fname.length == 0) {
            setFnameClass(" is-invalid");
            setFnameErrMsg("First Name cannot be empty");
        }
        else {
            setFnameClass(" is-valid");
            setFnameErrMsg("Nice Name");
        }
    }


    const [lname, setLname] = useState("");
    const [lnameclass, setLnameClass] = useState("");
    const [lnameErrMsg, setLnameErrMsg] = useState("");


    const handleLname = (e) => {
        setLname(e.target.value);
    }

    const validateLname = () => {
        if (lname.match(/\d/g)) {
            setLnameClass(" is-invalid");
            setLnameErrMsg("Last Name should not contain digits");
        }
        else if (lname.length == 0) {
            setLnameClass(" is-invalid");
            setLnameErrMsg("Last Name cannot be empty");
        }
        else {
            setLnameClass(" is-valid");
            setLnameErrMsg("Nice Name");
        }
    }





    const formValidate = () => {
        alert("Validate Function for Register");
    }



    return (
        <div className="formcontainer p-5 d-flex justify-content-center" >
            <form onSubmit={formValidate} className="row g-3 d-flex align-items-center w-75" noValidate>
                <h1 className="text-center">REGISTER</h1>
                <div className="col-md-6">
                    <label htmlFor="validationServer01" className="form-label">First name</label>
                    <input onChange={handleFname} onBlur={validateFname} type="text" className={"form-control " + fnameclass} id="validationServer01" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">{fnameErrMsg}</div>
                    <div className="valid-feedback">{fnameErrMsg}</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationServer02" className="form-label">Last name</label>
                    <input onChange={handleLname} onBlur={validateLname} type="text" className={"form-control " + lnameclass} id="validationServer02" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">{lnameErrMsg}</div>
                    <div className="valid-feedback">{lnameErrMsg}</div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationServer02" className="form-label">Email</label>
                    <input type="email" className="form-control" id="validationServer02" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">Please choose a username.</div>
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-12">
                    <label htmlFor="validationServer02" className="form-label">Password</label>
                    <input type="email" className="form-control" id="validationServer02" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">Please choose a username.</div>
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-12">
                    <label htmlFor="validationServer02" className="form-label">Retype Password</label>
                    <input type="email" className="form-control" id="validationServer02" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">Please choose a username.</div>
                    <div className="valid-feedback">Looks good!</div>
                </div>



                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck3"
                            aria-describedby="invalidCheck3Feedback" required />
                        <label className="form-check-label" htmlFor="invalidCheck3">Agree to terms and conditions</label>
                        <div id="invalidCheck3Feedback" className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Register</button>
                    <hr />
                    <Link to='/user/login' className="btn btn-success w-100">Login</Link>
                </div>
            </form>
        </div>
    )

}

export default Usersignup;