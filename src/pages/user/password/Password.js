import React, { useEffect, useState } from 'react'
import Api from '../../../apis/Api'
import { useJwt } from "react-jwt"
import Alert from "../../../components/Alert/Alert"
import { LOGIN } from '../../../routes/Path'
import Button from '../../../components/Button/Button'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Container, Overlay, OverlayContainer, OverlayPanel, Input, Form, FormContainer, MainDiv, InputWrapper } from "../login.css"


function Password(props) {
    document.title = "Set Password"
    const [value, setValues] = useState({ email: "", passwd: "", cpasswd: "", message: "", variant: "" })
    const [passwdType, setPasswdType] = useState("password")
    const [status, setStatus] = useState()
    if (!props.location.search.startsWith("?token=")) {
        props.history.push(LOGIN)
    }
    const { decodedToken, isExpired } = useJwt(props.location.search.split("=")[1]);
    useEffect(() => {
        if (decodedToken && !isExpired) {
            setValues({ ...value, email: decodedToken.user })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decodedToken])

    const handleChange = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value })
        if (e.target.name === "cpasswd" && e.target.value !== value.passwd) {
            setStatus(true);
            setValues({ ...value, variant: "danger", "message": "Password does not matched!!!" })
        } else {
            setStatus(false)
        }
        const values = e.target.value
        if (e.target.name === 'passwd') {
            const labels = ['', 'Too Weak!🥲', 'Average😩', 'Strong💪']
            let lowUpp = document.querySelector('.pass-validator.lower-upper')
            let special_char = document.querySelector('.pass-validator.atleast-special');
            let eight_plus = document.querySelector('.pass-validator.character');
            let atleast_number = document.querySelector('.pass-validator.atleast-number');
            let strength = document.getElementById('passwd-strength');
            let status = document.getElementById('status');
            if (/[a-zA-Z]/g.test(values)) {
                lowUpp.classList.replace('invalid', 'valid')
            } else {
                lowUpp.classList.replace('valid', 'invalid')
            }
            if (/['!@#$%^&*()']/g.test(values)) {
                special_char.classList.replace('invalid', 'valid')
            } else {
                special_char.classList.replace('valid', 'invalid')
            }
            if (/[0-9]/g.test(values)) {
                atleast_number.classList.replace('invalid', 'valid')
            } else {
                atleast_number.classList.replace('valid', 'invalid')
            }
            if (values.length >= 8) {
                eight_plus.classList.replace('invalid', 'valid')
            } else {
                eight_plus.classList.replace('valid', 'invalid')
            }
            //? Passwd Strength Meter
            if (values.length > 0 && values.length <= 4) {
                strength.style.cssText = "width:30%;background-color:#ff0069";
                status.innerText = labels[1]
            } else if (values.length >= 5 && values.length <= 8) {
                strength.style.cssText = "width:70%;background-color:#ff6910";
                status.innerText = labels[2]
            } else if (values.length >= 8) {
                strength.style.cssText = "width:90%;background-color:#39d600";
                status.innerText = labels[3]
            } else {
                strength.style.cssText = "width:0%;background-color:#ffffff";
                status.innerText = labels[0]
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus(false)
        if (value.passwd === value.cpasswd && value.passwd !== "") {
            Api.put("/user/reset-password", value)
                .then(res => {
                    console.log(res)
                    if (res.data.status) {
                        setValues({ ...value, message: res.data.message, variant: "success" })
                        setStatus(true)
                        setTimeout(() => props.history.push(LOGIN), 6000)
                    } else {
                        console.log("ok")
                        setValues({ ...value, message: res.data.message, variant: "danger" })
                        setStatus(true)
                    }
                })
                .catch(err => {
                    console.log(err.data)
                    setStatus(false)
                })
        } else {
            setValues({ ...value, variant: "danger", message: "Password must be matched" })
            setStatus(true)
        }

    }

    const Handle_Focus = () => {
        document.querySelector('.custom-toast').classList.add('show')
    }
    const Handle_Blur = () => {
        document.querySelector('.custom-toast').classList.remove('show')
    }
    return (
        <>
            <MainDiv>
                <Container className='active' id="container">
                    {
                        isExpired ?
                            (
                                <>
                                    <div>
                                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "#000" }}>Page Expired</div>
                                    </div>
                                </>
                            ) :
                            (
                                <>
                                    <FormContainer className='sign-in-container'>
                                        <Form onSubmit={handleSubmit} method='post'>
                                            <h1 style={{ "marginBottom": "15px", color: "#000" }}>Set Password</h1>
                                            {
                                                status && <Alert message={value?.message} timeout={0} variant={value?.variant} />
                                            }
                                            <Input type="email" name="email" onChange={handleChange} value={value.email} readOnly />
                                            <InputWrapper>
                                                <Input type={passwdType} onChange={handleChange} name="passwd" placeholder="Password" onFocus={Handle_Focus}
                                                    onBlur={Handle_Blur} />
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
                                                <Input type={passwdType} onChange={handleChange} name="cpasswd" placeholder="Confirm Password" />
                                                {
                                                    passwdType === "password" ?
                                                        <FaEyeSlash onClick={() => setPasswdType("text")} />
                                                        :
                                                        <FaEye onClick={() => setPasswdType("password")} />
                                                }
                                            </InputWrapper>
                                            <Button title='Change' disabled={(value.passwd && value.cpasswd) ? false : true} type="submit" />
                                        </Form >
                                    </FormContainer >
                                    <OverlayContainer>
                                        <Overlay>
                                            <OverlayPanel className='overlay-left'>
                                                <h1>Set Passwsord</h1>
                                                <p>Set your password here<br />I'm not looking at you.</p>
                                            </OverlayPanel>
                                        </Overlay>
                                    </OverlayContainer>
                                </>
                            )
                    }
                </Container></MainDiv>
        </>
    )
}

export default Password