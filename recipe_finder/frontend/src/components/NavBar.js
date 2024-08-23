import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const CustomNavbar = ({ currentUser, onToggleForm, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Recipe Finder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {currentUser ? (
              <form onSubmit={onLogout}>
                <Button type="submit" variant="light">Log out</Button>
              </form>
            ) : (
              <Button onClick={onToggleForm} variant="light">
                Register / Log in
              </Button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
