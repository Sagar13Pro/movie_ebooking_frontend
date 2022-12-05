import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Layout from "../layout/movie/Layout.movie"
import Api from '../../apis/Api'

function Movie(props) {
    const [payload, setPayload] = useState({})
    const [item, setItem] = useState()
    // state that is passed from movie-list
    const ID = useParams();
    useEffect(() => {
        Api.get(`event/${ID.event}`)
            .then(res => {
                console.log(res)
                if (res.data.status) {
                    setPayload({ ...payload, movie: res.data?.event?.Title })
                    setItem(res.data.event)
                }
            })
            .catch(err => console.log(err))
    }, [ID, payload])

    return (
        <>
            <Layout
                banner_section={false}
                search_section={false}
                movie_section={false}
                event_section={false}
                page={"Event"}
                props={props}
                title={item?.Title}
                children={
                    item && (
                        <>
                            <Container fluid>
                                <Row>
                                    <Col xs={12}>
                                        <Card>
                                            <Card.Img
                                                overviwe="hidden" src={item.Thumbnail} alt="Card Image" />
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className='my-3 p-3'>
                                    <Col xs={12} md={6}>
                                        <h3>{item.Title}</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row className='my-3'>
                                        <Col>
                                            <h4>About</h4>
                                        </Col>
                                        <Col xs={12} md={8}>
                                            <p>{item?.About}</p>
                                        </Col>
                                    </Row>

                                </Row>
                            </Container>
                        </>
                    )
                }
            />
        </>
    )
}


export default Movie