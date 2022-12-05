import React, { useEffect, useState } from 'react'
import Layout from "../../layout/dash/Layout.dash"
import { Card, CardBody, ContentBody, ContentContainer } from "./dash.css"
import { Col, Row, Table, Modal } from 'react-bootstrap'
import Api from '../../../apis/Api'
import Button from '../../../components/Button/Button'

function Movie(props) {
    const [email, setEmail] = useState();
    const [invoice, setInvoice] = useState([]);
    const [modelData, setModelData] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

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

    const setModel = ({ index }) => {
        setModelData(invoice[index])
        setShow(true)
    }
    return (
        <div>
            <Layout
                title={"Movie Details"}
                Component={
                    <Card style={{ color: "#000" }}>
                        <CardBody>
                            <ContentContainer>
                                <ContentBody>
                                    <h2>Recent Movie Details</h2>
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
                                                        <th>More details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        invoice.map((el, index) => (
                                                            < tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{el.confirmation}</td>
                                                                <td>{el?.selection?.movie}</td>
                                                                <td>{el?.selection?.cinemaName}</td>
                                                                <td>{el?.selection?.price}</td>
                                                                <td><Button title="Details" func={() => setModel({ index: index })} /></td>
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
                Breadcrumb={"Movie"}
                props={props}
                set={e => setEmail(e)}
                active="Movie"
            />
            <Modal show={show} onHide={handleClose} style={{ color: "#000" }} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <th>Email Used</th>
                                    <td>{modelData?.recieptEmail}</td>
                                    <th>Confirmation</th>
                                    <td>{modelData?.confirmation}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{modelData?.billing_details?.name}</td>
                                    <th>Phone</th>
                                    <td>{modelData?.billing_details?.phone}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <th>Status</th>
                                    <td>{modelData?.paymentIntent?.status}</td>
                                    <th>Transaction ID</th>
                                    <td>{modelData?.paymentIntent?.id}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <th>Movie</th>
                                    <td>{modelData?.selection?.movie}</td>
                                    <th>Location</th>
                                    <td>{modelData?.selection?.cinemaName}</td>
                                    <th>Date/Time</th>
                                    <td>{`${modelData?.selection?.date} - ${modelData?.selection?.showTime}`}</td>
                                </tr>
                                <tr>
                                    <th>Seat</th>
                                    <td>{modelData?.selection?.seats}</td>
                                    <th>Tickets</th>
                                    <td>
                                        Adult : {modelData?.selection?.tickets?.adult}<br />
                                        Child : {modelData?.selection?.tickets?.child}<br />
                                        Senior : {modelData?.selection?.tickets?.senior}
                                    </td>
                                    <th>Price</th>
                                    <td>{modelData?.selection?.price}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table bordered striped hover size='sm'>
                            <tbody>
                                <tr>
                                    <th>Adress</th>
                                    <td className='w-100'>{`${modelData?.billing_details?.address?.line1}, ${modelData?.billing_details?.address?.line2}`}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table bordered striped hover size='sm'>
                            <tbody>
                                <tr>
                                    <th>City</th>
                                    <td>{modelData?.billing_details?.address?.city}</td>
                                    <th>State</th>
                                    <td>{modelData?.billing_details?.address?.state}</td>
                                    <th>Postal Code</th>
                                    <td>{modelData?.billing_details?.address?.postal_code}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table bordered striped hover size='sm'>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <td>{modelData?.card?.brand}</td>
                                    <th>Ending With</th>
                                    <td>{modelData?.card?.last4}</td>
                                    <th>FingerPrint</th>
                                    <td>{modelData?.card?.fingerprint}</td>
                                </tr>
                                <tr>
                                    <th>Exp Month</th>
                                    <td>{modelData?.card?.exp_month}</td>
                                    <th>Exp year</th>
                                    <td>{modelData?.card?.exp_year}</td>
                                    <th>Funding</th>
                                    <td>{modelData?.card?.funding}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Modal.Body>
            </Modal >
        </div >
    )
}

export default Movie