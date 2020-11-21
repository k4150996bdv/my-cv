import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';



const Navbar = () => {

  return (

    <nav className="header-nav" >
      
      <div className={style.nav}><NavLink to="/mainpage" activeClassName={style.active}>Главная страница </NavLink></div>
      <div className={style.nav}><NavLink to="/skills" activeClassName={style.active}>Навыки </NavLink></div>
      <div className={style.nav}><NavLink to="/experience" activeClassName={style.active}>Опыт работы </NavLink></div>
      <div className={style.nav}><NavLink to="/education" activeClassName={style.active}>Образование </NavLink></div>
      <div className={style.nav}><NavLink to="/hobbies" activeClassName={style.active}>Хобби </NavLink></div>
    </nav>

  );

}


export default Navbar;

//<div className={classes.nav}><NavLink to="/profile">Главная страница</NavLink></div>