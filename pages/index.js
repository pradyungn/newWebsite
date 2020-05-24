import Link from 'next/link'
import React, {useState} from 'react'
import { FaTwitter, FaGithubAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default () => {
  const [num, setNum] = useState(0);

  function Slide(props) {
    return (
      <div className="slide">
        {props.children}
      </div>
    )
  }


  function Jump({lnum}) {
    return (
      <a className={num === lnum ? "jump-active" : "jump"} href="#" onClick={() => setNum(lnum)}></a>
    );
  }

  return (
  <main>
    <div className="frame">
    <div className="deck" style={{transform: "translateX("+(num*-100).toString()+"%)"}}>
      <Slide>
        <div className="me">
          <img src="/static/me.jpg" className="portrait"/>
        <div className="btext" style={{marginBottom:"7.5px"}}>Pradyun Narkadamilli</div>

        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100009257228843" className="invisible">
            <div className="social"><FaFacebookF size="12px" className="icon" /></div>
          </a>
          <a href="https://github.com/pradyungn" className="invisible">
            <div className="social"><FaGithubAlt size="12px" className="icon" /></div>
          </a>
          <a href="https://www.linkedin.com/in/pradyun-n-958499b8/" className="invisible">
            <div className="social"><FaLinkedinIn size="12px" className="icon" /></div>
          </a>
          <a href="https://twitter.com/pradyungn" className="invisible">
            <div className="social"><FaTwitter size="12px" className="icon" /></div>
          </a>
        </div>

        </div>

        <div className="right">
          <div className="quoteBox">
            <div id="text">
              <div className="btext">I'm</div>
              <div id="mbruh" className="quotext">a programmer</div>
              <div className="underline"></div>
            </div>
          </div>

          <div className="buttons">
            <Link href="/blog">
              <div className="button" style={{marginBottom: "15px"}}>
                <div className="btext">Blog</div>
              </div>
            </Link>

            <Link href="/static/Resume.pdf">
              <div className="button" style={{marginBottom: "15px"}}>
                <div className="btext">Resume</div>
              </div>
            </Link>

            <Link href="/portfolio">
              <div className="button">
                <div className="btext">Portfolio</div>
              </div>
            </Link>

          </div>
        </div> 
      </Slide>

      <Slide>
        <div className="blurb-1">
          <div className="huge"><b>Hi! I'm Pradyun!</b></div>
        </div>

        <div className="box-1">
          <div className="boxtext">
            <p>I'm a 16 year old Junior at Dougherty Valley High School. I've been programming for over 7 years, with experience in a variety of languages and tools. </p>
            <p>I view programming as not only my craft, but my hobby. The very thing that wakes me up in the morning, and keeps me up at night. I especially enjoy applications that not only serve a purpose, but bring joy to those around me.</p>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="blurb-2">
          <div className="huge">
            <b>About Me
            </b>          
          </div>
        </div> 
        <div className="box-2">
          <div className="boxtext">
            <ul>
              <li>I compete in VEX Robotics, on Team 3304R</li>
              <li>
                I've organized <a href="https://www.launchhacks.tech" style={{color:"#8be9fd"}}>LaunchHacks</a>, <a href="https://www.dvhacks.tech" style={{color:"#ff5555"}}>DVHacks II/III</a>, and <a href="https://www.dvhacks.tech" style={{color:"#50fa7b"}}>ProHacks</a>
              </li>
              <li>I was a national finalist in the 2020 Samsung Solve for Tomorrow. Learn more <Link href="/portfolio#solve"><a>here</a></Link>.</li>
              <li>I have a Bachelor's Degree in Telugu (2015)</li>
              <li>I am a 2nd degree black belt in Taekwondo</li>
              <li>I've attended over 10 hackathons since early 2019. Learn more <Link href="/portfolio#hackathons"><a>here</a></Link>.</li>
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
            <p>I love meeting new people! Want to talk 1 on 1? Feel free to reach out to me at <a href="mailto:pradyungn@gmail.com">pradyungn@gmail.com</a> or hit up my discord at <span style={{color:"#caa9fa", fontWeight: 700, fontStyle: "italic"}}>Pradyun#9732</span>. Otherwise, I can be found lurking the depths of the Hack Club Slack :P</p>
          </div>
        </div>

        <div className="final">
          <div className="boxtext">
            Made with ❤️  and ☕ by Pradyun N.
          </div>
        </div>
      </Slide>
    </div>

    <div className="nav">
      <Jump lnum={ 0 }/>
      <Jump lnum={ 1 }/>
      <Jump lnum={ 2 }/>
      <Jump lnum={ 3 }/>
    </div>
    </div>

    <style jsx global>{`
      body,html {
          font-family: 'Roboto', sans-serif;
          font-weight:400;
          height:100%;
          background-color: #282a36;
          color: #f8f8f2;
          margin: 0;
      }
      .socials{
        height: 23px;

        display: flex;
        justify-content: space-evenly;
      }

      .social{
        background: #44475A;

        height: 20px;
        width: 20px;

        border: 1.5px solid #BD93F9;
        border-radius: 10.5px;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: ease 300ms;
      }

      .social:hover {
        background: #282a36;
        border-color: #ff79c6;
      }

      .me {
        position: absolute;
        text-align: center;
        top: 90px;
        left: 55px;
      }
      

      .frame {
        width: 750px;
        height: 450px;
        position: absolute;
        left: calc(50% - 750px/2 + 0.5px);
        top: calc(50% - 450px/2 + 0.5px);

        background: #282A36;
        border: 3px solid #FF79C6;
        box-sizing: border-box;
        border-radius: 15px;
        overflow: hidden;
      }

      .right {
        position: absolute;
        width: 340px;
        height: 210px;
        left: 300px;
        top: 100px;
      }

      .quoteBox {
        position: absolute;
        width: 250px;
        height: 205px;
        left: 0px;
        top: 0px;

        background: #282A36;
        border: 2.25px solid #BD93F9;
        box-sizing: border-box;
        border-radius: 15px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .quotext {
        font-size: 27px;
      }

      .buttons {
        position: absolute;
        width: 110px;
        height: 200px;
        left: 265px;
        top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .button {
        height: 50px;
        width: 100%;

        background: #282A36;
        border: 2.25px solid #CAA9FA;
        box-sizing: border-box;
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        transition: ease 300ms;
      }

      .button:hover {
        background: #1e1f29;
        border-color: #ff79c6;
        box-shadow: 5px 5px 2px #44475a;
        transform:translate(-5px, -5px)
      }

      .btext{
        font-size: 21px;
        color: #f8f8f2;
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
        background: #ff79c6;
      }

      .invisible {
        color: #f8f8f2;
      }

      .jump-active {
        width:22.5px;
        height: 22.5px;

        background: #ff79c6;
        border: 2.25px solid #FF79C6;
        box-sizing: border-box;
        border-radius: 13.5px;
      }

      .jump {
        width:22.5px;
        height: 22.5px;

        border: 2.25px solid #FF79C6;
        box-sizing: border-box;
        border-radius: 13.5px;
        transition: ease 150ms;
      }

      .jump:hover {
        background: #bd93f940
      }

      .nav {
        position: absolute;
        width: 165px;
        height: 30px;
        left: 290px;
        bottom: 15px;
        display: flex;
        justify-content: space-between;
      }

      .slide {
        width: 750px;
        height: 400px;
        flex-shrink:0;
      }
      
      .deck {
        display:flex;
        transition: transform 500ms ease;
        width: 750px;
        height: 450px;
      }


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

      .box-1 {
        position: absolute;
        width: 480px;
        height: 250px;

        top: 75px;
        left: 975px;

        background: #282A36;
        border: 2.25px solid #50fa7b;
        box-sizing: border-box;
        border-radius: 15px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .box-2 {
        position: absolute;
        width: 480px;
        height: 250px;

        top: 75px;
        left: 1725px;

        background: #282A36;
        border: 2.25px solid #ff5555;
        box-sizing: border-box;
        border-radius: 15px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .box-3 {
        position: absolute;
        width: 480px;
        height: 150px;

        top: 100px;
        left: 2475px;

        background: #282A36;
        border: 2.25px solid #f1fa8c;
        box-sizing: border-box;
        border-radius: 15px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .final {
        position: absolute;
        width: 480px;
        height: 50px;

        top: 275px;
        left: 2475px;

        background: #282A36;
        border: 2.25px solid #8be9fd;
        box-sizing: border-box;
        border-radius: 15px;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .boxtext {
        width: 430px;
        font-size: 18px;
      }

      .huge {
        font-size: 36px;
      }

      a
      {
      text-decoration:none;
      font-weight:700;
      font-style: italic;
      color: #ff79c6
      }

      a:hover {
        text-decoration:underline;
      }

    `}</style>
  </main>
)}
