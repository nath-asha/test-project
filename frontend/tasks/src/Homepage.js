import React from 'react';

function Homepage() {
  return (
    <section id="homepage" className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search tasks..." />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-lg-right">
          <button className="btn btn-primary">Add Task</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="card">
            <div className="card-header">
              Featured Task
            </div>
            <div className="card-body">
              <h5 className="card-title">Task Title</h5>
              <p className="card-text">Task description goes here.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
