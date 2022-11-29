import React, { useState } from 'react'
import Api from '../../../apis/Api'
import Alert from '../../../components/Alert/Alert';
import Button from '../../../components/Button/Button';
import { LOGIN } from '../../../routes/Path';
import { Container, Overlay, OverlayContainer, OverlayPanel, Input, Form, FormContainer, MainDiv } from "../login.css"


function Reset(props) {
    const [success, setsuccess] = useState(false);
    const [value, setValues] = useState({ email: "", message: "", variant: "" })
    const [status, setStatus] = useState()


    const handleChange = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        setStatus(false)
        e.preventDefault()
        Api.post("user/reset-password/verify", value)
            .then(res => {

                if (res.data.status) {
                    setsuccess(true)
                } else {
                    setValues({ ...value, variant: "danger", message: res.data.message })
                    setStatus(true)
                }
            })
            .catch(err => {
                console.log(err.data)
                setsuccess(false)
            })
    }
    return (
        <>
            <MainDiv>
                <Container className='active' id="container">
                    {
                        success ?
                            (
                                <>
                                    <FormContainer className='sign-in-container'>
                                        <div style={{
                                            "display": "flex",
                                            "justifyContent": "center",
                                            "marginTop": "10rem",
                                            "flexDirection": "column",
                                            "margin": "11rem 2rem"
                                        }}>
                                            <h1 style={{ "marginTop": "3rem" }}>Reset Password</h1>
                                            <h3 style={{ "marginTop": "1rem" }}>
                                                An email has been sent to <span style={{ "color": "#FF4B2B" }}>{value?.email}</span>.
                                            </h3>
                                        </div>
                                    </FormContainer>
                                    <OverlayContainer>
                                        <Overlay>
                                            <OverlayPanel className='overlay-left'>
                                                <h4>Check your indox</h4>
                                                <p>Look for email to set password.<br />Make sure your email is already come in box.</p>
                                            </OverlayPanel>
                                        </Overlay>
                                    </OverlayContainer>
                                </>
                            )
                            :
                            (
                                <>
                                    <FormContainer className='sign-up-container'>
                                        <Form onSubmit={handleSubmit} method='post'>
                                            <h1>Reset Password</h1>
                                            {status && <Alert variant={value?.variant} message={value?.message} />}
                                            <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                                            <Button title='reset' disabled={value.email ? false : true} />
                                        </Form>
                                    </FormContainer>
                                    <OverlayContainer>
                                        <Overlay>
                                            <OverlayPanel className='overlay-left'>
                                                <p>Let's first verify you</p>
                                                <Button title='back to home' variant='secondary' func={() => props.history.push(LOGIN)} />
                                            </OverlayPanel>
                                        </Overlay>
                                    </OverlayContainer>
                                </>
                            )
                    }

                </Container>
            </MainDiv>
        </>
    )
}

export default Reset