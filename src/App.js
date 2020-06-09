import React from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/userContext'

function App() {
  return (
    <div className="App">
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render = {(isLoggedIn) => isLoggedIn?'lynn':'guest'} /> */}

      {/* <Counter render = {(count,incrementCount)=>(
        <ClickCounterTwo count = {count} incrementCount = {incrementCount}/>  )}
      />
      <Counter render = {(count,incrementCount)=>(
        <HoverCounterTwo count = {count} incrementCount = {incrementCount}/>  )}
      />
    </div> */}
    <UserProvider value = "lynn">
      <ComponentC />
    </UserProvider>
    </div>
  );
}

export default App;
