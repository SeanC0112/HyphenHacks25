import React from "react";
import "./agenda.css";

function AgendaItem({ item }) {
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
    time: "9:40 AM",
    title: "Team Formation",
  },
  {
    time: "9:45 AM",
    title: "Hacking Begins!",
  },
  {
    time: "11:00 AM",
    title: "First Workshop",
  },
  {
    time: "12:15 PM",
    title: "Lunch",
  },
  {
    time: "1:00 PM",
    title: "Second Workshop",
  },
  {
    time: "5:30 PM",
    title: "Dinner",
  },
  {
    time: "7:00 PM",
    title: "Presentations and Judging",
  },
  {
    time: "8:30 PM",
    title: "Closing Ceremony",
  },
  {
    time: "9:00 PM",
    title: "Departure",
  },
];

const Agenda = React.forwardRef((props, ref) => (
  <div className="agenda" ref={ref}>
    <h1 className="agenda-header"> Potential Agenda</h1>
    <div className="agenda-list">
      {Items.map((item, index) => (
        <AgendaItem key={index} item={item} />
      ))}
    </div>
  </div>
));

export default Agenda;
