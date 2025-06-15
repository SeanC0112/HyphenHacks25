import React from "react";
import './about.css';

const About = React.forwardRef((props, ref) => (
    <div className="about" ref={ref}>
        <h1 className="about-title">About</h1>
    </div>
));

export default About;