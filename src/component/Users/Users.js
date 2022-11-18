import React from 'react';
import './Users.css'

const Users = (props) => {
    const {name, age, gender, email, income} = props.user;
    
    return (
        <div className='users-container'>
            <h3>Name: {name}</h3>
            <p><small>Age: {age} 
                <br /> Gender: {gender}  
                <br /> Email: {email}</small>
            </p>
            <p>Yearly income: ${income}</p>
            <button  onClick={() => props.handleAddFriends(props.user)}> add friend</button>
        </div>
    );
};

export default Users;