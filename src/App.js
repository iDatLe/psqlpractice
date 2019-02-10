import React, { useState } from 'react';
import './scss/App.scss';


function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [form, setForm] = useState({username: '', password: ''})

  // function onChange(e) {
  //   setForm({...form, [e.target.name]: e.target.value})
  //   console.log(form)
  // }

  return (
      <div className="app">
        <form>
          <input 
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
             />

          <input 
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            />

          <input 
            type="submit"/>
        </form>

      </div>
    )
}

export default App;
