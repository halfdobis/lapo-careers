import { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';






function Login() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='container'>
            <div className={`login ${toggle ? "hide" : null}`}>
                <div className='contact-content col'>
                    <h2>Already have an account?</h2>
                    <p>
                        Sign In here!
                  </p>
                    <input type="submit" value="Sign In" onClick={() => setToggle(!toggle)} />
                </div>
                <div className="contact-form col">
                    <h2>sign up</h2>
                    <form action="">
                        <p>Name</p>
                        <input type="name" placeholder="Full Name" required />
                        <p>Email</p>
                        <input type="email" placeholder="someone@mail.com" required />
                        <p>Phone Number</p>
                        <input type="number" placeholder="08012345678" required />
                        <p>Password</p>
                        <input type="password" placeholder="**********" required />
                        <div class="button-container-1">
                            <span class="mas">Sign Up</span>
                            <Link to="/form"><button type="submit" name="Hover">Sign Up</button></Link>
                        </div>
                    </form>
                </div>
            </div>

            <div className={`login ${toggle ? null : "hide"}`}>
                <div className='contact-content col'>
                    <h2>Don't have an account?</h2>
                    <p>
                        Sign Up here!
                  </p>
                    <input type="submit" value="Sign Up" onClick={() => window.location.reload()} />
                </div>
                <div className="contact-form col">
                    <h2>Sign In</h2>
                    <form action="">
                        <p>Email</p>
                        <input type="email" placeholder="someone@mail.com" required />
                        <p>Password</p>
                        <input type="password" placeholder="**********" required />
                        <a href="/login">Forgot password</a>
                        <div class="button-container-1">
                            <span class="mas">Sign In</span>
                            <Link to="/form"><button type="submit" name="Hover">Sign In</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Login;