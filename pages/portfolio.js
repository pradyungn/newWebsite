import React from 'react'
import Container from '../componenets/Container'

export default () => {
    let colors = new Map()
    colors['red'] = "#ac8a8c"
    colors['purple'] = "#8f8aac"
    colors['magenta'] = "#ac8aac"
    colors['orange'] = "#c6a679"
    colors['yellow'] = "#aca98a"
    colors['green'] = "#8aac8c"
    colors['cyan'] = "#8aabac"
    colors['blue'] = "#8a98ac"

    function Item(props) {
        return (
            <div>
                <div className="fatline"></div>
                {props.children}
                <style jsx global>{`
                    .fatline{
                        width:100%;
                        height: 4px;
                        border-radius: 2px;
                        background-color: #f8f8f2;
                    }
                `}</style>
            </div>
        )
    }

    function Header(props) {
        return (
            <div className="pheader">
                <h3 className="project" style={{color: colors[props.color]}}>{props.title}</h3>
                <div>
                    {props.github &&
                        <span><a href={props.github}>Github</a></span>
                    }
                    {props.devpost &&
                        <span> | <a href={props.devpost}>Devpost</a></span>
                    }
                </div>
                <style jx global>{`
                    .project{
                    }

                    .pheader {
                      display: flex;
                      width: 100%;
                      align-items:center;
                      justify-content: space-between;
                    }
                `}</style>
            </div>
        )
    }
    return(
        <Container siteTitle="Portfolio" description="A conveniently organized list of all of my major projects! I tend to update this list after I've completed new projects, so this list may not alwayas be up-to-date.">
            <h1 style={{color: "#8f8aac"}}>
                Portfolio
            </h1>
            <p>
                A conveniently organized list of all of my major projects! I tend to update this list <i>after</i> I've completed new projects, so this list may not alwayas be up-to-date. Feel free to <a href="mailto:pradyungn@gmail.com">contact me</a> if you want to follow up on, or inquire about any of these projects.
            </p>

            <Item>
                <h3 style={{color: "#ac8a8c"}} id="solve">Flameless</h3>
                <p>My school's XREDU Club's submission to the Samsung Solve For Tomorrow. As one of the two members on the development team, I had an active role in the design and (obviously) development of our project. Flameless is a fire analytics system that aggregates fire data over a large area (in realtime, of course), plots this data on a map, and - in the even that it detects a fire - predicts where the fire may spread. We actively collaborated with the San Ramon Fire Department on this project, taking input and suggestions from them regarding the project design. The project functioned so well that we were the National Winners of the Samsung Solve for Tomorrow - endowing with our school's tech department with $100,000.</p>
                <ul>
                    <li>We used the LoRa protocol (LoRaWAN) shields with Arduinos to act as 'nodes'. We chose the LoRa protocol for its relative cost efficiency and long ranges.</li>
                    <li>These nodes would collect wind speed, temparature, and smoke (CO2 in air) data from the point they were planted at.</li>
                    <li>
                        These nodes relayed data to a Raspberry Pi 'hub' - one outfitted with a LoRa router
                        <ul>
                            <li>The Raspberry Pi aggregated the data from each node and determined whether or not there was a fire at those points.</li>
                            <li>We trained a regressional model using python, with our training data being from the UCI archives. This model determined whether there was a fire or not.</li>
                            <li>Based on the anemometer readings relayed back, the RasPi predicted where the fire would spread - and to what extent.</li>
                        </ul>
                    </li>
                </ul>
            </Item>

            <Item>
                <h3 style={{color: "#8aac8b"}}>Vital</h3>
                <p>
                    Our submission to LaunchHacks I. As implied by its name, <span style={{color:"#8aac8b"}}>Vital</span> aggregated and reported the "vitals" of a plant -
                    like environmental humidity/temperature, soil moisture, light levels, etc. - and made that data easily available to users. We tried to make Vital more than
                    a simple "fetch and report" project by offering the most integrations we could produce within the time constraints - including Google Assistant skills, Amazon
                    Alexa routines, and more!
                </p>
                <ul>
                    <li>We used an Arduino to collect the readings from our "test plant", then forwarded that data to a Raspberry Pi</li>
                    <li>
                        These were then stored and updated in real time via a Firestore server
                        <ul>
                            <li>Our Firebase was configured such that any hardware and applications would be user-specific - i.e all our software had per-user storage and devices</li>
                            <li>We also took advantage of Firebase's Authentication SDK to make a robust user-account implementation</li>
                        </ul>
                    </li>
                    <li>This data was then accessible on cross-platform applications - despite our limited time, we were able to create native iOS/Android applications as well as a Web App
                        <ul>
                            <li>These applications allowed users to track multiple plants, view the plant data graphed over an extended period of time, receive push notifications when their plants were in "danger" conditions, etc.</li>
                        </ul>
                    </li>
                </ul>
            </Item>
            
            <Item>
                <Header title="Kami" color="blue" github="https://github.com/pradyungn/Kami" devpost="https://devpost.com/software/kami"/>
                <p>One of the largely overlooked problems in today's technological era is information overload - information has become so pervasive
                    and easy-to-access that our lifestyles demand us to consume increasing amounts of information in a rapidly declining amount of time.
                    With our submission to BridgeHacks, we hoped to alleviate some of this strain by allowing users to more efficiently and rapidly intake and process information
                - condensing endless filler down to its most important points.</p>

                <ul>
                    <li>
                        We first made an API that was served using the Flask framework. Its function was twofold.
                        <ul>
                            <li>We utilized the PyTesseract OCR engine to read image input and convert it to rawtext.</li>
                            <li>We used NLTK's tokenization function to deconstruct the rawtext. By using the TF/IDF algorithms, we were able to weight each clause (indicating how "important" it is to the document as a whole). By setting a threshold for set weight, we were able to condense the input text.</li>
                        </ul>
                    </li>
                    <li>Our backend API was hosted on AWS, using one of their EC2 machines. We used Gunicorn to convert our development Flask server into a production web server, then served that using nginx.</li>
                    <li>Users were able to interact with our API using an array of applications that we made during the competition period.
                        <ul>
                            <li>We offered native iOS/Android apps by using the Flutter framework. From a user perspective, these apps could take a picture of any document, convert it into rawtext, then summarize that text.</li>
                            <li>We also had a web application made with Angular.js.</li>
                        </ul>
                    </li>
                </ul>
            </Item>
            <Item>
                <h3 style={{color: "#ac8aac"}}>The Drone Project</h3>
                <p>Our submission for CodeDay BA, Spring 2019! This project involved the devision of a raspberry-pi-powered drone, using stepper motors and a wooden frame. This drone was heavily engineered to be IoT-focused, with features like a web dashboard to monitor its diagnostics (altitude, speed, yaw, pitch, etc.), a live video feed that could be patched into a VR Headset (on multiple devices), and more! This project won us the best hardware hack at CDBA!</p>
                <ul>
                    <li>We used DNSmasq to use the Raspberry Pi as a router - essentially allowing the raspi to act as a WiFi hotspot</li>
                    <li>There were two webservers involved:
                        <ul>
                            <li>The JS server we used to serve our dashboard, coded in React.js</li>
                            <li>The Flask server used to serve video feed in both a website (which we didn't have time to style) and a video feed, experienced in VR</li>
                        </ul>
                    </li>
                    <li>The flight controller's code was written in C++, with some early object detection code written in python.</li>
                </ul>
            </Item>

            <Item>
                <h3 style={{color: "#8f8aac"}}>The Glove</h3>
                <p>Our submission to HackMerced in 2019 (I don't remember what month) where we submitted this to the AGTech Track. Our project revolved around the usage of two IMUs put on a 'glove', which we parsed the input from into Unity. In Unity, we cleaned this data with a Kalman filter, leaving the data ready to be used to for various purposes, like manipulating a 3-axis arm.</p>
                <ul>
                    <li>We felt that this project had not reached its full potential yet, so we submitted an interface between the glove and a robotic arm to Millibit Hacks in 2019. While we didn't win an award (since we didn't make a VR project, necessarily), we were invited to demonstrate our project to the UC Berkeley VR department</li>
                    <li>This project was largely written in Unity, so we used C# as a standard so that we could maintain a common denominator in our code. However, for prototyping we wrote some data parsers using C++</li>
                    <li>This project is what I consider to be the most industry-ready project I've ever built - the applications in aeronautics, oil, and various industries are limitless</li>
                </ul>
            </Item>

            <Item>
                <h3 style={{color: "#8aac8b"}}>FoodSaver</h3>
                <p>My first Hackathon project ever! I made this in 2018 at <span style={{color: "#c6a679"}}><b>SMHacks II</b></span>, in which we got runner up. The premise of the project was to mitigate food waste by finding recipes taht people could make using the leftover food in their fridge. Furthermore, the application accounted for what recipes you used, and would suggest recipes to use whatever food you had leftover. By the end of the hackathon, the focus of the application had shifted to suggesting recipes to people based on what they had in their fridge.</p>
                <ul>
                    <li>We used a really odd stack, since this was our first time developing a full solution.</li>
                    <li>We used HTML/CSS for the front end, without any libraries or CSS templates</li>
                    <li>The backend was written in Java with a SpringBoot framework</li>
                    <li>To go above and beyond, we wrote a rudimentary login API using Python and SQLite</li>
                </ul>
            </Item>

            <Item>
                <h3 style={{color: "#8aabac"}}>SpeakAR</h3>
                <p>My submission to <span style={{color: "#ac8a8c"}}><b>DVHacks</b></span> in January 2019! SpeakAR was a project that projected the translated name of an object in AR above the object. In simple terms, if you put the camera in front of, for example, a key, it would put the translation of key into a different language in 3d block letters above the object. The language for translation could be configured using the settings menu. Unfortunately, due to the unstable nature of Flutter at the time, our project became corrupted.</p>
                <ul>
                    <li>As stated before, this was written in the Flutter framework using Dart. We were one of the early adopters, using flutter a mere 2 weeks after release</li>
                    <li>The ML was handled in two ways - initially we tried to compile a tensoflow lite model, but due to incompatibilities with our system, we were unable to do so (and this is when I ditched Windows).</li>
                    <li>We instead handled the AI using Firebase's object detection model</li>
                </ul>
            </Item>

            <Item>
                <h3 style={{color: "#aca98a"}}>VR Mission Control</h3>
                <p>Our submission to LAHacks 2019. Using an MLH-provided Oculus Rift, we sought to create an effective interface for the onboard camera feed of our Raspberry Pi IoT Drone.  However this project soon evolved into something different - we made an MR interface that could generate an infinite number of virtual monitors (barring any computational constraints). Therefore within the simulation, you could virtualize 4 or 8 monitors even if in reality you had limited screen real estate. We saw this being applicable in high-information work environments - one example being a NASA Mission Control (get it?).</p>
                <ul>
                        <li>
                            We used Unity to create a virtual dashboard of sorts - one with an array of panes that one could see (in theory) different video feeds on.
                            <ul>
                                <li>As one might suspect, the Unity code was written in C#</li>
                            </ul>
                        </li>
                        <li>We once again used DNSMasq to create a wifi hotspot on the RasPi - however this time we also patched in an internet connection using a USB wifi module, making the RasPi function even more like an actual router.</li>
                        <li>We used a Flask webserver to stream the video feed from the drone's onboard camera - however we also decided to make an API for the drone's condition this time</li>
                </ul>
            </Item>

            <Item>
                <h3>More writeups in the future!</h3>
                <p>I'm sill learning, absorbing, and making as much as I can. I'll try to document writeups of some of my projects in the meantime!</p>
            </Item>

        </Container>
    )
}
