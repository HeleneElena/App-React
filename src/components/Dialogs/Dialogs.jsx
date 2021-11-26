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
    return (
            <div className={classes.dialogsItems}>  
                <div className={classes.dialogs}>
                    <DialogsItem name="Dima" id="1" />
                    <DialogsItem name="Micha" id="2" />
                    <DialogsItem name="Miroslav" id="3" />
                    <DialogsItem name="Artur" id="4" />
                    <DialogsItem name="Helene" id="5" />

            </div> 
            <div className={classes.messages}> 
                <Message message="Hey!"/>
                <Message message="How are you?"/>
                <Message message="Hello"/>
                <Message message="Yo!"/>        
            </div>        
        </div>
    );
};


export default Dialogs;