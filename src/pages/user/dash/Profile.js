/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { DASHBOARD } from '../../../routes/Path'
import Auth from '../../../services/Auth'
import Layout from "../../layout/dash/Layout.dash"
import { Row, Col } from '../../layout/dash/layout.css'
import { Input } from '../../user/login.css'
import { Card, CardBody, ContentBody, ContentContainer } from "./dash.css"
import Button from '../../../components/Button/Button'
import Alert from '../../../components/Alert/Alert'
import Api from '../../../apis/Api'

function Profile(props) {
    const { _id, email } = Auth.getDetails();
    const [values, setValues] = useState({ fname: "", lname: "", phone: "", status: false, message: "" })
    useEffect(() => {
        Api.get(`user/findByID/${_id}`)
            .then(res => {
                if (res.status) {
                    const { fname, lname, phone } = res.data
                    setValues({ ...values, fname: fname, lname: lname, phone: phone })
                }
            })
            .catch(error => console.log(error))
    }, [_id])

    const Handle_Change = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const Handle_Submit = () => {
        Api.put(`user/profile/update/${_id}`, values)
            .then(res => {
                setValues({ ...values, status: true, message: res.data.message })
                setTimeout(() => window.location.reload(), 6000)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <div>
                <Layout
                    Component={
                        <Card>
                            <CardBody>
                                <ContentContainer>
                                    <ContentBody>
                                        {values.status && <Alert message={values.message} timeout={0} fade={false} />}
                                        <h2>Heading</h2>
                                        <Row>
                                            <Col className="col-sm-12 col-md-4">
                                                <Input type={"email"} value={email} readOnly />
                                            </Col>
                                            <Col className="col-sm-12 col-md-4">
                                                <Input type={"text"} name="fname" value={values.fname} onChange={Handle_Change} />
                                            </Col>
                                            <Col className="col-sm-12 col-md-4">
                                                <Input type={"text"} name="lname" value={values.lname} onChange={Handle_Change} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-12 col-md-4">
                                                <Input type={"text"} name="phone" value={values.phone} onChange={Handle_Change} />
                                            </Col>
                                        </Row>
                                        <Row className='my-3'>
                                            <Col className='col-sm-4'>
                                                <Button title='Update' func={Handle_Submit} />
                                            </Col>
                                        </Row>
                                    </ContentBody>
                                </ContentContainer>
                            </CardBody>
                        </Card>
                    }
                    Breadcrumb={"Profile"}
                    Dashboard={DASHBOARD}
                    props={props}
                    title={"Profile"}
                />
            </div>
        </>
    )
}

export default Profile