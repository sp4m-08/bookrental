import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Homepage from './components/Homepage/Homepage';
import Upload from './components/Upload/Upload';
import WishList from './components/Wishlist/Wishlist';
import Bookdetail from './components/Bookdetail/Bookdetail';
import Header from './Header';
import UploadHeader from './UploadHeader';
import Profile from './components/Profile/Profile';
import GlobalStyle from './GlobalStyle';

const Layout = () => {
    const location = useLocation();
    
    return (
        <>
            {/* Show Header on all pages except '/' */}
            <GlobalStyle/>
            {location.pathname !== '/' && <Header/>  && (location.pathname === '/upload' ? <UploadHeader /> : <Header/>)}
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <>
                            <LandingPage />
                            
                        </>
                    } 
                />
                <Route path="/home" element={<Homepage />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/book/:id" element={<Bookdetail />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
};

function App() {
    return (
        
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
