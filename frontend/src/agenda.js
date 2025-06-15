import React, {useRef} from "react";
import './agenda.css';

function AgendaItem({item}) {
    return (
        <div className="agenda-item">
            <span className="agenda-time">{item.time}</span>
            <span className="agenda-title">{item.title}</span>
        </div>
    );
}

const Items = [
    {
        time: "8:45 AM",
        title: "Arrival",
    },
    {
        time: "9:20 AM",
        title: "Opening Ceremony",
    },
    {
        time: "10:00 AM",
        title: "Team Formation",
    },
    {
        time: "12:00 PM",
        title: "Lunch Break",
    },
    {
        time: "1:00 PM",
        title: "Workshops Begin",
    },
    {
        time: "5:00 PM",
        title: "Dinner Break",
    },
    {
        time: "6:00 PM",
        title: "Hackathon Begins",
    },
    {
        time: "8:00 PM",
        title: "Evening Activities",
    }
]

const Agenda = React.forwardRef((props, ref) => (
    <div className="agenda" ref={ref}>
        {Items.map((item, index) => (
            <AgendaItem key={index} item={item} />
        ))}
    </div>
))

export default Agenda;