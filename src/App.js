import logo from './logo.svg';
import './App.css';
import React , {useEffect , useState} from 'react';
function App() {
  useEffect(()=>{
fetch('http://localhost:8081/users')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));
})
  return (
    <div>
      initialised
    </div>
  );
}

export default App;
