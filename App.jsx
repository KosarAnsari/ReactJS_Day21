import { useState } from 'react';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';

function App() {
  const [info, setinfo] = useState({
    name: 'Anil',
    address: {
      city: 'Delhi',
      country: 'India',
    },
  });
  const handleName = (val) => {
    let tempinfo = info;
    tempinfo.name = val;

    setinfo({ ...tempinfo });
  };

  const [data, setdata] = useState('');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const handleAddUsers = () => {
    setUsers([...users, user]);
  };
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;

  const handleCity = (city) => {
    let tempcity = info;
    tempcity.address.city = city;

    setinfo({ ...tempcity });
  };

  return (
    <>
      <h1>Derived State in React JS</h1>
      <p>Total users:{total}</p>
      <p>Last user:{last}</p>
      <p>Unique users:{unique}</p>
      <input
        type="text"
        placeholder="add new user"
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleAddUsers}>ADD USER</button>
      {users.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <hr />

      <h2>Lifting state up in React JS</h2>
      <p>
        Purpose: to send data from one child component to another child
        component,using Parent component.
      </p>
      <AddUser setdata={setdata} />
      <DisplayUser data={data} />

      <hr />

      <h2>Updating Objects in State</h2>
      <input
        type="text"
        placeholder="update name"
        onChange={(event) => handleName(event.target.value)}
      />
      <input
        type="text"
        placeholder="update city"
        onChange={(event) => handleCity(event.target.value)}
      />
      <p>Name:{info.name}</p>
      <p>City:{info.address.city}</p>
      <p>Country:{info.address.country}</p>
    </>
  );
}
export default App;
