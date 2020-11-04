import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home.js';
import Pedro from '../pages/Pedro.js';
import ErrorPage from '../pages/Error.js';
import ListStudents from '../pages/student/list';
import ShowStudent from '../pages/student/show';

// UI components
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/students/:id" component={ShowStudent} />
          <Route path="/students" component={ListStudents} />
          <Route path="/pedro" component={Pedro} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
