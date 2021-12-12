import React from 'react';
import MyPost from './MyPost';
import './Profile.css';

const Profile = () => {
    return (
        <div className='app-wrapper-content'>
            <div className='banner'>Banner</div>
            <div className='profile-banner'> 
                <div className='ava'>Foto</div>
                <div className='discription'>
                    <div className='name'> Helene E. </div>
                    <div className='data'> City:</div>
                    <div className='data'> Date of Birth: </div>
                    <div className='data'> Education: </div>
                    <div className='data'> Contacts: </div>
                </div>
            </div>
        <MyPost />
        </div>
    )
}

export default Profile;