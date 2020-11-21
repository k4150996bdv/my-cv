import React from 'react'
import style from './Footer.module.css';


const Footer = () => {
    return (
        <footer>
            <div className={`${style.social} ${style.instagram}`}>
                <a href="https://www.instagram.com/yatvoidimka/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
            </div>
            <div className= {`${style.social} ${style.facebook}`}>
    <a href="https://www.facebook.com/dima.horosh" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>    
</div>
        </footer>
    )
}

export default Footer;