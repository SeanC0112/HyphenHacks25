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
        image: "https://example.com/organizer1-image.png",
        title: "test",
        linkedin: "https://www.linkedin.com/in/sean-coleman-4731a5359/"
    },
    {
        name: "Organizer 2",
        image: "https://example.com/organizer2-image.png",
        title: "test",
        linkedin: "organizer2@example.com"
    },
    {
        name: "Organizer 3",
        image: "https://example.com/organizer3-image.png",
        title: "test",
        linkedin: "organizer3@example.com"
    }
];

const Organizers = React.forwardRef((props, ref) => (
    <div className="organizers" ref={ref}>
        {OrganizersData.map((item, index) => (
            <OrganizerItem key={index} item={item} />
        ))}
    </div>
))

export default Organizers;