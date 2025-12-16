import React from 'react';
import ProfileCard from './ProfileCard';
import SimpleCounter from './SimpleCounter';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Vite + React app</h1>

     {/*Rendering ProfileCard with Props */}
    <ProfileCard name="Bishal Rimal" 
     title="Software Engineering Intern"/>
     <SimpleCounter/>
    </div>
  );
}

export default App;