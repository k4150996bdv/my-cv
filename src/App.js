import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hobbies from './components/Hobbies/Hobbies';
import MainPage from './components/Content/MainPage';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';


const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Profile />
        <div className="content">
          <Route component={MainPage} path="/mainpage" />
          <Route component={Skills} path="/skills" />
          <Route component={Experience} path="/experience" />
          <Route component={Education} path="/education" />
          <Route component={Hobbies} path="/hobbies" />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
