import React from 'react';
import './Carts.css'

const Carts = (props) => {

    const friendSet= props.friends;

    // let totalIncome= 0;
    // for (let index = 0; index < friendSet.length; index++) {
    //     const element = friendSet[index];
    //     const grandIncome= totalIncome + element.income
    //     totalIncome= grandIncome
        
    // }

    const totalIncome= friendSet.reduce((income, friend) => income + friend.income,0)

    return (
        <div className='cart'>
            <h2 className='cart-header'>Friends List</h2>
            <div className='cart-body'>
                <p style={{lineHeight:'1.5'}}>
                    Total Friends: {friendSet.length} 
                    <br />
                    Total Income: ${totalIncome}
                </p>
                <ul>
                    {
                        friendSet.map(friend => <li>{friend.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Carts;