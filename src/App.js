import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const  [users, setUsers] = useState([
    { 
      name : 'John',
      job : 'Dev'
    }
  ]);

  const [name, setName] = useState("");


  const handleClick = () =>{
    const user = {
      name : name,
      job : 'Dev'
    }

    let newUsers = [...users];

    newUsers.push(user);

    setUsers(newUsers);

  }

  const handleChange = (e) =>{
    setName(e.target.value);
  }

  return (
    <div className="App">
        <div className="box">
            <div> 
              <input type="text"  onChange={handleChange}/>
              <input type="submit"  onClick={handleClick}/>
            </div>
          

            <div>
              {users.map(user => {
                return (
                  <div className="user-box">
                  <div className="user-box-left">
                    <div className="img-container">
                      <img src="https://kouyatekarim.netlify.app/res/images/gomycode.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="description">
                      <p>Nom : {user.name}</p>
                      <p> Job : {user.job}</p>
                  </div>
              </div>
                )
              })}
              
            </div>
        </div>
    </div>
  );
}

export default App;
