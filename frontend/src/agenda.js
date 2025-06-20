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
        time: "10:15 AM",
        title: "Hacking Begins!",
    },
    {
        time: "12:15 PM",
        title: "Lunch",
    },
    {
        time: "6:30 PM",
        title: "Dinner",
    },
    {
        time: "9:00 PM",
        title: "Presentations and Judging",
    },
    {
        time: "10:30 PM",
        title: "Closing Ceremony",
    },
    {        
        time: "11:00 PM",
        title: "Departure",
    }
]

const Agenda = React.forwardRef((props, ref) => (
    <div className="agenda" ref={ref}>
        <h1 className="agenda-header">Agenda</h1>
        <div className="agenda-list">
            {Items.map((item, index) => (
                <AgendaItem key={index} item={item} />
            ))}
        </div>
    </div>
));

export default Agenda;