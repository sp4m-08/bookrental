import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import BookNotes from './components/BookNotes';

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