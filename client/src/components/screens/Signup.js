import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className="mycard">
            <div className="auth-card">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="Username"
                    class="inputstyle"
                />
                <input
                    type="text"
                    placeholder="Email"
                    class="inputstyle"
                />
                <input
                    type="text"
                    placeholder="Password"
                    class="inputstyle"
                />
                <button className="btn waves-effect waves-light #64b5f6 blue">
                    Signup
                </button>
                <h6>
                    Already have an account?
                    <Link to="/login"> Sign in.</Link>
                </h6>

            </div>

        </div>
    )
}

export default Signup