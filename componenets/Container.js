//  ____  _   _ 
// |  _ \| \ | | Pradyun Narkadamilli
// | |_) |  \| | https://pradyungn.tech
// |  __/| |\  | MIT License
// |_|   |_| \_| Copyright 2020 Pradyun Narkadamilli

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Container(props) {
        return (
            <div className="container">
                <Head>
                    <title>{ props.siteTitle }</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content={ props.description ? props.description : "Thinker. Developer. Innovator." }/>
                    <meta name="og:description" content={ props.description ? props.description : "Thinker. Developer. Innovator." }/>
                    <meta name="og:title" content={ props.siteTitle }/>
                    <meta name="og:image" content="https://new-website.pradyungn.now.sh/static/me.jpg"/>
                </Head>
                <div className="header">
                    <a href="/">~</a>
                    <div className="rhead">
                        <Link href="/blog"><a className="hrlink">blog</a></Link>
                        <Link href="/docs"><a className="hrlink">docs</a></Link>
                        <Link href="/portfolio"><a className="hrlink">projects</a></Link>
                    </div>
                </div>
                <div className="main">
                    {props.children}
                </div>
                <footer>
                    <p> Made with ❤️  and ☕ by Pradyun N.  </p>
                </footer>
                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
                    html, body {
                        font-family: Roboto, sans-serif;
                        background-color: #282a36;
                        color: #f8f8f2;
                        font-weight: 400;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        align-items: center;
                    }

                    .header {
                        width: 100%;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;
                        margin-bottom: 20px; }

                    @media (max-width: 700px){
                        .container {
                            max-width:700px;
                        }
                    }

                    @media (min-width: 700px){
                        .container {
                            width:700px;
                        }
                    }

                    .hrlink {
                        margin-left: 10px;
                    }

                    .rhead {
                        display: flex;
                    }

                    a {
                        font-weight: 800;
                        font-style: italic;
                        text-decoration: none;
                        color: #ff79c6;
                        transition: 250ms ease;
                    }

                    a:hover {
                        color: #bd93f9; 
                    }

                    h1 {
                        font-weight: 900;
                    }
                    

                ` } </style>
            </div>
        )
}
