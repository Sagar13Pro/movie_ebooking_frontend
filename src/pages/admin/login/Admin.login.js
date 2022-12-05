import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../../../components/Button/Button'
import Alert from '../../../components/Alert/Alert';
import Api from '../../../apis/Api';
import AAuth from "../../../services/AdminAuth"

// import "./index.css"
import {
    MainDiv,
    Container,
    FormContainer,
    OverlayContainer,
    Overlay,
    OverlayPanel,
    Form,
    Input,
    InputWrapper,
} from "./login.css"
import { ADMIN } from '../../../routes/Path';

function Login(props) {

    if (AAuth.isAuthenciated()) {
        props.history.push(ADMIN)
    }

    const [status, setStatus] = useState()
    const [passwdType, setPasswdType] = useState("password")
    const [values, setValues] = useState({ status: "", email: "", passwd: "", variant: "", message: "" });

    const Handle_Change = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setStatus(false)

    }
    //Sign In Submit handler
    const handle_Submit = e => {
        e.preventDefault()

        setStatus(false)
        const value = {
            email: values.email,
            passwd: values.passwd
        }
        if (value.email && value.passwd) {
            Api.post(`/admin/auth`, value)
                .then(res => {
                    if (res.data.status) {
                        AAuth.login(res.data.token, () => { props.history.push(ADMIN) })
                    } else {
                        setValues({ variant: "danger", message: res.data.message })
                        setStatus(true)
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <MainDiv>
                <Container id='container'>
                    <FormContainer className='sign-in-container'>
                        <Form onSubmit={handle_Submit}>
                            <h1 className='font-color-dark'>Sign In</h1>
                            {status && <Alert variant={values.variant} message={values.message} />}
                            <Input type="email" onChange={Handle_Change} name="email" placeholder="Email" required value={values.email} />
                            <InputWrapper>
                                <Input type={passwdType} onChange={Handle_Change} name="passwd" placeholder="Password" required value={values.passwd} />
                                {
                                    passwdType === "password" ?
                                        <FaEyeSlash onClick={() => setPasswdType("text")} />
                                        :
                                        <FaEye onClick={() => setPasswdType("password")} />
                                }
                            </InputWrapper>
                            <Button title="sign in" disabled={(values?.email.length >= 1 && values?.passwd.length >= 1) ? false : true} />
                        </Form>
                    </FormContainer>
                    <OverlayContainer>
                        <Overlay>
                            <OverlayPanel className='overlay-right'>
                                <h1>Admin</h1>
                                <p>Adminstrator Login</p>
                            </OverlayPanel>
                        </Overlay>
                    </OverlayContainer>
                </Container>
            </MainDiv>
        </>
    )
}

export default Login