import React, { forwardRef } from "react";
import './sponsors.css';

function SponsorCardGold({ sponsor }) {

}

function SponsorCardSilver({ sponsor }) {

}

function SponsorCardBronze({ sponsor }) {

}

const SponsorData = [
    {
        name: "Sponsor 1",
        tier: "Gold",
        logo: "https://example.com/sponsor1-logo.png",
        description: "Description for Sponsor 1",
        link: "https://sponsor1.example.com"
    },
    {
        name: "Sponsor 2",
        tier: "Silver",
        logo: "https://example.com/sponsor2-logo.png",
        description: "Description for Sponsor 2",
        link: "https://sponsor2.example.com"
    },
    {
        name: "Sponsor 3",
        tier: "Bronze",
        logo: "https://example.com/sponsor3-logo.png",
        description: "Description for Sponsor 3",
        link: "https://sponsor3.example.com"
    }
]

const Sponsors = forwardRef((props, ref) => (
    <div className="sponsors" ref={ref}>
        <p className="sponsors-title">Sponsors</p>
        <div className="sponsor-list">
            <div className="gold-sponsors">
                <h2 className="gold-sponsor-tier-title">Gold Tier</h2>
                {SponsorData.filter(sponsor => sponsor.tier === "Gold").map((sponsor, index) => (
                    <SponsorCardGold key={index} sponsor={sponsor} />
                ))}
            </div>
            <div className="silver-sponsors">
                <h2 className="silver-sponsor-tier-title">Silver Tier</h2>
                {SponsorData.filter(sponsor => sponsor.tier === "Silver").map((sponsor, index) => (
                    <SponsorCardSilver key={index} sponsor={sponsor} />
                ))}
            </div>
            <div className="bronze-sponsors">
                <h2 className="bronze-sponsor-tier-title">Bronze Tier</h2>
                {SponsorData.filter(sponsor => sponsor.tier === "Bronze").map((sponsor, index) => (
                    <SponsorCardBronze key={index} sponsor={sponsor} />
                ))}
            </div>
        </div>
    </div>
));

export default Sponsors;