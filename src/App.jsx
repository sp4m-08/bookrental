import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./app/LandingPage/LandingPage";
import Homepage from "./app/Homepage/Homepage";
import Upload from "./app/Upload/Upload";
import WishList from "./app/Wishlist/Wishlist";
import Bookdetail from "./app/Bookdetail/Bookdetail";
import Header from "./components/Header";
import UploadHeader from "./components/UploadHeader";
import Profile from "./app/Profile/Profile";
import GlobalStyle from "./GlobalStyle";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {/* Show Header on all pages except '/' */}
      <div className="overflow-x-hidden">
        <GlobalStyle />
        {location.pathname !== "/" && <Header /> &&
          (location.pathname === "/upload" ? <UploadHeader /> : <Header />)}
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
      </div>
    </>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
