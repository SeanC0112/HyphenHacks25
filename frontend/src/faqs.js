import React from 'react';
import './faqs.css'; // Assuming you have a CSS file for styling

function FAQItem({ question, answer }) {
    return (
        <div className="faq-item">
            <h3 className="faq-question">{question}</h3>
            <p className="faq-answer">{answer}</p>
        </div>
    );
}

const faqData = [
    {
        question: "example question 1?",
        answer: "example answer 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

function FAQs() {
    return (
        <div className="FAQs">
            <h2 className="faqs-title">Frequently Asked Questions</h2>
            {faqData.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </div>
    );
}

export default FAQs;