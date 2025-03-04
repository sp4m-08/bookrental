import React from "react";
import "./BookNotes.css";
import { useNavigate } from "react-router-dom";



const BookNotes = () => {

    let navigate = useNavigate(); 
        
    return (
        <div className="booknotes">
           
            <section id="browse-books" className="browse-section">
                <h2>Browse Books</h2> 
                <button className="view-more" onClick={()=>navigate('/home')}>View more</button>
                <div className="card-container">
            {[1, 2, 3, 4].map((item) => (
                    
                    <div className="card" key={item} onClick={()=>navigate('/home')}>
                      <h3>Lorem ipsum dolor sit</h3>
                      <p className="User"><img src="/pfp.png" alt="books" width="20" height="20" />User </p>
                      <img src="/white_space.png" alt="books" width="230" height="190" /> 
                    </div>

                  ))}
                </div>
              
                </section>

                <section id="browse-notes" className="browse-section">
                <h2>Browse Notes</h2> 
                <button className="view-more" onSubmit={()=>navigate('/home')}>View more</button>
                <div className="card-container" >
                 {[1, 2, 3, 4].map((item) => (
                    <div className="card" key={item} >
                     <h3>Lorem ipsum dolor sit</h3>
                     <p className="User"> <img src="/pfp.png" alt="books" width="20" height="20" />User </p>
                        <img src="/white_space.png" className="books" width="230" height="190" />
                   </div>
                 ))}
                </div>
 
            </section>

        </div>
    );
};

export default BookNotes;
