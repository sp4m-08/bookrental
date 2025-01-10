import React from "react";
import "./BookNotes.css";

const BookNotes = () => {
    return (
        <div className="booknotes">
            <div className="books">
                <h2 className="section-title">Browse Books</h2>
                <div className="book-list">
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    
                    
                </div>
                <a href="" className="show-more">Show more →</a>
            </div>
            <div className="notes">
                <h2 className="section-title">Browse Notes</h2>
                <div className="note-list">
                    <div className="note-item"></div>
                    <div className="note-item"></div>
                    <div className="note-item"></div>
                    <div className="note-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                    <div className="book-item"></div>
                </div>
                <a href="" className="show-more">Show more →</a>
            </div>
        </div>
    );
};

export default BookNotes;
