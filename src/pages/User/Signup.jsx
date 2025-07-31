import { useState } from "react";
import { Link } from "react-router-dom";

const Usersignup = () => {
    return (
        <div className="formcontainer p-5 d-flex justify-content-center" >
            <form className="row g-3 d-flex align-items-center w-75" noValidate>
                <h1 className="text-center">REGISTER</h1>
                <div className="col-md-6">
                    <label htmlFor="validationServer01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationServer01" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">Please choose a username.</div>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationServer02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationServer02" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">Please choose a username.</div>
                    <div className="valid-feedback">Looks good!</div>
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