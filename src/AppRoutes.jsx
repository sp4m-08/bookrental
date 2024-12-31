import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';

const AppRoutes=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                    
                
                <Route path = '/Signup' element={<div>
                    <Navbar/>
                    <Signup/>
                </div>}/>
                
            </Routes>
        </Router>
    );
}

export default AppRoutes;