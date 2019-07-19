import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import FormNote from './components/FormNote';
import FormUser from './components/FormUser';

function App() {
  return (    
    <Router>
      <div>
        <Navigation />
        <div className="container p-4">
          <Route exact path="/" component={NotesList} />
          <Route path="/edit/:id" component={FormNote} />
          <Route path="/create" component={FormNote} />
          <Route path="/user" component={FormUser} />
        </div>        
      </div>
    </Router>
  );
}

export default App;
