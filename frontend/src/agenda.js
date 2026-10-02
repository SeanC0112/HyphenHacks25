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
    time: "8:30 AM",
    title: "Arrival + Breakfast",
  },
  {
    time: "9:00 AM",
    title: "Start",
  },
  {
    time: "9:15 AM",
    title: "Opening Ceremony",
  },
  {
    time: "9:30 AM",
    title: "Theme Reveal",
  },
  {
    time: "9:45 AM",
    title: "Team Formation",
  },
  {
    time: "10:00 AM",
    title: "Hacking Begins!",
  },
  {
    time: "12:00 PM",
    title: "Lunch",
  },
  {
    time: "5:45 PM",
    title: "Dinner",
  },
  {
    time: "6:30 PM",
    title: "Submission Deadline",
  },
  {
    time: "6:45 PM",
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
    <h1 className="agenda-header"> Agenda</h1>
    <div className="agenda-list">
      {Items.map((item, index) => (
        <AgendaItem key={index} item={item} />
      ))}
    </div>
  </div>
));

export default Agenda;
