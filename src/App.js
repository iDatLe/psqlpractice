import React, { useState, useEffect } from 'react';
import './scss/App.scss';


function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [apiData, setApiData] = useState([])
  // const [form, setForm] = useState({username: '', password: ''})

  // function onChange(e) {
  //   setForm({...form, [e.target.name]: e.target.value})
  //   console.log(form)
  // }

  const api = '/users/';

  async function fetchApi() {
    let response = await fetch(api);
    let thisData = await response.json();
    setApiData(thisData);
  }

  useEffect(() => {
    fetchApi();
  }, [])
  // The second argument, the array, makes it so it only fetches on mount and not every render

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
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            />

          <input type="submit" />
        </form>
      {console.log(apiData)}
      </div>
    )
}

export default App;
