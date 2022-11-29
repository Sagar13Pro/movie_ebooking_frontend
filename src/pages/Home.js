import React from 'react'
import Layout from "./layout/movie/Layout.movie"

function index(props) {

    return (
        <>
            <Layout props={props}
                Page="Home"
            />
        </>
    )
}

export default index