import React from "react";
import "./BookNotes.css";
import { useNavigate } from "react-router-dom";



const BookNotes = () => {

    let navigateNotes = useNavigate(); 
        const routeNotes = () =>{ 
        let path = `/notes`; 
        navigate(path);
    }

    let navigateBooks = useNavigate(); 
        const routeBooks = () =>{ 
        let path = `/books`; 
        navigate(path);
    }
    return (
        <div className="booknotes">
           
            <section id="browse-books" className="browse-section">
                <h2>Browse Books</h2> 
                <button className="view-more" onClick={routeBooks}>View more</button>
                <div className="card-container">
                  {[1, 2, 3, 4].map((item) => (
                    <div className="card" key={item} onClick={routeBooks}>
                      <h3>Lorem ipsum dolor sit</h3>
                      <p className="User"><img src="/pfp.png" alt="books" width="20" height="20" />User </p>
                      <img src="/white_space.png" alt="books" width="230" height="190" /> 
                    </div>
                  ))}
                </div>
              
                </section>

                <section id="browse-notes" className="browse-section">
                <h2>Browse Notes</h2> 
                <button className="view-more" onSubmit={routeNotes}>View more</button>
                <div className="card-container">
                 {[1, 2, 3, 4].map((item) => (
                    <div className="card" key={item} >
                     <h3>Lorem ipsum dolor sit</h3>
                     <p className="User"> <img src="/pfp.png" alt="books" width="20" height="20" />User </p>
                        <img src="/white_space.png" alt="books" width="230" height="190" />
                   </div>
                 ))}
                </div>
 
            </section>

        </div>
    );
};

export default BookNotes;
