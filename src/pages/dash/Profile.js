import React from 'react'
import { DASHBOARD } from '../../routes/Path'
import Auth from '../../services/Auth'
import Layout from "../layout/dash/Layout.dash"
import { Row, Col } from '../layout/dash/layout.css'
import { Input } from '../user/login.css'
import { Card, CardBody, ContentBody, ContentContainer } from "./dash.css"

function Profile(props) {
    const { email, fname, lname } = Auth.getDetails();
    return (
        <>
            <div>
                <Layout
                    Component={
                        <Card>
                            <CardBody>
                                <ContentContainer>
                                    <ContentBody>
                                        <h2>Heading</h2>
                                        <Row>
                                            <Col className="col-sm-12 col-md-4">
                                                <Input type={"email"} value={email} readOnly />
                                            </Col>
                                            <Col className="col-md-4">
                                                <Input type={"text"} value={fname} />
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
                />
            </div>
        </>
    )
}

export default Profile