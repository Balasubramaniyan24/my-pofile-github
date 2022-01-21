import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.jpg";
import myImg from "../Assets/avatar.gif";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
//import Home2 from "./Home2";
//import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
//} from "react-icons/ai";
//import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section class="home" >
      <Container className=" home-section" id="home">
       <Particle />
        <Container className=" home-content">
          <Row>
            <Col md={7} className="home-header">
              <h3 style={{ paddingBottom: 15, marginTop: "30px" }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h3>

              <h3 className="heading-name" style={{ color: "#A5E1AD" }} >
                I'm
                <strong className="main-name"  > Balasubramaniyan</strong>
              </h3>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Front End Developer",
                      "Software Engineer",
                      "Foodie"

                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>

            <Col xs={{ order: 'last' }} md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img src={homeLogo} alt="home pic" className="img-fluid" style={{ width: "200px", height: "200px" }} />
              </Tilt>
            </Col>
          </Row>
        </Container>

      </Container>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h4 style={{ fontSize: "2.6em", color: "#87AAAA" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h4>
            <Tilt>
            <p className="home-about-body">
              During My high school days, I came to learn about programming, ever since that i been in love with coding ❤️
              <br />
              <br />I am good in classics like
              <i>
                <b className="purple"> Html, Css, Javascript & React.js. </b>
              </i>
              <br />
              <br />
              I'm currently looking for opportunities in the field of Web Development
              with a focus on developing Awesome websites. I've obtained knowledge on various technologies and
              practising more on that to improve my skills/exposure to reach my Goal.
            </p>
            </Tilt>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br></br>

        <div >
          <h3 style={{ color: "#87AAAA" }}>EXPERIENCE</h3>
          <h4  style={{ color: "#2EDCBD" }}> Pangali Virundhu Restaraunt <br></br> <span style={{ fontSize: ".8rem" }}>June 2021 - November 2021</span></h4>
          <h4 ><span style={{ color: "#87AAAA" }}>Designation</span> : Associate - Technician </h4>
          <ul>
            <li>  Involved in  management of Billing apllication,  online orders from
              Swiggy, Zomato and other platforms which involves at
              least 300 orders per day.
            </li>
            <li> Managed Inventory Stocks and keep track of daily expenses.</li>
            <li> To Analyse different suppliers to obtain the best costeffective deals. </li>
          </ul>
          <h3 style={{ color: "#87AAAA" }}>Education</h3>
          <ul>
            <li>Bachelor of Computer Applications: BCA - YADAVA College, Madurai 2021 – 72.0% .</li>
            <li>12th- ST. Michael MatriculationHigher Secondary School – Madurai 2018 – 67.0% .</li>
            <li> 10th- Balamandiram Higher Secondary School – Madurai 2016 – 81.0% .</li>
          </ul>

          <h3 style={{ color: "#87AAAA" }}>Skills & Technologies:</h3>
          <ul>
          <li>Design, develop in HTML5, CSS3, Bootstrap, JavaScript.</li>
          <li>Tools: visual studio code. </li>
          <li>OS: Windows</li>
          <li>Deployment: Netlify, GitHub</li>
          <li>Experience on front-end framework – React JS to build User Interactive websites.</li>
          
          </ul>
          <h3 style={{ color: "#87AAAA" }}>Others</h3>
          <ul>
            <li><strong style={{ color: "#2EDCBD" }}>Languages:</strong> Tamil, English. </li>
            <li><strong style={{ color: "#2EDCBD" }}> Hobbies:</strong> Playing cricket, cooking, exploring new places.</li>
            <li> Excellent communication and Inter-Personal Skills, Well organized, Goal oriented.</li>
            <li>Being a Class Representative since my childhood to college days, it is easy for me to work
              with people, I’m a good team player and also manage various Tasks.</li>
          </ul>

        </div>
        <Row>
          <Col md={12} className="home-about-social">

            <p>
              Feel free to <span className="purple">connect </span>with me on  </p>
            <ul className="inline" >
              <li class="btn btn-secondary" style={{ display: "inline", marginRight: "20px" }}>
                <a href="https://www.linkedin.com/in/balasubramaniyan-t-340167210/"
                  target="_blank" style={{ all: "unset" }}
                  rel="noreferrer" > Linkedin  </a>
              </li>
              <li class="btn btn-secondary" style={{ display: "inline" }}>

                <a style={{ all: "unset" }} href="mailto: balasubramani2471@gmail.com">Send Email</a></li>
            </ul>







          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Home;
