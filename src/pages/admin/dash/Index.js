import React from 'react'
import { Card, CardBody, ContentBody, ContentContainer } from "./admin.css"
import Layout from "./Admin.layout"

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