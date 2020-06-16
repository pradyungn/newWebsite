import React from 'react'
import Container from '../componenets/Container'

export default () => {
    return (
        <Container>
            <h1 style={{color: "#f1fa8c"}}>Documents</h1>
            <p>Any documents that I find worth publishing, I guess? This will get updated with project documentation and such, as time goes on.</p>
            <ul style={{height: "65vh"}}>
                <li><a href="/static/Resume.pdf">resume</a></li>
                <li><a href="/static/CL.pdf">cover letter</a></li>
                <li>that's it for now? i'll add robotics writeups and some essays here in the future :)</li>
            </ul>
        </Container>
    )
}
