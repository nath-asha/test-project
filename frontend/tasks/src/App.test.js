import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Your App Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Tasks</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Calendar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Settings</a>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section id="homepage" className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <InputGroup className="mb-3">
              <FormControl placeholder="Search tasks..." />
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="col-lg-6 text-lg-right">
            <Button variant="primary">Add Task</Button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            {/* Task list goes here */}
          </div>
        </div>
      </section>

      <section id="task-details" className="container mt-4">
        {/* Task details content goes here */}
      </section>

      <section id="calendar" className="container mt-4">
        {/* Calendar content goes here */}
      </section>

      <section id="categories" className="container mt-4">
        {/* Categories content goes here */}
      </section>

      <section id="settings" className="container mt-4">
        {/* Settings content goes here */}
      </section>
    </div>
  );
}

export default App;
