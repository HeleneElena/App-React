import React from 'react'; 
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://w7.pngwing.com/pngs/324/209/png-transparent-letters-abc-education-gold-golden-gloss-alphabet-literacy-illiterate-illiteracy.png'/>
      </header>  
      <nav className='nav'> 
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

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
    </div>

  );
}



export default App;
