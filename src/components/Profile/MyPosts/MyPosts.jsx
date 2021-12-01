import React from 'react'; 
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
      <div className={classes.postBlock}> 
            <h3> My posts </h3>
            <div>
                <div> 
                    <textarea></textarea>
                </div> 
                <div> 
                    <button>Add Post</button>
                </div> 
                <div> 
                    <button>Remove</button>
                </div> 
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
      </div>
    )
}

export default MyPosts;