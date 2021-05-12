import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';



const Navbar = () => {

  return (

    <nav className="nav-wrapper" >
      <div className={style.nav_container}>
        <div className={style.nav}><NavLink to="/mainpage" activeClassName={style.active}>Головна сторінка</NavLink></div>
        <div className={style.nav}><NavLink to="/skills" activeClassName={style.active}>Навички</NavLink></div>
        <div className={style.nav}><NavLink to="/experience" activeClassName={style.active}>Досвід роботи</NavLink></div>
        <div className={style.nav}><NavLink to="/education" activeClassName={style.active}>Освіта</NavLink></div>
        <div className={style.nav}><NavLink to="/hobbies" activeClassName={style.active}>Хоббі</NavLink></div>
      </div>
    </nav>

  );

}


export default Navbar;

//<div className={classes.nav}><NavLink to="/profile">Главная страница</NavLink></div>