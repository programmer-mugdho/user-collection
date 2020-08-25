import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([])
  const [addedUsers, setAddedUsers] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
      })
  }, [])
  const handleAddUser = (user) => {
    const newUsers = [...addedUsers, user]
    setAddedUsers(newUsers)
  }
  
  let totalIncome = 0;
  for (let i = 0; i < addedUsers.length; i++) {
    const user = addedUsers[i];
    totalIncome += user.location.postcode;
  }

  return (
    <>
      <div className="App">
        <h1 style={{ fontSize: "50px", textTransform: "uppercase", textAlign: "center" }}>User Collection</h1>
        <h2 style={{ textAlign: 'center' }}>Total Added: {addedUsers.length}</h2>
        <h2 style={{ textAlign: 'center' }}>Total Salary: {totalIncome}</h2>
        {
          users.map((user => <User user={user} handleAddUser={handleAddUser} key={user.login.uuid} />))
        }
      </div>
    </>
  );
}

export default App;
