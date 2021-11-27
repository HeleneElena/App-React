import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
            <div className={classes.dialog + '' + classes.active}>
                <NavLink to={path}>
                    {props.name} 
                </NavLink>
            </div>
    )
}

const Message = (props) => {
     return (
         <div className={classes.message}>{props.message}</div>
     )
}

const Dialogs = (props) => {
    let dialogs = [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Micha'},
            {id: 3, name: 'Miroslav'},
            {id: 4, name: 'Artur'},
            {id: 5, name: 'Helene'}
    ]

    let messages = [
            {id: 1, message: 'Hey!'},
            {id: 2, message: 'Yo!'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Hello'}
    ]

    let dialogsElements = dialogs.map( d => <DialogsItem name={d.name} id={d.id} />)
    
    let messageElements = messages.map(m => <Message message={m.message} />)

    return (
            <div className={classes.dialogs}>  
                <div className={classes.dialogsItems}>
                    { dialogsElements } 
                </div> 
                <div className={classes.messages}> 
                   { messageElements }   
                </div>        
            </div>
    );
};


export default Dialogs;