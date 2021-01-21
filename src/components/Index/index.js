import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './../Profile'
import Home from './../Home'
import About from './../About'
import Footer from './../Footer'
// import Navbar from './../Navbar'
import Portfolio from './../Portfolio'
import SocialMedia from './../SocialMedia'
import Work from './../Work'



class Index extends Component {
    render() {
        return (
            // <BrowserRouter>
            //   <div className="App">
            //     <Nav />
            //     <Route exact path='/' component={Home} />
            //     <Route path='/about' component={About} />

            //   </div>
            // </BrowserRouter>

            <div>
                {/* <Navbar /> */}
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <SocialMedia />
                <Footer />

            </div>

        );
    }

}

export default Index;
