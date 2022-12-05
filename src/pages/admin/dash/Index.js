import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card, CardBody, ContentBody, ContentContainer } from "./admin.css"
import Layout from "./Admin.layout"
import { Input, TextArea } from '../../user/login.css'
import Button from '../../../components/Button/Button'
import Api from '../../../apis/Api'

function Admin(props) {

    return (
        <>
            <div>
                <Layout
                    Component={
                        <Card>
                            <CardBody>
                                <ContentContainer>
                                    <ContentBody style={{ color: "#000000" }}>
                                    </ContentBody>
                                </ContentContainer>
                            </CardBody>
                        </Card>
                    }
                    Breadcrumb={"Admin Panel"}
                    props={props}
                    active="Dash"
                />
            </div>
        </>
    )
}

export default Admin