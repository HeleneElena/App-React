import React from 'react'; 
import './Profile.css';

const Profile = () => {
    return (
      <div className='content'> 
        <div> 
            <img src='https://eefreedom.files.wordpress.com/2018/12/cropped-eebeach1280x800.jpg'/>
        </div>
        <div> 
            avatar + description
        </div>
        <div> 
            My posts
              <div> 
                New post
              </div>
              <div>
                <div> Post 1</div>
                <div> Post 2</div>
                <div> Post 3</div>
              </div>
        </div>
        <div> </div>
        <div> </div>
      </div>
    )
}

export default Profile();