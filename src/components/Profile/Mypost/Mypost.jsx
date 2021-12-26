import React from 'react';
import s from './Mypost.module.css';

const Mypost = () => {
    return (
        <div>
                <div className={s.message}>My posts
                  <div className={s.newpost}>your news...</div>
                  <div> 
                      <button className={s.button}>Send</button>
                  </div>
                <div>
                  <div className={s.post}>Post</div>
                  <div className={s.post}>Post</div>
                  <div className={s.post}>Post </div>
                </div>       
                </div>   
        </div>
    )
}

export default Mypost;