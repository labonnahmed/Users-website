import { useEffect, useState } from 'react';
import './App.css';
import Carts from './component/Carts/Carts';
import Users from './component/Users/Users';
import fakeData from './fakeData/data';

function App() {
  const [users, setUsers] = useState([]);
  useEffect (() => setUsers(fakeData), []);
  const [friends, setFriends]= useState([]);

  const handleAddFriends= (friend) => {
    setFriends([...friends, friend])
  }
  
  return (
    <div className='main-container'>
      <div className='user-container'>
          {
            users.map( user => <Users 
              user={user} key={user._id}  
              handleAddFriends={handleAddFriends}
              >
              </Users>)
          }
      </div>
      <div className='cart-container'>
          <Carts friends={friends}></Carts>
      </div>
    </div>
  );
}

export default App;
