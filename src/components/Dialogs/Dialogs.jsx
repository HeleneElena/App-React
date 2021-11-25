import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>  

                <div className={classes.dialog + '' + classes.active}>
                    <NavLink to="/dialogs/1">
                        Dima 
                    </NavLink>
                </div>
                <div className={classes.dialog}> 
                    <NavLink to="/dialogs/1">                
                        Micha 
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">                
                        Miroslav  
                    </NavLink>                    
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">                
                        Artur   
                    </NavLink> 
                    </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">                
                        Alex 
                    </NavLink> 
                    </div> 
            </div> 
            <div className={classes.messages}> 
                <div className={classes.message}>Hey</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Hi</div>           
            </div>        
        </div>
    );
};


export default Dialogs;