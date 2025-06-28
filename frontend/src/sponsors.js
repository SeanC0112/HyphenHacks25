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
        <div className="sponsorship-prospectus">
            <div className="why-sponsor">
                <h3 className="sponsors-subtitle">Why Sponsor?</h3>
                <p className="sponsors-description">
                    Hyphen-Hacks is entirely student-organized and dedicated to making tech more inclusive and accessible. We welcome participants of all experience levels and backgrounds, and we design our event to lower the barrier to entry into STEM. Sponsoring Hyphen-Hacks is an opportunity to support the next generation of innovators, coders, and creative problem-solvers. As a sponsor, your organization will connect with high school students early in their tech journeys and gain visibility through on-site, digital, and merch branding. Your involvement signals a commitment to educational equity, youth empowerment, and a more diverse future in tech. With your support, we can continue to provide a free, impactful experience for Bay Area students passionate about the technical arts!
                </p>
            </div> 
            <div className="sponsorship-info">
                <h3 className="sponsors-subtitle">Sponsorship Levels</h3> 
                <div className="sponsorship-levels">
                    <div className="sponsorship-level bronze">
                        <h4 className="sponsorship-level-title">Bronze</h4>
                        <p className="sponsorship-level-price">$100+</p>
                        <p className="sponsorship-level-description">
                            Logo on event website<br />
                            Logo on sponsorship slide in opening and closing ceremonies<br />
                        </p>
                    </div>
                    <div className="sponsorship-level silver">
                        <h4 className="sponsorship-level-title">Silver</h4>
                        <p className="sponsorship-level-price">$500+</p>
                        <p className="sponsorship-level-description">
                            Everything in the Bronze Tier<br />
                            Brief description along with logo on website and slides<br />
                            Shoutout on event social media<br />
                            logo feautured on event merch
                        </p>
                    </div>
                    <div className="sponsorship-level gold">
                        <h4 className="sponsorship-level-title">Gold</h4>
                        <p className="sponsorship-level-price">$1000+</p>
                        <p className="sponsorship-level-description">
                            Everyting in Silver Tier<br />
                            Workshop about company product<br />
                            Speaker during opening ceremony<br />
                            Paragraph in closing email to all participants
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <a
          href="mailto:27sean.coleman@lwhs.org?cc:cgodinez@lwhs.org&subject=Hyphen-Hacks%202025%20Sponsorship%20Inquiry"
          className="sponsor-email-button"
        >
          Contact Us About Sponsorship
        </a>
    </div>
));

export default Sponsors;