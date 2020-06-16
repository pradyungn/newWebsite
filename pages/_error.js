import React from 'react'
import Head from 'next/head'
import Container from '../componenets/Container'

export default () => {
    return(
        <Container>
            <Head>
                <title>Error 404</title> 
            </Head>
            <h1 style={{color: "#ff5555"}}>Error 404</h1>
            <p style={{height: "75vh"}}>Hey, we couldn't find that page! Are you sure you went to the right URL?</p>
        </Container>
    )
}
