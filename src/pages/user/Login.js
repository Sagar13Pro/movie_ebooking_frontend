import React, { useEffect, useState } from 'react'
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash, FaHome } from 'react-icons/fa';
import Button from '../../components/Button/Button'
import Alert from '../../components/Alert/Alert';
import { DASHBOARD, RESET, INDEX } from "../../routes/Path"
import Api from '../../apis/Api';
import auth from "../../services/Auth"
import "./index.css"
import {
    MainDiv,
    Container,
    FormContainer,
    OverlayContainer,
    Overlay,
    OverlayPanel,
    SocialContainer,
    SocialLink,
    DividerWrapper,
    Divider,
    Form,
    Input,
    InputWrapper,
    Anchor
} from "./login.css"

function Sign(props) {
    // google 
    useEffect(() => {
        Api.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/success`, { Credential: true })
            .then(res => {
                console.log(res)
                auth.login(res.data.user, () => { props.history.push(DASHBOARD) })
            })
            .catch(err => console.log(err))
    }, [props])

    if (auth.isAuthenciated()) {
        props.history.push(DASHBOARD)
    }

    const [status, setStatus] = useState()
    const [passwdType, setPasswdType] = useState("password")
    const [values, setValues] = useState({ fname: "", lname: "", email: "", passwd: "", phone: "", cpasswd: "" })
    const [SignUp, setSignUp] = useState({ status: "", variant: "", message: "" });
    const [SignIn, setSignIn] = useState({ status: "", variant: "", message: "" });

    const Handle_Change = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setStatus(false)
        if (e.target.name === "cpasswd" && e.target.value !== values.passwd) {
            setStatus(true);
            setSignUp({ ...SignUp, variant: "danger", "message": "Password does not matched!!!" })
        } else {
            setStatus(false)
        }
        const value = e.target.value
        if (e.target.name === 'passwd') {
            const labels = ['', 'Too Weak!🥲', 'Average😩', 'Strong💪']
            let lowUpp = document.querySelector('.pass-validator.lower-upper')
            let special_char = document.querySelector('.pass-validator.atleast-special');
            let eight_plus = document.querySelector('.pass-validator.character');
            let atleast_number = document.querySelector('.pass-validator.atleast-number');
            let strength = document.getElementById('passwd-strength');
            let status = document.getElementById('status');
            if (/[a-zA-Z]/g.test(value)) {
                lowUpp.classList.replace('invalid', 'valid')

            } else {
                lowUpp.classList.replace('valid', 'invalid')

            }
            if (/['!@#$%^&*()']/g.test(value)) {
                special_char.classList.replace('invalid', 'valid')
            } else {
                special_char.classList.replace('valid', 'invalid')
            }
            if (/[0-9]/g.test(value)) {
                atleast_number.classList.replace('invalid', 'valid')
            } else {
                atleast_number.classList.replace('valid', 'invalid')
            }
            if (value.length >= 8) {
                eight_plus.classList.replace('invalid', 'valid')
            } else {
                eight_plus.classList.replace('valid', 'invalid')
            }
            //? Passwd Strength Meter
            if (value.length > 0 && value.length <= 4) {
                strength.style.cssText = "width:30%;background-color:#ff0069";
                status.innerText = labels[1]
            } else if (value.length >= 5 && value.length <= 8) {
                strength.style.cssText = "width:70%;background-color:#ff6910";
                status.innerText = labels[2]
            } else if (value.length >= 8) {
                strength.style.cssText = "width:90%;background-color:#39d600";
                status.innerText = labels[3]
            } else {
                strength.style.cssText = "width:0%;background-color:#ffffff";
                status.innerText = labels[0]
            }
        }
    }
    // Sign Up submit handler 
    const handle_Submit_SignUp = e => {
        e.preventDefault()
        setStatus(false)
        if (values.cpasswd === values.passwd) {
            Api.post(`/user/add`, values)
                .then(res => {
                    if (res.data.status) {
                        setSignUp(res.data)
                        setTimeout(() => window.location.reload(), 8000)
                    } else {
                        console.log(res.data)
                        setSignUp({ variant: "danger", message: res.data.message });
                    }
                })
                .catch((err) => { console.log(err) })
            setStatus(true)
        } else {
            setStatus(true);
            setSignUp({ ...SignUp, variant: "danger", "message": "Password does not matched!!!" })
        }
    }
    //Sign In Submit handler
    const handle_Submit_SignIn = e => {
        e.preventDefault()

        setStatus(false)
        const value = {
            email: values.email,
            passwd: values.passwd
        }
        if (value.email && value.passwd) {
            Api.post(`/user/auth`, value)
                .then(res => {
                    if (res.data.status) {
                        auth.login(res.data.user, () => { props.history.push(DASHBOARD) })
                    } else {
                        setSignIn({ variant: "danger", message: res.data.message })
                        setStatus(true)
                    }
                })
                .catch(err => console.log(err))
        }
    }

    const Handle_Focus = () => {
        document.querySelector('.custom-toast').classList.add('show')
    }
    const Handle_Blur = () => {
        document.querySelector('.custom-toast').classList.remove('show')
    }

    const ChangePanel = () => {
        let container = document.getElementById("container").classList;
        if (!container.contains("active")) {
            container.add("active");
        } else {
            container.remove("active")
        }
    }

    return (
        <>
            <MainDiv>
                <Container id='container'>
                    <FormContainer className='sign-up-container'>
                        <Form onSubmit={handle_Submit_SignUp}>
                            <h1>Create Account</h1>
                            {status && <Alert variant={SignUp.variant} message={SignUp.message} timeout={0} fade={false} />}
                            <Input type="text" placeholder="First Name" name="fname" onChange={Handle_Change} required />
                            <Input type="text" name="lname" placeholder="Last Name" onChange={Handle_Change} required />
                            <Input type="email" name="email" placeholder="Email" onChange={Handle_Change} required />
                            <Input type="text" name="phone" placeholder="Phone" onChange={Handle_Change} required />
                            <InputWrapper>
                                <Input type={passwdType} name="passwd" placeholder="Password" onChange={Handle_Change} onFocus={Handle_Focus}
                                    onBlur={Handle_Blur} required />
                                {
                                    passwdType === "password" ?
                                        <FaEyeSlash onClick={() => setPasswdType("text")} />
                                        :
                                        <FaEye onClick={() => setPasswdType("password")} />
                                }
                                {/* Password Toast */}
                                <div className="custom-toast fade mt-3 mx-0">
                                    <div className="custom-toast-header">
                                        Your passsword must have:
                                    </div>
                                    <div className="custom-toast-body">
                                        <span className="pass-validator character invalid">
                                            <i className="fas fa-check-circle pass-validator-icon"></i>
                                            <span className="pass-validator-text">8 or more characters</span>
                                        </span>
                                        <span className="pass-validator lower-upper invalid">
                                            <i className="fas fa-check-circle pass-validator-icon "></i>
                                            <span className="pass-validator-text">upper or lowercase letters</span>
                                        </span>
                                        <span className="pass-validator atleast-number invalid">
                                            <i className="fas fa-check-circle pass-validator-icon atleast-number"></i>
                                            <span className="pass-validator-text ">at least one number</span>
                                        </span>
                                        <span className="pass-validator atleast-special invalid">
                                            <i className="fas fa-check-circle pass-validator-icon atleast-number"></i>
                                            <span className="pass-validator-text ">at least one special character</span>
                                        </span>
                                    </div>
                                    <div className="custom-progress-container">
                                        <div className="custom-progress-header">Password Strength: <span id="status"></span></div>
                                        <div className="custom-progress">
                                            <div className="custom-progress-bar" id="passwd-strength"></div>
                                        </div>
                                    </div>
                                </div>
                            </InputWrapper>
                            <InputWrapper>
                                <Input type={passwdType} name="cpasswd" placeholder="Confirm Password" onChange={Handle_Change} required />
                                {
                                    passwdType === "password" ?
                                        <FaEyeSlash onClick={() => setPasswdType("text")} />
                                        :
                                        <FaEye onClick={() => setPasswdType("password")} />
                                }
                            </InputWrapper>
                            <Button title="sign up" disabled={(values.fname.length >= 1 && values.lname.length >= 1 && values.email.length >= 1 && values.phone.length >= 1 && values.passwd.length >= 1 && values.cpasswd.length >= 1) ? false : true} />
                        </Form>
                    </FormContainer>
                    <FormContainer className='sign-in-container'>
                        <Form onSubmit={handle_Submit_SignIn}>
                            <h1>Sign In</h1>
                            {status && <Alert variant={SignIn.variant} message={SignIn.message} />}
                            <Input type="email" onChange={Handle_Change} name="email" placeholder="Email" required />
                            <InputWrapper>
                                <Input type={passwdType} onChange={Handle_Change} name="passwd" placeholder="Password" required />
                                {
                                    passwdType === "password" ?
                                        <FaEyeSlash onClick={() => setPasswdType("text")} />
                                        :
                                        <FaEye onClick={() => setPasswdType("password")} />
                                }
                            </InputWrapper>
                            <Anchor href={RESET}>Forgot your password?</Anchor>
                            <Button title="sign in" disabled={(values.email.length >= 1 && values.passwd.length >= 1) ? false : true} />
                        </Form>
                    </FormContainer>
                    <OverlayContainer>
                        <Overlay>
                            <OverlayPanel className='overlay-left'>
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <Button variant="secondary" title="sign in" func={e => ChangePanel(e)} />
                                <DividerWrapper>
                                    <Divider>or</Divider>
                                </DividerWrapper>
                                <SocialContainer>
                                    <SocialLink href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/google`} target="_self"><FaGoogle /></SocialLink>
                                    <SocialLink href="#0"><FaFacebook /></SocialLink>
                                    <SocialLink href={INDEX}><FaHome /></SocialLink>
                                </SocialContainer>
                            </OverlayPanel>
                            <OverlayPanel className='overlay-right'>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start movie booking now</p>
                                <Button variant="secondary" title="sign up" func={e => ChangePanel(e)} />
                                <DividerWrapper>
                                    <Divider>or</Divider>
                                </DividerWrapper>
                                <SocialContainer>
                                    <SocialLink href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/google`} target="_self"><FaGoogle /></SocialLink>
                                    <SocialLink href="#0"><FaFacebook /></SocialLink>
                                    <SocialLink href={INDEX}><FaHome /></SocialLink>
                                </SocialContainer>
                            </OverlayPanel>
                        </Overlay>
                    </OverlayContainer>
                </Container>
            </MainDiv>
        </>
    )
}

export default Sign