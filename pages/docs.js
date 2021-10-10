import React from 'react'
import Container from '../componenets/Container'

export default () => {
    return (
        <Container siteTitle="Documents" description="A collection of documents that I found worth sharing :) Includes Resume and Cover Letter.">
            <h1 style={{color: "#aca98a"}}>Documents</h1>
            <p>Any documents that I find worth publishing, I guess? This will get updated with project documentation and such, as time goes on.</p>
            <ul style={{height: "65vh"}}>
                <li><a href="/static/Resume.pdf">resume</a></li>
                <li><a href="/static/3304R_Notebok_TTEarly.pdf">robotics notebook - 19/20 early season</a></li>
                <li>There isn't much here right now... I'll try to add more things as they become relevant!</li>
            </ul>
        </Container>
    )
}
