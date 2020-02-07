import React from 'react';
import './App.css';
import UserList from "./containers/User/list/ListWithHook";

function App() {
  return (
    <div className="App">
      <UserList handlerFormSave={console.log}/>
    </div>
  );
}

export default App;
