import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Signup/Navbar';
import Signup from './components/Signup/Signup';
import LandingPage from './components/LandingPage/LandingPage';
import BookNotes from './components/LandingPage/BookNotes';
import Faq from './components/LandingPage/Faq';
import Homepage from './components/Homepage/Homepage';
import Upload from './components/Upload/Upload';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<div>
                    <LandingPage />
                    <BookNotes />
                    <Faq/>

                    
                    
                </div>} />


                <Route path='/login' element={<div>
                    <Navbar />
                    <Signup />

                </div>} />

                <Route path='/signup' element={<div>
                    <Navbar />
                    <Signup />

                </div>} />

                <Route path='/home' element={<div>
                    <Homepage/>

                </div>} />

                <Route path='/upload' element={<div>
                    <Upload/>

                </div>} />

            </Routes>
        </Router>
    );
}

export default App;