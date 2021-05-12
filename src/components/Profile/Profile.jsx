import React from 'react';
import myPhoto from '../images/me.jpg';
import style from './Profile.module.css';


const Profile = () => {
    return (
        <div className="profile">
            <div>
                <img src={myPhoto} alt="my photo"/>
            </div>
            <div className="contacts">
                <p className={style.contacts}>Контакти:</p>
                <p className={style.contacts}>телефон: +38(095)537-91-73</p>
                <p className={style.contacts}>email: babienko.dima@gmail.com</p>
                            </div>
        </div>
    )
}

export default Profile;