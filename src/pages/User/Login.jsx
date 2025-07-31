import { Link } from "react-router-dom";

const Userlogin = () => {
    return (
        <>
            <div className="h-100 d-flex flex-column align-items-center form-container">
                <form className="needs-validation p-5 w-75" novalidate>
                    <h1 className="text-center">LOGIN</h1>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check form-control-lg">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>
                    <button type="submit" class=" w-100 btn btn-success">Login</button>
                    <hr />
                    <Link to="/user/signup" class=" w-100 btn btn-primary">Register</Link>
                </form>
            </div>
        </>
    );
}
export default Userlogin