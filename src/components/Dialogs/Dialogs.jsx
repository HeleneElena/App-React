import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.people}>
                <h2 className={s.title}>DIALOGS</h2>
               <div className={s.name}>
                   <div className={s.circle}></div>
                   <p className={s.vorname}>Artur</p>

                   <div className={s.circle}></div>
                   <p className={s.vorname}>Michi</p> 

                   <div className={s.circle}></div>
                   <p className={s.vorname}>Miroslav</p>
                </div>
            </div>

            <div> 
               <div className={s.dialog}>
                   <div className={s.circle1}>
                       <p className={s.signature}>Artur</p>
                   </div>
                   <div className={s.window}></div>
                </div>

               <div className={s.dialog}>
                   <div className={s.circle1}>
                       <p className={s.signature}>Michi</p>
                   </div>
                   <div className={s.window}></div>
                </div>

               <div className={s.dialog}>
                   <div className={s.circle1}>
                       <p className={s.signature}>Miroslaw</p>
                   </div>
                   <div className={s.window}></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;