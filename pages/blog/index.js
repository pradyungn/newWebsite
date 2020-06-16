import React from 'react'
import Head from 'next/head'
import Container from '../../componenets/Container'

export default () => {
    return(
        <Container>
            <Head>
                <title>Notebook</title> 
            </Head>
            <h1 style={{color: "#50fa7b"}}>Notebook</h1>
            <p>This is basically my version of a blog - except I'm not lazy enough to use wordpress. This section is still in development :)</p>
        </Container>
    )
}
