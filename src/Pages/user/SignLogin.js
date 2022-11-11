import React from 'react'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Api from '../../Apis/Api';
import { Alert, AlertSuccess } from '../../components/Alert/Alert';
import auth from "../../services/Auth"

function SignLogin() {
    console.log(Api);
    const history = useHistory();
    if (auth.isAuthenciated()) {
        history.push("/dashboard/user")
    }


    const [values, setValues] = useState({ "fname": "", "lname": "", "email": "", "passwd": "", "phone": "" })

    const [res, setRes] = useState({ "status": "", "varaint": "", "message": "ok" });

    const handleChange = e => {
        // console.log(e.target.name, e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    // Sign Up submit handler 
    const handleSubmit_SignUp = e => {
        e.preventDefault()
        Api.post(`/api/v1/user/add`, values)
            .then(res => {
                if (res.data.status) {
                    alert(`${res.data.message}`)
                    window.location.reload();
                }
            })
            .catch((err) => alert(err.response.data.message))
    }
    //Sign In Submit handler
    const handleSubmit_SignIn = e => {
        e.preventDefault()
        const value = {
            email: values.email,
            passwd: values.passwd
        }
        if (value.email && value.passwd) {
            Api.post(`/api/v1/user/auth`, value)
                .then(res => {
                    if (res.data.status) {
                        auth.login(value.email, () => { history.push("/dashboard/user") })
                    } else {
                        alert(res.data.message)
                    }
                })
                .catch(err => console.log(err))
        }
    }
    const ChangePanel = () => {
        let container = document.getElementById("container").classList;

        if (!container.contains("right-panel-active")) {
            container.add("right-panel-active");
        } else {
            container.remove("right-panel-active")
        }
    }
    return (
        <>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    {res.status && <Alert varaint={res.varaint}>{res.message}</Alert>}
                    <form onSubmit={handleSubmit_SignUp}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        </div>
                        <div className="divider-wrap">
                            <div className="divider">or</div>
                        </div>
                        <input type="text" placeholder="First Name" name="fname" onChange={handleChange} />
                        <input type="text" name="lname" placeholder="Last Name" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit_SignIn} method='post'>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        </div>
                        <div className="divider-wrap">
                            <div className="divider">or</div>
                        </div>
                        <input type="email" onChange={handleChange} name="email" placeholder="Email" required />
                        <input type="password" onChange={handleChange} name="passwd" placeholder="Password" required />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={e => ChangePanel(e)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start movie booking now</p>
                            <button className="ghost" onClick={e => ChangePanel(e)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>
                    Created by Shivam and Sagar
                </p>
            </footer>
        </>
    )
}

export default SignLogin;