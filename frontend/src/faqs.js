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
        question: "Can I join without a team?",
        answer: "Yes, you can join without a team! You can enter solo or find a team on discord or during designated team formation time at the event."
    },
    {
        question: "Is food provided?",
        answer: "Absolutely, lots of yummy food and snacks will be available for competitors!"
    },
    {
        question: "I'm a have little or no coding expierence, can I participate?",
        answer: "Of course! We will offer informative workshops for you to learn about coding! Alternatively, many skills besides coding are also important, like visual design."
    },
    {
        question: "Is Hyphen-Hacks free?",
        answer: "Yes, Hyphen-Hacks is free to everyone, in alignment with our mission of inclusivity!"
    },
    {
        question: "Is there public transportation nearby?",
        answer: "Just across the way for Lick-Wilmerding is Balboa Park BART Station, allowing for easy access for people all over the Bay Area! In addition, The K muni line runs in front of the school and the 8, 29, 49, 14, 54, and 43 bus lines have stops just outside."
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