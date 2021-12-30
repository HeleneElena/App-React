import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = (props) => {
    return (
        <div>
                <div className={s.message}>My posts
                  <div className={s.newpost}>your news...</div>
                  <div> 
                      <button className={s.button}>Send</button>
                  </div>
                <Post message='Hi, why nobody love me?'/>
                <Post message='What is happening in the world today?'/>
                <Post  message='I study English every day'/>
                </div>   
        </div>
    )
}

export default Mypost;