import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import Footer from "../../components/Footer";

import { Menu, X } from "lucide-react";

const LandingPage = () => {
  let navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;

      if (userEmail.endsWith("@vitstudent.ac.in")) {
        const idToken = await result.user.getIdToken();

        // Call your Flask backend with the ID token
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: idToken }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Backend verified login:", data);
          navigate("/home");
        } else {
          alert(data.error || "Login failed at backend.");
          auth.signOut();
        }
      } else {
        alert("Please login with your VIT email address.");
        auth.signOut();
      }
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Authentication failed. Please try again.");
    }
  };

  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="bg-[#ccd9ec] rounded-lg my-4 overflow-x-hidden transition-colors duration-300 p-2 shadow-sm">
        <div
          className="px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold text-indigo-800 cursor-pointer flex justify-between items-center transition-colors duration-300 hover:bg-blue-200"
          onClick={toggleFAQ}
        >
          <span className="pr-2">{question}</span>
          <span className="text-sm text-gray-600 transition-transform duration-300 flex-shrink-0">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>
        {isOpen && (
          <div className="text-sm px-4 sm:px-5 py-2 flex items-start text-gray-700">
            {answer}
          </div>
        )}
      </div>
    );
  };
  // FAQ Data (moved from Faq.jsx)
  const faqData = [
    {
      question: "How do I sign up?",
      answer:
        "Click on the 'Sign Up/Login' button and log in using your VIT email address to access all features.",
    },
    {
      question: "Can I share my own books and notes?",
      answer:
        "Yes! Once logged in, you can upload your books and notes to share with others.",
    },
    {
      question: "Is this platform free to use?",
      answer: "Yes, our platform is completely free for all users.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen overflow-x-hidden relative md:px-8 text-gray-700 font-medium">
      {/* Header Section */}
      <header className="flex items-center justify-between sticky mt-6 px-6 md:px-16 py-4 w-full h-19 backdrop-blur-sm bg-opacity-15 rounded-xl min-w-full box-border z-50 shadow-md md:min-w-max">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full  flex items-center justify-center relative">
            <img src="logo.png" alt="logo" className="size-8 md:size-12" />
          </div>
          {/* <span className="text-gray-600 text-3xl font-black tracking-wider">
            LOGO
          </span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-14 items-center">
          <span
            className="text-black text-sm font-normal cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span
            className="text-black text-sm font-normal cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Browse Books
          </span>
          <span
            className="text-black text-sm font-normal cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Browse Notes
          </span>
          <span
            className="text-black text-sm font-normal cursor-pointer"
            onClick={() => navigate("/faq")}
          >
            FAQ
          </span>
          <span
            className="text-black text-sm font-normal cursor-pointer"
            onClick={() => navigate("/about-us")}
          >
            About Us
          </span>
        </nav>

        {/* Desktop Sign Up Button */}
        <button
          className="hidden md:flex w-41 h-10 border border-indigo-800 rounded bg-transparent text-indigo-800 text-sm sm:text-lg font-normal cursor-pointer items-center justify-center transition-all duration-300 shadow-sm hover:bg-indigo-800 hover:text-white px-4"
          onClick={handleGoogleLogin}
        >
          Sign Up/Login
        </button>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-indigo-800 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center">
              <img src="logo.png" alt="logo" className="size-8 md:size-12" />
            </div>
            <span className="text-gray-600 text-xl font-black tracking-wider">
              Booklease
            </span>
          </div>
          <button
            className="p-2 text-gray-700 hover:text-indigo-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        <nav className="flex flex-col p-6 space-y-6">
          <span
            className="text-gray-800 text-lg font-medium cursor-pointer py-2 border-b border-gray-100 hover:text-indigo-800 transition-colors duration-200"
            onClick={() => {
              navigate("/");
              setMobileMenuOpen(false);
            }}
          >
            Home
          </span>
          <span
            className="text-gray-800 text-lg font-medium cursor-pointer py-2 border-b border-gray-100 hover:text-indigo-800 transition-colors duration-200"
            onClick={() => {
              navigate("/home");
              setMobileMenuOpen(false);
            }}
          >
            Browse Books
          </span>
          <span
            className="text-gray-800 text-lg font-medium cursor-pointer py-2 border-b border-gray-100 hover:text-indigo-800 transition-colors duration-200"
            onClick={() => {
              navigate("/home");
              setMobileMenuOpen(false);
            }}
          >
            Browse Notes
          </span>
          <span
            className="text-gray-800 text-lg font-medium cursor-pointer py-2 border-b border-gray-100 hover:text-indigo-800 transition-colors duration-200"
            onClick={() => {
              navigate("/faq");
              setMobileMenuOpen(false);
            }}
          >
            FAQ
          </span>
          <span
            className="text-gray-800 text-lg font-medium cursor-pointer py-2 border-b border-gray-100 hover:text-indigo-800 transition-colors duration-200"
            onClick={() => {
              navigate("/about-us");
              setMobileMenuOpen(false);
            }}
          >
            About Us
          </span>

          {/* Mobile Sign Up Button */}
          <button
            className="w-full h-12 border border-indigo-800 rounded bg-transparent text-indigo-800 text-lg font-medium cursor-pointer flex items-center justify-center transition-all duration-300 shadow-sm hover:bg-indigo-800 hover:text-white mt-6"
            onClick={() => {
              handleGoogleLogin();
              setMobileMenuOpen(false);
            }}
          >
            Sign Up/Login
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="flex justify-center items-center max-h-auto py-24 text-center px-5 ">
        <div>
          <h1 className="text-6xl font-bold text-indigo-800 mb-5">
            <span>Booklease</span>
          </h1>
          <p className="text-lg text-indigo-600 mb-8 max-w-xl">
            Rent the books you need, share the ones you don’t! Booklease
            connects VITians for hassle-free textbook & note swaps before CAT-2.
          </p>
          <button
            className="bg-indigo-500 w-45 text-white border-none py-3 px-5 text-base rounded-lg cursor-pointer shadow-lg hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
            onClick={handleGoogleLogin}
          >
            Sign Up/Login
          </button>
        </div>
      </section>

      <div className="w-screen  bg-[#ccd9ec] rounded-xl ">
        <section className="py-10 px-5 mb-10 ml-6 mr-0 rounded-2xl backdrop-blur-sm shadow-sm overflow-hidden">
          <h2
            className="text-4xl font-bold text-indigo-800 mb-5 "
            style={{ fontFamily: "Gloock, serif" }}
          >
            Browse Books
          </h2>
          <button
            className="py-2 px-5 text-indigo-600 border-2 border-indigo-600 rounded bg-transparent cursor-pointer text-sm font-bold transition-all duration-300 mb-8 hover:bg-indigo-600 hover:text-white"
            onClick={handleGoogleLogin}
          >
            Explore More Books
          </button>
          <div className="flex justify-between flex-nowrap gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                className={`relative bg-blue-50 p-5 border-2 border-indigo-800 rounded-lg w-70 h-75 shadow-sm flex flex-col items-start transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:bg-blue-200 ${
                  item > 2 ? "hidden md:flex" : item > 1 ? "hidden sm:flex" : ""
                }`}
                key={item}
                onClick={() => navigate("/home")}
              >
                <h3 className="text-base font-bold text-indigo-700 mb-0 mt-0">
                  Discover Popular Titles
                </h3>
                <p className="text-sm text-indigo-700 flex items-center gap-2 w-3 mt-2 mb-1 font-bold">
                  <img src="/pfp.png" alt="user" width="20" height="20" />
                  {`User ${item}`}
                </p>
                <img
                  src="/white_space.png"
                  alt="book cover"
                  width="230"
                  height="190"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 px-5 bg-opacity-15 mb-10 ml-6 mr-0 rounded-2xl backdrop-blur-sm shadow-sm overflow-hidden">
          <h2 className="text-4xl font-bold text-indigo-800 mb-5 font-serif">
            Browse Notes
          </h2>
          <button
            className="py-2 px-5 text-indigo-600 border-2 border-indigo-600 rounded bg-transparent cursor-pointer text-sm font-bold transition-all duration-300 mb-8 hover:bg-indigo-600 hover:text-white"
            onClick={handleGoogleLogin}
          >
            Explore More Notes
          </button>
          <div className="flex justify-between flex-nowrap gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                className={`relative bg-blue-50 p-5 border-2 border-indigo-800 rounded-lg w-70 h-75 shadow-sm flex flex-col items-start transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:bg-blue-200 ${
                  item > 2 ? "hidden md:flex" : item > 1 ? "hidden sm:flex" : ""
                }`}
                key={item}
              >
                <h3 className="text-base font-bold text-indigo-700 mb-0 mt-0">
                  Study Guides & Summaries
                </h3>
                <p className="text-sm text-indigo-700 flex items-center gap-2 w-3 mt-2 mb-1 font-bold">
                  <img src="/pfp.png" alt="user" width="20" height="20" />
                  Shared by User {item}
                </p>
                <img
                  src="/white_space.png"
                  alt="notes preview"
                  width="230"
                  height="190"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto p-4 sm:p-5 text-center overflow-hidden w-full px-8">
        <h1
          className="text-4xl md:text-5xl sm:text-4xl lg:text-6xl text-[#1C0071] font-medium mb-6 sm:mb-8"
          style={{ fontFamily: "Gloock, serif" }}
        >
          FAQ
        </h1>
        <div className="my-6 sm:my-10">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="mt-12 sm:mt-24 mb-8 sm:mb-16">
          <h1
            className="text-4xl md:text-5xl sm:text-4xl text-[#1C0071] font-medium lg:text-6xl mb-6 sm:mb-8"
            style={{ fontFamily: "Gloock, serif" }}
          >
            About Us
          </h1>
          <p className="text-sm sm:text-base mt-5 text-gray-600 leading-relaxed mb-8 sm:mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
