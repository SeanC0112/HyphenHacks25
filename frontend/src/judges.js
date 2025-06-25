import React, {useRef} from "react";
import './judges.css';

const JudgeItem = ({item}) => {
    return (
        <div className="judge-item">
            <img src={item.image} alt={item.name} className="judge-image" />
            <div className="judge-info">
                <h3 className="judge-name">{item.name}</h3>
                <p className="judge-bio">{item.bio}</p>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <img src="/linkedin.png"  className="judge-linkedin" />
                </a>
            </div>
        </div>
    );
}

const JudgesData = [
    {
        name: "Thijs Simonian",
        image: "/thijs.jpg",
        bio: "Building video models at LMArena. Previous SWE at Discord. LWHS Class of '24!",
        linkedin: "https://www.linkedin.com/in/thijsdev/"
    }
];

const Judges = React.forwardRef((props, ref) => (
    <div className="judges" ref={ref}>
        <h1 className="judges-title">Judges</h1>
        <div className="judges-wrapper">
            {JudgesData.map((item, index) => (
                <JudgeItem key={index} item={item} />
            ))}
        </div>
        <div className="judges-footer">
            <p className="judges-footer-text">Interested in being a judge? <a href="https://forms.gle/AXwpXXfqNx3XZPjx6" target="_blank" rel="noopener noreferrer">Sign up here!</a></p>
        </div>
    </div>
))

export default Judges;