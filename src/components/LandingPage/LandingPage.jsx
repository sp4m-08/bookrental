import React, { useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const LandingPage = () => {
  let navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;

      if (userEmail.endsWith("@vitstudent.ac.in")) {
        console.log("User signed in:", result.user);
        navigate("/home");
      } else {
        alert("Please enter your VIT Mail address.");
        auth.signOut();
      }
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Authentication failed. Please try again.");
    }
  };

  // FAQ Item Component (moved from Faq.jsx)
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

  // FAQ Data (moved from Faq.jsx)
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
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-circle">
            <span className="logo-text">Lo</span>
          </div>
          <span className="logo-title">LOGO</span>
        </div>

        <nav className="nav-links">
          <span className="nav-link" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-link" onClick={() => navigate("/home")}>
            Browse Books
          </span>
          <span className="nav-link" onClick={() => navigate("/home")}>
            Browse Notes
          </span>
          <span className="nav-link" onClick={() => navigate("/faq")}>
            FAQ
          </span>
          <span className="nav-link" onClick={() => navigate("/about-us")}>
            About Us
          </span>
        </nav>
        <button
          className="upload-button"
          onClick={handleGoogleLogin}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#1C0071";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#1C0071";
          }}
        >
          Sign Up/Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="mid">
        <div className="mid-content">
          <h1>Book Rental / Find Notes</h1>
          <p>
            Lorem ipsum dolor sit amet, olore ma laboris n sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqu
          </p>
          <button className="btn" onClick={handleGoogleLogin}>
            Sign up/Login
          </button>
        </div>
      </section>

      {/* BookNotes Section (moved from BookNotes.jsx) */}
      <div className="booknotes">
        <section id="browse-books" className="browse-section">
          <h2>Browse Books</h2>
          <button className="view-more" onClick={() => navigate("/home")}>
            View more
          </button>
          <div className="card-container">
            {[1, 2, 3, 4].map((item) => (
              <div className="card" key={item} onClick={() => navigate("/home")}>
                <h3>Lorem ipsum dolor sit</h3>
                <p className="User">
                  <img src="/pfp.png" alt="books" width="20" height="20" />
                  User
                </p>
                <img src="/white_space.png" alt="books" width="230" height="190" />
              </div>
            ))}
          </div>
        </section>

        <section id="browse-notes" className="browse-section">
          <h2>Browse Notes</h2>
          <button className="view-more" onClick={() => navigate("/home")}>
            View more
          </button>
          <div className="card-container">
            {[1, 2, 3, 4].map((item) => (
              <div className="card" key={item}>
                <h3>Lorem ipsum dolor sit</h3>
                <p className="User">
                  <img src="/pfp.png" alt="books" width="20" height="20" />
                  User
                </p>
                <img src="/white_space.png" className="books" width="230" height="190" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAQ Section (moved from Faq.jsx) */}
      <div className="container-faq">
        <h1 className="header-faq">FAQ</h1>
        <div className="faq">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="about-us">
          <h1 className="header-faq">About Us</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
        <div className="filler-body"></div>
      </div>
    </div>
  );
};

export default LandingPage;