import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { isAuthorized as checkAuth, unAuthorize } from "./utils/authorization";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Login from './components/Login';
import Home from "./components/Home";

const App = () => {

  const [isAuthorized, setIsAuthorized] = useState(checkAuth());

  function CheckForAuth({ children }) {
    return isAuthorized ?
      children :
      <Navigate to="/login" replace />
  }

  function onLogout(event) {
    event.stopPropagation(); 
    setIsAuthorized(false);
    unAuthorize();
  }

  return (
    <main>
      <Router>
        <nav className="navbar-collapse">
          <ul>
            <li className="nav-item">
              <Link to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/friends/first">
                Friends
              </Link>
            </li>
            <li className="nav-item navbar-nav ms-auto" style={{ marginRight: "30px" }}>
              {!isAuthorized ?
                <Link to="/login">Login</Link> :
                <Link to="/home" onClick={onLogout}>Logout</Link>
              }
            </li>
          </ul>
        </nav>
        <section className="container-sm">
          <Routes>
            <Route path="/profile" element={
              <CheckForAuth>
                <Profile />
                <h1>Hello!</h1>
              </CheckForAuth>
            } />
            <Route path="/home" element={<Home />} />
            <Route path="/friends/:friend" element={
              <CheckForAuth>
                <Friends />
              </CheckForAuth>
            } />
            <Route path="/login" element={<Login onAuthorize={setIsAuthorized}/>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </section>
      </Router>
    </main>
  )
}

export default App;




