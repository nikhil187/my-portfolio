import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ProfilePage.css';
import './styles/ClassmatesList.css';
import ProfilePage from './components/ProfilePage';
import ClassmatesList from './components/ClassmatesList';
import { Navbar, Nav, Container } from 'react-bootstrap';


// Main App component that sets up routing and navigation
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">My Profile</Nav.Link>
                <Nav.Link as={Link} to="/classmates">My Classmates</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/classmates" element={<ClassmatesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporting the App component for use in other files