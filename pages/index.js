//  ____  _   _
// |  _ \| \ | | Pradyun Narkadamilli
// | |_) |  \| | https://pradyungn.tech
// |  __/| |\  | MIT License
// |_|   |_| \_| Copyright 2020 Pradyun Narkadamilli

// Main page of my website. CSS is contained within a JSX tag at the bottom for now, will work on making it more modular in the future.

import Link from "next/link";
import React, { useState } from "react";
import {
    FaTwitter,
    FaGithubAlt,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";
import Head from "next/head";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

export default () => {
    const [num, setNum] = useState(0);

    function Slide(props) {
        return <div className="slide">{props.children}</div>;
    }

    function Jump({ lnum }) {
        return (
            <a
                className={num === lnum ? "jump-active" : "jump"}
                href="#"
                onClick={() => setNum(lnum)}
            ></a>
        );
    }

    return (
        <main>
            <Head>
                <title>pradyungn</title>
                <meta name="description" content="Thinker. Developer. Innovator." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="og:title" content="pradyungn" />
                <meta name="og:description" content="Thinker. Developer. Innovator." />
                <meta
                    name="og:image"
                    content="https://new-website.pradyungn.now.sh/static/me.jpg"
                />
            </Head>
            <div className="frame">
                <div
                    className="deck"
                    style={{ transform: "translateX(" + (num * -100).toString() + "%)" }}
                >
                    <Slide>
                        <div className="me">
                            <img src="/static/me.jpg" className="portrait" />
                            <div className="btext" style={{ marginBottom: "7.5px" }}>
                                Pradyun Narkadamilli
                            </div>

                            <div className="socials">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100009257228843"
                                    className="invisible"
                                >
                                    <div className="social social1">
                                        <FaFacebookF size="12px" className="icon" />
                                    </div>
                                </a>
                                <a href="https://github.com/pradyungn" className="invisible">
                                    <div className="social social2">
                                        <FaGithubAlt size="12px" className="icon" />
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/pradyun-n-958499b8/"
                                    className="invisible"
                                >
                                    <div className="social social3">
                                        <FaLinkedinIn size="12px" className="icon" />
                                    </div>
                                </a>
                                <a href="https://twitter.com/pradyungn" className="invisible">
                                    <div className="social social4">
                                        <FaTwitter size="12px" className="icon" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="right">
                            <div className="quoteBox">
                                <div id="text">
                                    <div className="btext">I'm</div>
                                    <div id="mbruh" className="quotext">
                                        <TypistLoop interval={3000}>
                                            {[
                                                "a maker",
                                                "a programmer",
                                                "a sysadmin",
                                                "a leader",
                                                "an engineer",
                                            ].map((text) => (
                                                <Typist key={text} startDelay={250}>
                                                    {text}
                                                </Typist>
                                            ))}
                                        </TypistLoop>
                                    </div>
                                    <div className="underline"></div>
                                </div>
                            </div>

                            <div className="buttons">
                                <Link href="/blog">
                                    <a className="button button1 invisible bgap">
                                        <div className="btext">Blog</div>
                                    </a>
                                </Link>

                                <Link href="/docs">
                                    <a className="button button2 bgap invisible">
                                        <div className="btext">Docs</div>
                                    </a>
                                </Link>

                                <Link href="/portfolio">
                                    <a className="button button3 invisible">
                                        <div className="btext">Projects</div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Slide>

                    <Slide>
                        <div className="blurb-1">
                            <div className="huge">
                                <b>Hi! I'm Pradyun!</b>
                            </div>
                        </div>
                        <div className="box-1">
                            <div className="boxtext">
                                <p>
                                    I'm a Senior at Dougherty Valley High School (currently toiling through the drole of college applications).
                                    I'm passionate about making things for the sake of making things - be that as a solution, a hobby, or else.
                                </p>
                                <p>
                                    I'm a jack-of-all-trades, in the sense that I'm proficient with both hardware
                                    and software. While my hardware experience is primarily centered around the implementation
                                    and programming of microcontrollers, my software experience is more well-rounded.                                </p>
                            </div>
                        </div>
                    </Slide>

                    <Slide>
                        <div className="blurb-2 huge">
                            <b>About Me </b>
                        </div>
                        <div className="box-2">
                            <div className="boxtext">
                                <ul>
                                    <li>I compete in VEX Robotics, on Team 3304R</li>
                                    <li>
                                        I've organized{" "}
                                        <a
                                            href="https://www.launchhacks.tech"
                                            style={{ color: "#aca98a" }}
                                        >
                                            LaunchHacks
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://www.dvhacks.tech"
                                            style={{ color: "#ac8aac" }}
                                        >
                                            DVHacks II/III
                                        </a>
                                        , and{" "}
                                        <a
                                            href="https://www.prohacks.tech"
                                            style={{ color: "#c6a679" }}
                                        >
                                            ProHacks
                                        </a>
                                    </li>
                                    <li>
                                        I was a national winner of the 2020 Samsung Solve for
                                        Tomorrow - Learn more{" "}
                                        <Link href="/portfolio#solve">
                                            <a>here</a>
                                        </Link>
                                        !
                                    </li>
                                    <li>I have a degree-equivalent certification in Telugu (2015)</li>
                                    <li>I am a 2nd degree black belt in Taekwondo</li>
                                    <li>
                                        I've attended over 10 hackathons since early 2019. Learn
                                        more{" "}
                                        <Link href="/portfolio#hackathons">
                                            <a>here</a>
                                        </Link>
                                        .
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Slide>

                    <Slide>
                        <div className="blurb-3">
                            <div className="huge">
                                <b>Contact Me</b>
                            </div>
                        </div>

                        <div className="box-3">
                            <div className="boxtext">
                                <p>
                                    I love meeting new people! Want to talk 1 on 1? Feel free to
                                    reach out to me at{" "}
                                    <a href="mailto:me@pradyungn.tech">me@pradyungn.tech</a>{" "}
                                    or hit up my discord at{" "}
                                    <span
                                        style={{
                                            color: "#8aac8b",
                                            fontWeight: 700,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        Pradyun#9732
                                    </span>.
                                </p>
                            </div>
                        </div>

                        <div className="final">
                            <div className="boxtext">Made with ❤️ and ☕ by Pradyun N.</div>
                        </div>
                    </Slide>
                </div>

                <div className="nav">
                    <Jump lnum={0} />
                    <Jump lnum={1} />
                    <Jump lnum={2} />
                    <Jump lnum={3} />
                </div>
            </div>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        body,
        html {
          font-family: "Roboto Condensed", sans-serif;
          font-weight: 400;
          height: 100%;
          background-color: #0f0f0f;
          color: #f0f0f0;
          margin: 0;
        }

        .socials {
          height: 23px;

          display: flex;
          justify-content: space-evenly;
        }

        .social {
          background: #262626;

          height: 25px;
          width: 25px;

          border-radius: 12.5px;

          display: flex;
          justify-content: center;
          align-items: center;

          transition: ease 300ms;
        }

        .social:hover {
          transform: translate(-2.5px, -2.5px);
        }

        .social1:hover {
            background: #c6a679;
        }

        .social2:hover {
            background: #aca98a;
        }

        .social3:hover {
            background: #8f8aac;
        }

        
        .social4:hover {
            background: #8baa8c;
        }

        .me {
          position: absolute;
          text-align: center;
        }

        @media (min-width: 750px) {
          .me {
            top: 90px;
            left: 55px;
          }
        }

        @media (max-width: 750px) {
          .me {
            top: 10px;
            left: 60px;
          }
        }

        .frame {
          background: #0f0f0f;
          border: 3px solid #ac8a8c;
          box-sizing: border-box;
          overflow: hidden;
        }

        @media (min-width: 750px) {
          .frame {
            width: 750px;
            height: 450px;

            position: absolute;
            left: calc(50% - 750px / 2);
            top: calc(50% - 450px / 2);
          }
        }

        @media (max-width: 750px) {
          .frame {
            width: 320px;
            height: 550px;

            position: absolute;
            left: calc(50% - 320px / 2 + 0.5px);
            top: calc(50% - 550px / 2 + 0.5px);
          }
        }

        @media (min-width: 750px) {
          .right {
            position: absolute;
            width: 340px;
            height: 210px;
            left: 300px;
            top: 100px;
          }
        }

        @media (max-width: 750px) {
          .right {
            position: absolute;
            width: 250px;
            height: 210px;
            left: 35px;
            top: 230px;
          }
        }

        .quoteBox {
          background: #0f0f0f;
          border: 2.25px solid #8aac8b;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
        }

        @media (min-width: 750px) {
          .quoteBox {
            width: 250px;
            height: 180px;
            left: 0px;
            top: 12px;
          }
        }

        @media (max-width: 750px) {
          .quoteBox {
            width: 250px;
            height: 100px;
            left: 0px;
            top: 0px;
          }
        }

        .quotext {
          font-size: 27px;
        }

        .buttons {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .button1 {
            border: 2.25px solid #c6a679; 
        }

        .button1:hover {
            background: #c6a679;
        }

        .button2 {
            border: 2.25px solid #aca98a; 
        }

        .button2:hover {
            background: #aca98a;
        }

        .button3 {
            border: 2.25px solid #8f8aac; 
        }

        .button3:hover {
            background: #8f8aac;
        }

        @media (min-width: 750px) {
          .buttons {
            width: 110px;
            height: 220px;
            left: 265px;
            top: 0px;
          }
        }

        @media (max-width: 750px) {
          .buttons {
            width: 250px;
            height: 150px;
            top: 110px;
          }
        }

        .button {
          height: 50px;
          width: 100%;

          background: #0f0f0f;
          box-sizing: border-box;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
          transition: ease 300ms;
        }

        @media (min-width: 750px) {
          .button {
            margin-bottom: 15px;
          }
        }

        @media (max-width: 750px) {
          .button {
            margin-bottom: 7.5px;
          }
        }

        .button:hover {
            transform: translate(-5px, -5px);
            box-shadow: 5px 5px #262626;
        }

        .btext {
          font-size: 21px;
          color: #f0f0f0;
        }

        .portrait {
          width: 150px;
          height: 150px;
          margin-right: auto;
          margin-left: auto;
          border-radius: 75px;
        }

        .underline {
          width: 190px;
          height: 4.5px;
          background: #8aabac;
        }

        .invisible {
          color: #f0f0f0;
        }

        .invisible:hover {
          text-decoration: none;
        }

        .jump-active {
          width: 22.5px;
          height: 22.5px;

          background: #ac8aac;
          border: 2.25px solid #ac8aac;
          box-sizing: border-box;
          border-radius: 13.5px;
          transition: ease 150ms;
        }

        .jump {
          width: 22.5px;
          height: 22.5px;

          border: 2.25px solid #ac8aac;
          box-sizing: border-box;
          border-radius: 13.5px;
          transition: ease 150ms;
        }

        .jump:hover {
            border-width: 4px;
        }

        .nav {
          position: absolute;
          width: 165px;
          height: 30px;
          display: flex;
          justify-content: space-between;
          left: calc(50% - 165px / 2);
          bottom: 15px;
        }

        .slide {
          flex-shrink: 0;
        }

        @media (min-width: 750px) {
          .slide {
            width: 750px;
            height: 400px;
          }
        }

        .deck {
          display: flex;
          transition: transform 500ms ease;
        }

        @media (min-width: 750px) {
          .deck {
            width: 750px;
            height: 450px;
          }
        }

        @media (min-width: 750px) {
          .blurb-1 {
            position: absolute;
            top: 165px;
            left: 805px;
          }

          .blurb-2 {
            position: absolute;
            top: 165px;
            left: 1555px;
          }

          .blurb-3 {
            position: absolute;
            top: 165px;
            left: 2305px;
          }
        }

        @media (max-width: 750px) {
          .blurb-1 {
            position: absolute;
            top: 30px;
            left: 350px;
            width: 100%;
          }

          .blurb-2 {
            position: absolute;
            top: 30px;
            left: 710px;
            width: 100%;
          }

          .blurb-3 {
            position: absolute;
            top: 135px;
            left: 1010px;
            width: 100%;
          }
        }

        .box-1 {
          position: absolute;
          background: #0f0f0f;
          border: 2.25px solid #8aabac;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 750px) {
          .box-1 {
            width: 480px;
            height: 250px;

            top: 75px;
            left: 975px;
          }
        }

        @media (max-width: 750px) {
          .box-1 {
            width: 280px;
            height: 375px;

            top: 100px;
            left: 332px;
          }
        }

        .box-2 {
          position: absolute;

          background: #0f0f0f;
          border: 2.25px solid #8aac8b;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 750px) {
          .box-2 {
            width: 480px;
            height: 250px;

            top: 75px;
            left: 1725px;
          }
        }

        @media (max-width: 750px) {
          .box-2 {
            width: 280px;
            height: 375px;

            top: 100px;
            left: 645px;
          }
        }

        .box-3 {
          position: absolute;
          background: #0f0f0f;
          border: 2.25px solid #8f8aac;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 750px) {
          .box-3 {
            width: 480px;
            height: 120px;

            top: 125px;
            left: 2475px;
          }
        }

        @media (max-width: 750px) {
          .box-3 {
            width: 280px;
            height: 120px;

            top: 195px;
            left: 960px;
          }
        }

        .final {
          position: absolute;

          background: #0f0f0f;
          border: 2.25px solid #aca98a;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        @media (min-width: 750px) {
          .final {
            width: 480px;
            height: 50px;

            top: 260px;
            left: 2475px;
          }
        }

        @media (max-width: 750px) {
          .final {
            width: 280px;
            height: 50px;

            top: 330px;
            left: 960px;
          }
        }

        @media (min-width: 750px) {
          .boxtext {
            width: 430px;
            font-size: 18px;
          }
        }

        @media (max-width: 750px) {
          .boxtext {
            width: 250px;
            font-size: 16px;
          }
        }

        .huge {
          font-size: 36px;
        }

        a {
          text-decoration: none;
          font-weight: 700;
          font-style: italic;
          color: #8aabac;
        }

        a:hover {
          text-decoration: underline;
        }

        .invisible {
          font-style: normal;
          text-decoration: none;
          font-weight: 400;
          color: #f0f0f0;
        }
      `}</style>
        </main>
    );
};
