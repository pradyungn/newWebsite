import React from 'react'
import Container from '../componenets/Container'

export default () => {
    return (
        <Container siteTitle="Documents" description="A collection of documents that I found worth sharing :) Includes Resume and Cover Letter.">
            <h1 style={{color: "#aca98a"}}>Documents</h1>
            <p>Any documents that I find worth publishing, I guess? This will get updated with project documentation and such, as time goes on.</p>
            <ul style={{height: "65vh"}}>
                <li><a href="/static/Resume.pdf">resume</a></li>
                <li><a href="/static/CL.pdf">cover letter</a></li>
                <li><a href="/static/3304R_Notebok_TTEarly.pdf">robotics notebook - 19/20 early season</a></li>
                <li>that's it for now? i'll add robotics writeups and some essays here in the future :)</li>
            </ul>
        </Container>
    )
}
