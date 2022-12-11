import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card, CardBody, ContentBody, ContentContainer } from "./admin.css"
import Layout from "./Admin.layout"
import { Input, TextArea } from '../../user/login.css'
import Button from '../../../components/Button/Button'
import Api from '../../../apis/Api'
import Alert from '../../../components/Alert/Alert'

function AddMovie(props) {
    const [castArr, setCastArr] = useState([1])
    const [genreArr, setGenreArr] = useState([1])
    const [showTimeArr, setShowTimeArr] = useState([1])
    const [value, setValue] = useState({})

    const [resp, setResp] = useState({ status: false, message: "", variant: "" })

    const [genre, setGenre] = useState({})
    const [showTime, setShowTime] = useState({})
    const [cast, setCast] = useState([])

    const Handle_Cast = () => {
        setCastArr(castArr => [...castArr, castArr + 1])
    }
    const Handle_Genre = () => {
        setGenreArr(genreArr => [...genreArr, genreArr + 1])
    }
    const Handle_ShowTime = () => {
        setShowTimeArr(showTimeArr => [...showTimeArr, showTimeArr + 1])
    }
    // data storing
    const Handle_ShowTime_Change = e => {
        setShowTime({ ...showTime, [e.target.name]: e.target.value })
    }
    const Handle_Genre_Change = e => {
        setGenre({ ...genre, [e.target.name]: e.target.value })
    }
    // Cast
    const handle_Change = e => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const Handle_JSONParse = e => {
        const { value } = e.target
        try {
            if (JSON.parse(value))
                setCast(cast => [...cast, value])
        } catch (error) {
            alert("Check the format. Provide Quotes to both.")
        }
    }
    const Handle_Submit = e => {
        e.preventDefault();
        let payload = {
            "Genre": Object.values(genre),
            "Duration": value?.duration,
            "Synosis": value?.synosis,
            "Cast": cast.length ? cast.map(i => JSON.parse(i)) : [],
            "Thumbnail": value?.thumbnail,
            "Rating": Number(value?.rating),
            "Title": value?.title,
            "ShowTime": Object.values(showTime),
            "Director": value?.director
        }

        console.log(payload)
        if (payload) {
            Api.post(`/movie/create`, payload)
                .then(res => {
                    if (res.data.status) {
                        console.log(res.data)
                        setResp({ ...resp, status: true, message: res.data.message, variant: "success" })
                        setTimeout(() => window.location.reload(), 5000)
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div>
                <Layout
                    Component={
                        <Card>
                            <CardBody>
                                <ContentContainer>
                                    <ContentBody style={{ color: "#000000" }}>
                                        {resp?.status && <Alert variant={resp?.variant} message={resp?.message} timeout={7000} fade={false} margin={0} />}
                                        <form onSubmit={Handle_Submit}>
                                            <Row className='my-3'>
                                                <Col className="col-sm-12 col-md-4">
                                                    <Input type="text" placeholder='Title' name="title" onChange={handle_Change} required />
                                                </Col>
                                                <Col className="col-sm-12 col-md-4">
                                                    <Input type="text" placeholder='Duration 00h 00m' name="duration" onChange={handle_Change} required />
                                                </Col>
                                                <Col className="col-sm-12 col-md-4">
                                                    <Input type="text" placeholder='Director' name="director" onChange={handle_Change} required />
                                                </Col>
                                            </Row>
                                            <Row className='my-3'>
                                                <Col className="col-sm-12 col-md-4">
                                                    <Input type="text" placeholder='Rating' name="rating" onChange={handle_Change} />
                                                </Col>
                                                <Col className="col-sm-12 col-md-4">
                                                    <Input type="text" placeholder='Thumbnail' name="thumbnail" onChange={handle_Change} />
                                                </Col>
                                            </Row>
                                            <Row id="cast" className='my-3'>
                                                <Row>
                                                    <Col className='col-sm-9'> <h3>Cast</h3></Col>
                                                    <Col className='d-flex justify-content-center'>
                                                        <Button title='Add More' func={Handle_Cast} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h5>Provide same format: {`{"name":"value", "roleName":"value", "image":"url"}`}</h5>
                                                    </Col>
                                                </Row>
                                                {
                                                    castArr.map((i, index) => (
                                                        <Row className='my-2' key={i}>
                                                            <Col className="col-sm-12">
                                                                <TextArea type="text" placeholder='{"name":"value", "roleName":"value", "image":"url"}`}' name={`cast_${index}`} onBlur={Handle_JSONParse}>
                                                                </TextArea>
                                                            </Col>
                                                        </Row>
                                                    ))
                                                }
                                            </Row>
                                            <Row className='my-3'>
                                                <Row>
                                                    <Col className='col-sm-9'> <h3>Genre</h3></Col>
                                                    <Col className='d-flex justify-content-center'>
                                                        <Button title='Add More' func={Handle_Genre} />
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    {
                                                        genreArr.map((i, index) => (

                                                            <Col key={i} className="col-sm-12 col-md-4">
                                                                <Input type="text" placeholder='Genre' name={`genre_${index}`} onChange={Handle_Genre_Change} required />
                                                            </Col>

                                                        ))
                                                    }
                                                </Row>
                                            </Row>
                                            <Row className='my-3'>
                                                <Row>
                                                    <Col className='col-sm-9'> <h3>ShowTime</h3></Col>
                                                    <Col className='d-flex justify-content-center'>
                                                        <Button title='Add More' func={Handle_ShowTime} />
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    {
                                                        showTimeArr.map((i, index) => (

                                                            <Col key={i} className="col-sm-12 col-md-4">
                                                                <Input type="text" placeholder='ShowTime' name={`showtime_${index}`} onChange={Handle_ShowTime_Change} required />
                                                            </Col>

                                                        ))
                                                    }
                                                </Row>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <TextArea name="synosis" placeholder='Synosis' onChange={handle_Change} required></TextArea>
                                                </Col>
                                            </Row>
                                            <Button title='Submit' type='submit' />
                                        </form>
                                    </ContentBody>
                                </ContentContainer>
                            </CardBody>
                        </Card>
                    }
                    Breadcrumb={"Add Movie"}
                    props={props}
                    active="AddMovie"
                />
            </div>
        </>
    )
}

export default AddMovie