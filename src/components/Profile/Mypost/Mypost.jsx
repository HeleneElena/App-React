import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = (props) => {

    let postData = [
        {id: 1, message: 'Hi, why nobody love me?', likesCount: 12},
        {id: 2, message: 'What is happening in the world today?', likesCount: 85},
        {id: 3, message: 'I study English every day', likesCount: 69}
    ];

    return (
        <div>
                <div className={s.message}>My posts
                  <div className={s.newpost}>your news...</div>
                  <div> 
                      <button className={s.button}>Send</button>
                  </div>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post  message={postData[2].message} likesCount={postData[2].likesCount} />
                </div>   
        </div>
    )
}

export default Mypost;