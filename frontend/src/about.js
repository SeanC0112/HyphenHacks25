import React from "react";
import './about.css';

const AboutData = [
    {
        title: "Beginner Friendly",
        description: "Open-to-all workshops will be held to help anyone learn the tools they need to build and compete, no experience required. Additionally, volunteers with technical expertise will be around to help anyone who requests it."
    },
    {
        title: "Inclusive by Design",
        description: "Everyone is welcome, no matter your background, school, or experience. We believe tech should be for everyone!"
    },
    {
        title: "Free Dining",
        description: "Food and drink will be freely provided at the event for everyone!"
    },
    {
        title: "Judging",
        description: "Winners will be selected by a panel of industry professionals and awarded prizes for creativity, impact, and technical skill."
    },
    {
        title: "Meet Community",
        description: "Network with students, tech professionals, and leaders passionate about the future of STEM!"
    },
    {
        title: "Improve Valuable Skills",
        description: "Practice pitching ideas in front of an audience, an important skill in the real-world. Gain insightful feedback from the panel of expert judges and sharpen your skills."
    }
]

const About = React.forwardRef((props, ref) => (
    <div className="about" ref={ref}>
        <h1 className="about-title">About</h1>
        <p className="about-intro">Hyphen-Hacks is a student-run hackathon open to all Bay Area high schoolers. Whether you're building your first project or your tenth, it's a chance to explore ideas, meet new people, and make something you're proud of in just 14 hours!</p>
        <div className="about-content">
            {AboutData.map((item, index) => (
                <div key={index} className="about-item">
                    <h2 className="about-subtitle">{item.title}</h2>
                    <p className="about-text">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
));

export default About;