import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Signup/Navbar';
import Signup from './components/Signup/Signup';
import LandingPage from './components/LandingPage/LandingPage';
import BookNotes from './components/LandingPage/BookNotes';

const AppRoutes=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<div>
                    <LandingPage/>
                    <BookNotes/>
                </div>}/>
                    
                
                <Route path ='/login' element={<div>
                    <Navbar/>
                    <Signup/>
                    
                </div>}/>

                <Route path ='/signup' element={<div>
                    <Navbar/>
                    <Signup/>
                    
                </div>}/>
                
            </Routes>
        </Router>
    );
}

export default AppRoutes;