import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App(props) {
  return (
    <div className="App">
      <Contact 
        name="Pierre Simon" 
        avatar="https://randomuser.me/api/portraits/men/22.jpg" 
        online={true}  />
      <Contact
        name="Brian Roger"
        avatar="https://randomuser.me/api/portraits/men/73.jpg"
        online={false} />
      <Contact
        name="Juanito Burro"
        avatar="https://randomuser.me/api/portraits/men/0.jpg"
        online={true} />
    </div>
  );
}

export default App;
