import React, { forwardRef } from "react";
import './sponsors.css';

function SponsorCardGold({ sponsor }) {
    return (
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor-card gold">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
            <p className="sponsor-title">{sponsor.name}</p>
            <p className="sponsor-description">{sponsor.description}</p>
        </a>
    );

}

function SponsorCardSilver({ sponsor }) {
    return (
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor-card silver">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
            <p className="sponsor-title">{sponsor.name}</p>
            <p className="sponsor-description">{sponsor.description}</p>
        </a>
    );
}

function SponsorCardBronze({ sponsor }) {
    return (
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor-card bronze">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
            <p className="sponsor-title">{sponsor.name}</p>
        </a>
    );
}

const SponsorData = [
    {
        name: "Lick-Wilmerding",
        tier: "Gold",
        logo: "logo.svg",
        description: "A private school with public purpose, Lick-Wilmerding High School develops the head, heart, and hands of highly motivated students from all walks of life, inspiring them to become lifelong learners who contribute to the world with confidence and compassion.",
        link: "https://lwhs.org"
    },
]

const Sponsors = forwardRef((props, ref) => (
    <div className="sponsors" ref={ref}>
        <p className="sponsors-title">Sponsors</p>
        <div className="sponsor-list">
            <h2 className="sponsor-tier-title gold">Gold Tier</h2>
            <div className="gold-sponsors">
                {SponsorData.filter(sponsor => sponsor.tier === "Gold").map((sponsor, index) => (
                    <SponsorCardGold key={index} sponsor={sponsor} />
                ))}
            </div>
            <h2 className="sponsor-tier-title silver">Silver Tier</h2>
            <div className="silver-sponsors">
                {SponsorData.filter(sponsor => sponsor.tier === "Silver").map((sponsor, index) => (
                    <SponsorCardSilver key={index} sponsor={sponsor} />
                ))}
            </div>
            <h2 className="sponsor-tier-title bronze">Bronze Tier</h2>
            <div className="bronze-sponsors">
                {SponsorData.filter(sponsor => sponsor.tier === "Bronze").map((sponsor, index) => (
                    <SponsorCardBronze key={index} sponsor={sponsor} />
                ))}
            </div>
        </div>
    </div>
));

export default Sponsors;