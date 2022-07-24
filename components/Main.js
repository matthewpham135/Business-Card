import React from "react"

export default function Main(){
    return(
        <div>
            <img src="./images/portrait.jpg" className="main-image"></img>
            <div className="main-content">
                <h1 className="name-text">Matthew Pham</h1>
                <h3 className="career-text">Front End Developer</h3>
                <h4 className="personalwebsite-text">matthewpham.website</h4>
                <div className="contact-button-containers">
                    <div className="email-button">
                        <img src="./images/email.png"></img>
                        <h1>Email</h1>
                    </div>
                    <div className="linkedin-button">
                        <img src="./images/linkedin.png"></img>
                        <h1>LinkedIn</h1>
                    </div>
                </div>
                <div className="paragraph-container">
                    <h1 className="content-title">About</h1>
                    <p className="content-body">I am an aspiring front end developer currently enrolled at the University of Texas at Dallas as a junior. I am currently focused on learning front-end development when I'm not doing school work.</p>
                    <h1 className="content-title">Interests</h1>
                    <p className="content-body">I enjoy designing the front end of applications and competing in hackathons. Outside of coding I workout, run, and play basketball in my free time.</p>
                </div>
            </div>
        </div>
    )
}