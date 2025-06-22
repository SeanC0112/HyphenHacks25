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
        question: "example question 1?",
        answer: "example answer 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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