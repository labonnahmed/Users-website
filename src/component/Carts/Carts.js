import React, { useState } from 'react';
import './Carts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserXmark} from '@fortawesome/free-solid-svg-icons'

const Carts = (props) => {
    const friends= props.friends;

    const totalFollowers= friends.reduce((follower, friend) => follower + friend.followers,0)
    
    return (
        <div className='cart'>
            <h2 className='cart-header'>Friends List</h2>
            <div className='cart-body'>
                <p style={{lineHeight:'1.5'}}>
                    <span>Total Friends: {friends.length}</span> 
                    <br />
                    <span>Total followers: {totalFollowers}</span>
                    <ul>
                        {
                           friends.map(friend => <li>
                            Name: {friend.name} <FontAwesomeIcon icon={faUserXmark}></FontAwesomeIcon>
                            <br />
                            Followers: {friend.followers}
                           </li>)
                        }
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Carts;