import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import BookNotes from './components/LandingPage/BookNotes';
import Faq from './components/LandingPage/Faq';
import Homepage from './components/Homepage/Homepage';
import Upload from './components/Upload/Upload';
import WishList from './components/Wishlist/Wishlist';
import Bookdetail from './components/Bookdetail/Bookdetail';
import Header from './components/Homepage/Header';

function App() {
    return (
        <div>
            {/* <div className='navbar'>
                <Header/>
            </div> */}
            
        
        <Router>
            <Routes>
                <Route path='/' element={<div>
                    <LandingPage />
                    <BookNotes />
                    <Faq/>

                    
                    
                </div>} />


                

                <Route path='/home' element={<div>
                    <Homepage/>

                </div>} />

                <Route path='/upload' element={<div>
                    <Upload/>

                </div>} />

                <Route path='/wishlist' element={<div>
                    <WishList/>

                </div>} />

                <Route path='/book/:id' element={<div>
                    <Bookdetail/>

                </div>} />

            </Routes>
            </Router>
            </div>
    );
}

export default App;