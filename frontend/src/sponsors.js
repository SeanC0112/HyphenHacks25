import React, { forwardRef, useEffect } from "react";
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
    // {
    //     name: "Lick-Wilmerding",
    //     tier: "Gold",
    //     logo: "logo.svg",
    //     description: "A private school with public purpose, Lick-Wilmerding High School develops the head, heart, and hands of highly motivated students from all walks of life, inspiring them to become lifelong learners who contribute to the world with confidence and compassion.",
    //     link: "https://lwhs.org"
    // },
]

const Sponsors = forwardRef((props, ref) => {
    return (
        <div className="sponsors" ref={ref}>
            <p className="sponsors-title">Sponsors</p>
            <div className="sponsor-list">
                <h2 className="sponsor-tier-title gold">Gold Tier</h2>
                <div className="gold-sponsors">
                    <a href="https://lwhs.org" target="_blank" rel="noopener noreferrer" className="sponsor-card gold">
                        <img src='logo.svg' alt='Lick-Wilmerding' className="sponsor-logo" />
                        <p className="sponsor-description">A private school with public purpose, Lick-Wilmerding High School develops the head, heart, and hands of highly motivated students from all walks of life, inspiring them to become lifelong learners who contribute to the world with confidence and compassion.</p>
                    </a>
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
                            <ul className="sponsorship-level-description">
                                <li>Logo on event website</li>
                                <li>Logo on sponsorship slides</li>
                            </ul>
                        </div>
                        <div className="sponsorship-level silver">
                            <h4 className="sponsorship-level-title">Silver</h4>
                            <p className="sponsorship-level-price">$500+</p>
                            <ul className="sponsorship-level-description">
                                <li>Everything in the Bronze Tier</li>
                                <li>Brief description along with logo on website and slides</li>
                                <li>Shoutout on event social media</li>
                                <li>Logo featured on event merch</li>
                            </ul>
                        </div>
                        <div className="sponsorship-level gold">
                            <h4 className="sponsorship-level-title">Gold</h4>
                            <p className="sponsorship-level-price">$1000+</p>
                            <ul className="sponsorship-level-description">
                                <li>Everyting in Silver Tier</li>
                                <li>Workshop about company product</li>
                                <li>Speaker during opening ceremony</li>
                                <li>Paragraph in closing email to all participants</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <a
            href="https://forms.gle/Q9Wb4hYCySFpRYqB7"
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-email-button"
            >
            Contact Us About Sponsorship
            </a>
        </div>
)});

export default Sponsors;