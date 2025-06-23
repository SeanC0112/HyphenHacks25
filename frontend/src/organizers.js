import React, {useRef} from "react";
import './organizers.css';

const OrganizerItem = ({item}) => {
    return (
        <div className="organizer-item">
            <img src={item.image} alt={item.name} className="organizer-image" />
            <div className="organizer-info">
                <h3 className="organizer-name">{item.name}</h3>
                <p className="organizer-title">{item.title}</p>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <img src="/linkedin.png"  className="organizer-linkedin" />
                </a>
            </div>
        </div>
    );
}

const OrganizersData = [
    {
        name: "Sean Coleman",
        image: "/sean.JPG",
        title: "Executive Director and Website Lead",
        linkedin: "https://www.linkedin.com/in/sean-coleman-4731a5359/"
    },
    {
        name: "Eddie Binetti",
        image: "/eddie.png",
        title: "Outreach Lead and Graphic Designer",
        linkedin: "deosnthavelinkedinyet.com"
    }
];

const Organizers = React.forwardRef((props, ref) => (
    <div className="organizers" ref={ref}>
        <h1 className="organizers-title">Organizers</h1>
        <div className="organizers-wrapper">
            {OrganizersData.map((item, index) => (
                <OrganizerItem key={index} item={item} />
            ))}
        </div>
    </div>
))

export default Organizers;