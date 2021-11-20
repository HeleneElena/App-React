import React from 'react'; 
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className={classes.content}> 
        <div> 
            <img src='https://eefreedom.files.wordpress.com/2018/12/cropped-eebeach1280x800.jpg'/>
        </div>
        <div> 
            avatar + description
        </div>
      <MyPosts />
      </div>
    )
}

export default Profile;