import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {
    const { title, first, last } = props.user.name
    const { email, phone } = props.user
    const { large } = props.user.picture
    const { handleAddUser } = props
    return (
        <div className="userContainer">
            <div className="userImg">
                <img src={large} alt="" />
            </div>
            <div className="userDetails">
                <h2>{title} {first} {last}</h2>
                <div className="email">
                    <FontAwesomeIcon className="smallIcon" icon={faEnvelope} />
                    <p>{email}</p>
                </div>
                <div className="phone">
                    <FontAwesomeIcon className="smallIcon" icon={faPhoneAlt} />
                    <p>{phone}</p>
                </div>
                <FontAwesomeIcon onClick={() => handleAddUser(props.user)} className="icon" icon={faPlusCircle} />
            </div>
        </div>
    );
};

export default User;
