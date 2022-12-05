import React from 'react'
import Layout from "./layout/movie/Layout.movie"

function index(props) {

    return (
        <>
            <Layout props={props}
                page="Home"
                search_section={false}
                title={"Movie Ebooking"}
            />
        </>
    )
}

export default index