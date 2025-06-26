import React, { useState, useRef, forwardRef } from 'react';
import './faqs.css';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null);

    const maxHeight = isOpen && answerRef.current
        ? `${answerRef.current.scrollHeight}px`
        : "0px";

    return (
        <div className="faq-item">
            <hr className='faq-divider' />
            <div className="faq-question-row" onClick={() => setIsOpen(!isOpen)}>
                <span className={`faq-symbol${isOpen ? " open" : ""}`}>
                    {isOpen ? "−" : "+"}
                </span>
                <h3 className="faq-question">{question}</h3>
            </div>
            <div
                className={`faq-answer-wrapper${isOpen ? " open" : ""}`}
                style={{
                    maxHeight,
                }}
            >
                <p className="faq-answer" ref={answerRef}>{answer}</p>
            </div>
        </div>
    );
}

const faqData = [
    {
        question: "Who can participate?",
        answer: "Any high school student in the Bay Area is welcome to join Hyphen-Hacks."
    },
    {
        question: "Do I need coding experience?",
        answer: "No prior experience is required! We offer beginner-friendly workshops and mentors to help you learn as you go."
    },
    {
        question: "Can I join without a team?",
        answer: "Yes! You can participate solo or find teammates at the event or on our Discord server."
    },
    {
        question: "How much does it cost?",
        answer: "Hyphen-Hacks is completely free for all participants, including meals and snacks."
    },
    {
        question: "What should I bring?",
        answer: "Bring a laptop, charger, water bottle, and your creativity! We'll provide food, drinks, and WiFi."
    },
    {
        question: "How do I get there?",
        answer: "The event is at Lick-Wilmerding High School, right next to Balboa Park BART and several Muni and bus lines."
    },
    {
        question: "When will the tracks be announced?",
        answer: "Tracks and themes will be revealed during the opening ceremony."
    },
    {
        question: "Still have questions?",
        answer: "Email 27sean.coleman@lwhs.org and we'll be happy to help!"
    }
];

const FAQs = forwardRef((props, ref) => (
    <div className="FAQs" ref={ref}>
        <h2 className="faqs-title">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
            <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
            />
        ))}
    </div>
));

export default FAQs;