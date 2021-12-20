import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div> 

            <div className={s.message}>
                <div className={s.banner}>Banner </div>
              <div>
                <div className={s.foto}>Foto</div>
                <div className={s.name}>Vorname</div>
                <div className={s.datei}>personliche Datei </div>
              </div>
              <div className={s.message}>My posts
                <div className={s.newpost}>your news...</div>
              <div>
                <div className={s.post}>Post</div>
                <div className={s.post}>Post</div>
                <div className={s.post}>Post </div>
            </div>       
            </div>   
        </div>
         </div>
    )
}

export default Profile;