import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Person from './Person/Person';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Michi'},
    {id: 3, name: 'Miroslav'},
    {id: 4, name: 'Helene'},
    {id: 5, name: 'Boss'}
    ];

    let dialogsElements = dialogs
        .map( d => <DialogItem name={d.name} id={d.id} /> );

    let messages = [
    {id: 1, message: 'Yo, frends!)))'},
    {id: 2, message: 'Hi, Artur! Wie geht es dir?'},
    {id: 3, message: 'Hello, my friend!!!'},
    {id: 4, message: 'Hi!'},
    {id: 5, message: 'Hello, zusammen'}        
    ];


    let messagesElements = messages.map( m => <Message message={m.message} /> );
    let personsElements = dialogs.map( d =>  <Person name={d.name} /> );

    return (
        <div className={s.wrapper}>
            <div className={s.people}>
                <h2 className={s.title}>DIALOGS </h2>
                { dialogsElements }
            </div>
            <div> 
            <div className={s.communication}> 
                  { personsElements }
            </div>
                    { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;