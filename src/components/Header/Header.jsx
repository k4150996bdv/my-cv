import { NavLink } from 'react-router-dom';
import './Header.module.css';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className="header">
      <p><NavLink to="/mainpage"> <span>Бабиeнко Дмитрий </span></NavLink> </p>
      <p><NavLink to="/mainpage"> <span className={style.profession}>Junior React developer </span> </NavLink> </p>
    </header>
  )
}

export default Header;