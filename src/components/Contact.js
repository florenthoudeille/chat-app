import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
    <div className="Contact">
        <img src={props.avatar} alt={props.name} className="avatar" />
        <div>
            <h3 className="name">{props.name}</h3>
            <div className="status">
                <img className={props.online ? 'status-online' : 'status-offline'} alt="" />
                <p className='status-text'>{props.online ? 'online' : 'offline'}</p>
            </div>
        </div>
    </div>
    );
};



export default Contact;