import React, { useEffect } from 'react'
import Layout from "../../layout/dash/Layout.dash"
import { Card, CardBody, ContentBody, ContentContainer } from "./dash.css"
import { Col, Row, Table } from 'react-bootstrap'
import Api from '../../../apis/Api'
import { useState } from 'react'
function Dash(props) {

    const [email, setEmail] = useState();
    const [invoice, setInvoice] = useState([]);
    useEffect(() => {
        if (email) {
            Api.get(`/user/movie/getAll/invoices/${email}`)
                .then(res => {
                    if (res.status) {
                        setInvoice(res.data?.invoices)
                    }
                })
                .catch(error => console.log(error))
        }
    }, [email])
    return (
        <>
            <div>
                <Layout
                    Component={
                        <Card style={{ color: "#000" }}>
                            <CardBody>
                                <ContentContainer>
                                    <ContentBody>
                                        <h2>Heading</h2>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover variant="dark">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Confirmation</th>
                                                            <th>Movie</th>
                                                            <th>Location</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            invoice.map((el, index) => (
                                                                <tr key={index}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{el.confirmation}</td>
                                                                    <td>{el?.selection?.movie}</td>
                                                                    <td>{el?.selection?.cinemaName}</td>
                                                                    <td>{el?.selection?.price}</td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </ContentBody>
                                </ContentContainer>
                            </CardBody>
                        </Card>
                    }
                    Breadcrumb={"Dashboard"}
                    props={props}
                    set={e => setEmail(e)}
                    title={"Dashboard"}
                />
            </div>
        </>
    )
}

export default Dash