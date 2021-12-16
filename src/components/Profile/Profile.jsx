import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';



const Profile = () => {
    return (
        <div className={s.appWrapperConntent}>
            <div className={s.banner}>Banner</div>
            <div className={s.profileBanner}> 
                <div className={s.ava}>Foto</div>
                <div className={s.discription}>
                    <div className={s.name}> Helene E. </div>
                    <div className={s.data}> City:</div>
                    <div className={s.data}> Date of Birth: </div>
                    <div className={s.data}> Education: </div>
                    <div className={s.data}> Contacts: </div>
                </div>
            </div>
        <MyPost />
        </div>
    )
}

export default Profile;