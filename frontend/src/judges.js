import React, {useRef} from "react";
import './judges.css';

const JudgeItem = ({item}) => {
    return (
        <div className="judges-item">
            <img src={item.image} alt={item.name} className="judges-image" />
            <div className="judges-info">
                <h3 className="judges-name">{item.name}</h3>
                <p className="judges-contact">{item.contact}</p>
            </div>
        </div>
    );
}

const JudgesData = [
    {
        name: "Judge 1",
        image: "https://example.com/judge1-image.png",
        contact: "judge1@example.com"
    },
    {
        name: "Judge 2",
        image: "https://example.com/judge2-image.png",
        contact: "judge2@example.com"
    },
    {
        name: "Judge 3",
        image: "https://example.com/judge3-image.png",
        contact: "judge3@example.com"
    }
];

const Judges = React.forwardRef((props, ref) => (
    <div className="judges" ref={ref}>
        <h1 className="judges-title">Judges</h1>
        {/* {JudgesData.map((item, index) => (
            <JudgeItem key={index} item={item} />
        ))} */}
    </div>
))

export default Judges;