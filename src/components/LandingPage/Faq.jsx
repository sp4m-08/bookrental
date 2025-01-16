import React, { useState } from "react";
import "./Faq.css";

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`faq-item ${isOpen ? "active" : ""}`}>
            <div className="faq-question" onClick={toggleFAQ}>
                {question}
                <span className="arrow">{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

const Faq = () => {
    const faqData = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "This is the answer to the first question.",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "This is the answer to the first question.",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "This is the answer to the first question.",
        },
    ];

    return (
        <div className="container-faq">
            <h1 className="header">FAQ</h1>
            <div className="faq">
                {faqData.map((item, index) => (
                    <FaqItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
            <div className="about-us">   
                <h1 className="header">About Us</h1>
                <p className="desciption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
            </div> 
            <div className="filler-body">
                
            </div>
            
        </div>
        
        
    );
};

export default Faq;
