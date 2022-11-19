import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
    const {name, age, gender, email, followers, img} = props.user;
    
    return (
        <div className='users-container'>
            <div className='profile-section'>
                <img src={img} alt="" />
                <div>
                    <h3>Name: {name}</h3>
                    <p><small>Age: {age} 
                        <br /> Gender: {gender}  
                        <br /> Email: {email}</small>
                    </p>
                </div>
            </div>
            <p><span style={{fontWeight:'600'}}>Instagram followers:</span> {followers}K</p>
            <button  onClick={() => props.handleAddFriends(props.user)}> <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> friend</button>
        </div>
    );
};

export default Users;