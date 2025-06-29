import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Bell } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between sticky top-0 px-4 md:px-8 py-4 w-full h-19 backdrop-blur-sm bg-blue-100 bg-opacity-15 rounded-xl min-w-full md:min-w-max box-border z-50 mt-4 shadow-lg animate-[slide-down_2s_ease-in-out]">
        {/* Logo Container */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r  flex items-center justify-center relative">
            <img src="logo.png" alt="logo" className="size-8 md:size-12" />
          </div>
          <span
            className="text-gray-600 text-2xl font-black tracking-wider"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            Booklease
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-14 items-center">
          <span
            className="text-black text-sm font-normal cursor-pointer hover:text-indigo-800 transition-colors duration-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => navigate("/home")}
          >
            Home
          </span>
          <span
            className="text-black text-sm font-normal cursor-pointer hover:text-indigo-800 transition-colors duration-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => navigate("/profile")}
          >
            Profile
          </span>
          <span
            className="text-black text-sm font-normal cursor-pointer hover:text-indigo-800 transition-colors duration-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => navigate("/wishlist")}
          >
            Wishlist
          </span>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Notification Container */}
          <div
            className="relative z-50"
            onMouseEnter={() => setShowNotifications(true)}
            onMouseLeave={() => setShowNotifications(false)}
          >
            <Bell className="w-8 h-8 cursor-pointer text-gray-600 hover:text-indigo-800 transition-colors duration-200" />

            {showNotifications && (
              <div className="absolute top-10 right-0 w-auto min-h-72 bg-blue-50 shadow-lg rounded-xl p-4 z-50 border border-gray-200">
                <div className="border-b  w-240 pb-3  mb-3 bg-white border-2 border-indigo-800 rounded-lg p-3">
                  <p className="font-bold  text-sm mb-2">
                    Lorem ipsum dolor sit
                  </p>
                  <span className="text-xs text-gray-600 block mb-2">
                    John Doe has requested your material
                  </span>
                  <div className="flex justify-between gap-2">
                    <button className="px-3 py-1 bg-gray-300 text-black rounded text-xs cursor-pointer">
                      Reject
                    </button>
                    <button className="px-3 py-1 bg-indigo-800 text-white rounded text-xs cursor-pointer">
                      Accept
                    </button>
                  </div>
                </div>
                <div className="border-b border-gray-300 pb-3 mb-3 bg-white border-2 border-indigo-800 rounded-lg p-3">
                  <p className="font-bold text-gray-600 text-sm mb-2">
                    Lorem ipsum dolor sit
                  </p>
                  <span className="text-xs text-gray-600 block mb-2">
                    John Doe has requested your material
                  </span>
                  <div className="flex justify-between gap-2">
                    <button className="px-3 py-1 bg-gray-300 text-black rounded text-xs cursor-pointer">
                      Reject
                    </button>
                    <button className="px-3 py-1 bg-indigo-800 text-white rounded text-xs cursor-pointer">
                      Accept
                    </button>
                  </div>
                </div>
                <div className="bg-white border-2 border-indigo-800 rounded-lg p-3">
                  <p className="text-sm mb-2">
                    You can now access{" "}
                    <span className="font-bold">Lorem ipsum dolor sit</span>
                  </p>
                  <span className="text-xs text-gray-600">John Doe</span> |{" "}
                  <span className="text-xs text-gray-600">
                    Phone Number: XXXXXXXXXX
                  </span>
                  <div className="mt-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-xs">
                      Please check the box if you have received it
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            className="w-41 h-10 border border-indigo-800 rounded bg-transparent text-indigo-800 text-sm font-normal cursor-pointer flex items-center justify-center transition-all duration-300 px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => navigate("/upload")}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#1C0071";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1C0071";
            }}
          >
            Upload Material
          </button>
        </div>

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
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img src="logo.png" alt="logo" className="size-8 md:size-12" />
            </div>
            <span
              className="text-gray-600 text-xl font-black tracking-wider"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
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
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => {
              navigate("/home");
              setMobileMenuOpen(false);
            }}
          >
            Home
          </span>
          <span
            className="text-gray-800 text-lg font-medium cursor-pointer py-2 border-b border-gray-100 hover:text-indigo-800 transition-colors duration-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => {
              navigate("/profile");
              setMobileMenuOpen(false);
            }}
          >
            Profile
          </span>
          <span
            className="text-gray-800 text-lg font-medium cursor-pointer py-2 border-b border-gray-100 hover:text-indigo-800 transition-colors duration-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => {
              navigate("/wishlist");
              setMobileMenuOpen(false);
            }}
          >
            Wishlist
          </span>

          {/* Mobile Notifications Section */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                Notifications
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 border-2 border-indigo-800 rounded-lg p-3">
                <p className="font-bold text-sm text-gray-600 mb-2">
                  Lorem ipsum dolor sit
                </p>
                <span className="text-xs text-gray-600 block mb-2">
                  John Doe has requested your material
                </span>
                <div className="flex justify-between gap-2">
                  <button className="px-3 py-1 bg-gray-300 text-black rounded text-xs">
                    Reject
                  </button>
                  <button className="px-3 py-1 bg-indigo-800 text-white rounded text-xs">
                    Accept
                  </button>
                </div>
              </div>
              <div className="bg-blue-50 border-2 border-indigo-800 rounded-lg p-3">
                <p className="font-bold text-sm text-gray-600 mb-2">
                  Lorem ipsum dolor sit
                </p>
                <span className="text-xs text-gray-600 block mb-2">
                  John Doe has requested your material
                </span>
                <div className="flex justify-between gap-2">
                  <button className="px-3 py-1 bg-gray-300 text-black rounded text-xs">
                    Reject
                  </button>
                  <button className="px-3 py-1 bg-indigo-800 text-white rounded text-xs">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Upload Button */}
          <button
            className="w-full h-12 border border-indigo-800 rounded bg-transparent text-indigo-800 text-lg font-medium cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-indigo-800 hover:text-white mt-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => {
              navigate("/upload");
              setMobileMenuOpen(false);
            }}
          >
            Upload Material
          </button>
        </nav>
      </div>

      {/* Add slide-down animation to global styles or Tailwind config */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
