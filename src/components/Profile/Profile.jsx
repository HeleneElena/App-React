import React from 'react';
import Mypost from './Mypost/Mypost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div> 
            <div className={s.message}>
              <ProfileInfo />
              <Mypost />
            </div>
         </div>
    )
}

export default Profile;