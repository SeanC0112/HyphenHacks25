import React from "react";
import './about.css';

const AboutData = [
    {
        title: "Beginner Friendly",
        description: "No experience? No problem! Our workshops and mentors will help you learn the basics and get started building your first project."
    },
    {
        title: "Inclusive by Design",
        description: "Hyphen-Hacks welcomes all Bay Area high schoolers, regardless of background, school, or experience. Everyone is encouraged to participate."
    },
    {
        title: "Free Food & Drinks",
        description: "Enjoy complimentary meals, snacks, and drinks throughout the event so you can focus on creating and collaborating."
    },
    {
        title: "Industry Judging",
        description: "Your projects will be reviewed by experienced professionals who will provide feedback and award prizes for creativity, impact, and technical skill."
    },
    {
        title: "Networking & Community",
        description: "Connect with fellow students, tech professionals, and STEM leaders. Build friendships and professional relationships that last beyond the event."
    },
    {
        title: "Skill Development",
        description: "Practice teamwork, pitching ideas, and presenting to an audience. Gain confidence and valuable skills for future projects and opportunities."
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