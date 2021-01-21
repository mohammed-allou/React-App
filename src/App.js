import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './components/Index'
import Contact from './components/Contact/index'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div className="App">
      //     <Nav />
      //     <Route exact path='/' component={Home} />
      //     <Route path='/about' component={About} />

      //   </div>
      // </BrowserRouter>

      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/Contact' component={Contact} />
      </BrowserRouter>

    );
  }

}

export default App;
