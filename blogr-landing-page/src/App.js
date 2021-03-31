import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
      <div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/DeeDowns" target='_blank' rel="noreferrer" >Dee</a>.
      </div>
    </div>
  );
}

export default App;
