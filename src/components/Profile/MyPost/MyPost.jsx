import React from 'react';
import s from './MyPost.module.css';


const MyPost = () => {
    return (
        <div> 
            <div className={s.mypost}> MyPost </div>
                <div className={s.news}>your news...</div>
                <div className={s.bottom}>
                    <bottom> Send </bottom>
                </div>

                <div className={s.newpost}>NewPost</div>

            <div className={s.post}>
                Post1 
            </div>

        </div>
    )
}

export default MyPost;