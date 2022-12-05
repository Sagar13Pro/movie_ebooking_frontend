import React, { useEffect, useState } from 'react'
import Layout from '../layout/movie/Layout.movie'
import { Container, CustomSection, Row, Col, Image, CardContent, H5, Card, CardHeader, CardThumb } from "../layout/movie/layout.css"
import Api from '../../apis/Api'
import { EVENT } from '../../routes/Path'

function EventList(props) {

    const [eventList, setEventsList] = useState([])

    useEffect(() => {
        Api.get(`/event/all`)
            .then(res => {
                if (res.data.status)
                    setEventsList(res.data.events)
            })
            .catch(er => console.log(er))
    }, [])

    const Handle_Event = ({ event }) => {
        if (event) {
            props.history.push({ pathname: `${EVENT.split(":")[0]}${event._id}` })
        }
    }

    return (
        <>
            <Layout
                banner_title={"Get Your Ticket"}
                banner_paragraph={"Dont't miss the show..."}
                search_section={false}
                event_section={false}
                movie_section={false}
                page={"Event"}
                props={props}
                title={"Events"}
                children={
                    <>
                        {/* Event Section */}
                        <CustomSection>
                            <Container>
                                <Row className='flex-wrap-rev justify-content-center'>
                                    <Col className='col-lg-12 mb-50 mb-lg-0'>
                                        <div className='filter'>
                                            <div>
                                                <Card className='tab-item active'>
                                                    <Row className='mb-10 justify-content-center'>
                                                        {
                                                            eventList && eventList.map((item, index) => (
                                                                <Col className='col-sm-6 col-lg-4' key={index}>
                                                                    <CardHeader >
                                                                        <CardThumb onClick={() => Handle_Event({ event: item })}>
                                                                            <Image src={item.Thumbnail} />
                                                                        </CardThumb>
                                                                        <CardContent>
                                                                            <H5 className='mb-0'>
                                                                                <span onClick={() => Handle_Event({ event: item })}>{item.Title}</span>

                                                                            </H5>
                                                                        </CardContent>
                                                                    </CardHeader>
                                                                </Col>

                                                            ))
                                                        }
                                                    </Row>
                                                </Card>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </CustomSection>
                    </>
                }
            />
        </>
    )
}

export default EventList