import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {


    const data = [
            { borrower: "John Doe", status: "Due Soon", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Ongoing", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Ongoing", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Ongoing", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "----", status: "Available", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "----", status: "Available", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
            { borrower: "John Doe", status: "Completed", title: "Bold text column", validTill: "Regular text column" },
        ];




    const [selectMenu, setSelectMenu] = useState("profile");



    function ProfileInformation() {
        console.log("profile rendered!")
        const [fullName, setFullName] = useState("John Doe");
        const [email, setEmail] = useState("john.doe2023@vitstudent.ac.in");
        const [phone, setPhone] = useState("XXXXXXXXXX");

        const [isEditing, setIsEditing] = useState({
            fullName: false,
            phone: false,
        });

        // function to handle edit icon click
        const toggleEdit = (field) => {
            setIsEditing((prev) => ({
                ...prev,
                [field]: !prev[field], // toggle edit mode for the specific field
            }));
        };
        
        const [selectedImage, setSelectedImage] = useState(""); 
    //Image Upload
        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
                const imageURL = URL.createObjectURL(file);
                setSelectedImage(imageURL);
            } else {
                alert("Please select a valid PNG or JPG image.");
            }
        };


        return (
                <div className="profile-content">
                    {/* details */}
                    <div className="profile-details">
                        <h2 className="profile-heading">General Details</h2>

                        {/* Full Name */}
                        <div className="input-group">
                            <label>Full Name</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    readOnly={!isEditing.fullName}
                                />
                                <img
                                    src={isEditing.fullName ? "confirm.png" : "edit.png"}
                                    alt={isEditing.fullName ? "Confirm" : "Edit"}
                                    className="edit-icon"
                                    onClick={() => toggleEdit("fullName")}
                                />
                            </div>
                        </div>

                        {/* mail */}
                        <div className="input-group">
                            <label>Email Address</label>
                            <div className="input-container">
                                <input type="email" value={email} readOnly />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="input-group">
                            <label>Phone Number</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    readOnly={!isEditing.phone}
                                />
                                <img
                                    src={isEditing.fullName ? "confirm.png" : "edit.png"}
                                    alt={isEditing.fullName ? "Confirm" : "Edit"}
                                    className="edit-icon"
                                    onClick={() => toggleEdit("phone")}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Profile Picture */}
                     <div className="profile-picture-section">
            
                        <img
                            src={selectedImage || "pfp.png"} 
                            alt="Profile"
                            className="profile-picture"
                        />
                        <p className="edit-text">Edit Profile Picture</p>

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleImageUpload}
                            id="fileInput"
                            style={{ display: "none" }}
                        />

                        {/* Buttons */}
                        <div className="profile-buttons">
                            <button className="delete-btn" onClick={() => setSelectedImage("")}>
                                Delete
                            </button>
                            <button className="update-btn" onClick={() => document.getElementById("fileInput").click()}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
        )
    }

    function LentMaterialHistory() {
        
        return (
            <div className="lent-content">
                <h2 className="lent-heading">Lent Material History</h2>
                <div className="table-container">
                    <table className="lent-table">
                        <thead>
                            <tr>
                                <th>Borrower</th>
                                <th>Status</th>
                                <th>Title</th>
                                <th>Valid Till</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="borrower-info">
                                            <img src="pfp.png" alt="User" className="user-icon" />
                                            {item.borrower}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${item.status.toLowerCase().replace(" ", "-")}`}>
                                             {item.status}
                                        </span>
                                    </td>
                                    <td><b>{item.title}</b></td>
                                    <td>{item.validTill}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    function BorrowedMaterialHistory() {
        return (
            <div className="lent-content">
                <h2 className="lent-heading">Borrowed Material History</h2>
                <div className="table-container">
                    <table className="lent-table">
                        <thead>
                            <tr>
                                <th>Lender</th>
                                <th>Status</th>
                                <th>Title</th>
                                <th>Valid Till</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="borrower-info">
                                            <img src="pfp.png" alt="User" className="user-icon" />
                                            {item.borrower}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${item.status.toLowerCase().replace(" ", "-")}`}>
                                            ● {item.status}
                                        </span>
                                    </td>
                                    <td><b>{item.title}</b></td>
                                    <td>{item.validTill}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    
    return (
        <div className='profile-container'>
            {/* left container for all actions */}
            <div className="profile-settings">
                <div className="setting-item">
                   <img src="pfp.png" className='user-img'/><div className="user-item">
                        <p><b>Hello</b></p>
                        <span>John Doe</span>
                    </div>

                </div>

                <div className="setting-item">
                    <div className="account-settings">
                        <span className='account-setting'><img src="account.png"/>Account Settings</span>
                        <span className='account-item' onClick={()=>setSelectMenu("profile")}>Profile Information</span>
                        <span className='account-item' onClick={()=>setSelectMenu("lent")}>Lent Material History</span>
                        <span className="account-item" onClick={()=>setSelectMenu("borrowed")}>Borrowed Material History</span>
                    </div>
                </div>

                <div className="setting-item">
                    <div className="logout">
                        <img src="logout.png"/><span className='logout-text'>Logout</span>
                    </div>
                    

                </div>

            </div>
            {/* right side container */}
            <div className="right-container">
                {selectMenu === "profile" && <ProfileInformation />}
                {selectMenu === "lent" && <LentMaterialHistory />}
                {selectMenu === "borrowed" && <BorrowedMaterialHistory />}
             
            </div>
        </div>
    )
}

export default Profile
