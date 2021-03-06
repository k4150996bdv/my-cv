import React from 'react';
import { HashRouter , Route, Redirect } from 'react-router-dom';
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
    <HashRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Profile />
        <div className="content">
          <Redirect exact from="/" to="/mainpage" />
          <Route component={MainPage} path='/mainpage' />
          <Route component={Skills} path="/skills" />
          <Route component={Experience} path="/experience" />
          <Route component={Education} path="/education" />
          <Route component={Hobbies} path="/hobbies" />
        </div>
        <Footer />
      </div>
    </HashRouter>

  );
}
export default App;