import React from 'react';
import ProfileCard from './ProfileCard';
import SimpleCounter from './SimpleCounter';
import Form from './LoginForm';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Vite + React app</h1>

     {/*Rendering ProfileCard with Props */}
    <ProfileCard name="Bishal Rimal" 
     title="Software Engineering Intern"/>
    <SimpleCounter/>
    <br/><Form/>
    </div>
  );
}

export default App;