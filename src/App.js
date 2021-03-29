import './App.css';
import React, { useState } from 'react';

function App() {
  const [t1, setT1] = useState('');

  function clickHandler() {
    fetch('http://p-webdev-com.stackstaging.com', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        setT1(response);
      });
  }
  return (
    <div>
      <h1>hello world</h1>
      <button onClick={clickHandler}>Go</button>
      <div>{t1}</div>
    </div>
  );
}

export default App;
