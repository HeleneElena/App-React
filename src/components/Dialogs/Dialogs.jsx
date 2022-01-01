import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Person from './Person/Person';
import Message from './Message/Message';


const Dialogs = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.people}>
                <h2 className={s.title}>DIALOGS</h2>
                   <DialogItem name='Artur' id='1'/>
                   <DialogItem name='Michi' id='2'/>
                   <DialogItem name='Miroslav' id='3'/>
                   <DialogItem name='Helene' id='4'/>
            </div>

            <div> 
                 <div className={s.person}>
                    <Person name='Michi'/>
                    <Message message='Hi, Artur! Wie geht es dir?'/>
                </div>

               <div className={s.person}>
                    <Person name='Miroslav'/>
                    <Message message='Hello, my friend!!!'/>
                </div>

               <div className={s.person}>
                    <Person name='Artur'/>
                    <Message message='Yo, frends!)))'/>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;