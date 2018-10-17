import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './include/Header';
import Nav from './include/Nav';
import Footer from './include/Footer';
import Home from './pages/Home';

const Sample = () => {
  return (
    <div>Hi</div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <BrowserRouter >
          <div className="page-content">
            <Nav />
            <Route path="/" component={Home} exact />
            <Route path="/sample" component={Sample} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
