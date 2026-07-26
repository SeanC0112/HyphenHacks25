import React from "react";
import "./judges.css";

const JudgeItem = ({ item }) => {
  return (
    <div className="judge-item">
      <img src={item.image} alt={item.name} className="judge-image" />
      <h3 className="judge-name">{item.name}</h3>
      <p className="judge-bio">{item.bio}</p>
      <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.png" alt="LinkedIn" className="judge-linkedin" />
      </a>
    </div>
  );
};

const JudgesData = [
  {
    name: "Thijs Simonian",
    image: "/thijs.jpg",
    bio: "Building video models at LMArena. Previous SWE at Discord. LWHS Class of '24!",
    linkedin: "https://www.linkedin.com/in/thijsdev/",
  },
  {
    name: "Disha Patel",
    image: "/dishapatel.png",
    bio: "Disha Patel is a Software Engineer at Apple and published ML researcher focused on lightweight model deployment for resource-constrained environments.",
    linkedin: "https://www.linkedin.com/in/diisha-patel/",
  },
  {
    name: "Swosti Panda",
    image: "/swosti_panda.jpeg",
    bio: "Lead PM at Google (Devices & Services) — supply chain & logistics architecture behind Google's flagship retail stores. Previously Walmart Technology. MS in Supply Chain Management.",
    linkedin: "https://www.linkedin.com/in/swostipanda/",
  },
  {
    name: "Daniel Sam Pete Thiyagu",
    image: "/daniel.jpeg",
    bio: "Software engineer focused on recommendation systems, LLM infrastructure, prompt optimization, content understanding, and building scalable ML products.",
    linkedin: "https://www.linkedin.com/in/danielsampete/",
  },
  {
    name: "Preyansh Shah",
    image: "/shah.png",
    bio: "Senior Engineering Manager at Cisco — AI platform engineering, performance, observability, and developer tools behind production-scale enterprise systems. Previously Palo Alto Networks and F5. MBA, UIUC; MS, San Jose State. Inventor on a cited U.S. patent.",
    linkedin: "https://www.linkedin.com/in/preyanshshah/",
  },
  {
    name: "Anagha Todalbagi",
    image: "Anagha.jpg",
    bio: "Product Manager at Microsoft, building AI and data platform products. 12+ years of experience across engineering and product leadership. Passionate about mentoring the next generation of builders and entrepreneurs to create products that solve real customer problems.",
    linkedin: "https://www.linkedin.com/in/anaghatodalbagi",
  },
];

const Judges = React.forwardRef((props, ref) => (
  <div className="judges" ref={ref}>
    <h1 className="judges-title">Judges</h1>
    <div className="judges-wrapper">
      {JudgesData.map((item, index) => (
        <JudgeItem key={index} item={item} />
      ))}
    </div>
    {/*TODO update form for later*/}
    {/* <div className="judges-footer">
      <p className="judges-footer-text">
        Interested in being a judge?{" "}
        <a
          href="https://forms.gle/AXwpXXfqNx3XZPjx6"
          target="_blank"
          rel="noopener noreferrer">
          Sign up here!
        </a>
      </p>
    </div> */}
  </div>
));

export default Judges;
