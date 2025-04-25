import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import JobList from './components/JobList';
import JobCard from './components/JobCard';
import ApplicationForm from './components/ApplicationForm';
import Header from './components/Header'; // Add Header to be used in routes
import Footer from './components/Footer'; // Add Footer to be used in routes

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation should be visible on all pages */}
        <Navigation />

        {/* Define routes */}
        <Switch>
          {/* Home route (e.g. landing page) */}
          <Route exact path="/">
            <Header />
            <h2>Welcome to Youthjob Connect</h2>
            <p>Join us to make your dreams come true.</p>
          </Route>

          {/* Jobs page */}
          <Route path="/jobs">
            <JobList />
          </Route>

          {/* Login page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Application Form page */}
          <Route path="/application-form">
            <ApplicationForm />
          </Route>

          {/* Job Card page (if you want to show a specific job in detail) */}
          <Route path="/job/:id">
            <JobCard />
          </Route>

          {/* Default catch-all route */}
          <Route path="*">
            <h2>Page Not Found</h2>
          </Route>
        </Switch>

        {/* Footer should be visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
