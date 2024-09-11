import { Component } from "react";
import './About.css'

export default class About extends Component {
    constructor() {
        super()
    }
    render() {
        return <>
            <div id="About" className="about-section">
                <div className="title">
                    <h1>About Me</h1>
                </div>
                <div className="description">
                    <p>
                        I am a MERN stack developer specializing in creating dynamic web applications
                        using MongoDB, Express.js, React, and Node.js. With hands-on experience in both
                        front-end and back-end development, I am proficient in building robust, scalable,
                        and user-friendly solutions. I am passionate about leveraging the power of full-stack
                        JavaScript to deliver efficient and high-quality software solutions.
                    </p>
                </div>
            </div>

        </>
    }

}