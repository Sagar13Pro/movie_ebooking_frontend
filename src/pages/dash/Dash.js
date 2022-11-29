import React from 'react'
import Layout from "../layout/dash/Layout.dash"
import { Card, CardBody, ContentBody, ContentContainer } from "./dash.css"

function Dash(props) {
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
                                    </ContentBody>
                                </ContentContainer>
                            </CardBody>
                        </Card>
                    }
                    Breadcrumb={"Dashboard"}
                    props={props}
                />
            </div>
        </>
    )
}

export default Dash