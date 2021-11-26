import React from 'react'; 
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div> 
        <div> 
            <img src='https://eefreedom.files.wordpress.com/2018/12/cropped-eebeach1280x800.jpg'/>
        </div>
        <div className={classes.descriptionBlock}> 
            avatar + description
        </div>
      </div>
    )
}

export default ProfileInfo;