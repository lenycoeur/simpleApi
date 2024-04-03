import { useEffect, useState } from 'react'
import './App.css'
function App() {


  const [user, setUser] = useState([]);

  useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error for recup', error ));
      return()=> {

      }
  }, [])

  return (
    <>
        <div>
          <h2>Liste de toutt les utilisateur</h2>
          <ul>
              {user.map(user => (
                <li key={user.id}>{user.name}
                <p>{user.username}</p>
                </li>
                
              ))}

          </ul>
        </div>
    </>
  )
}

export default App
