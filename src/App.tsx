import React from 'react';
import message from './components/Message'
import './App.css';

function App() {

  const showMsg = () => {
      message('提示信息')
  }
  return (
    <div className="App" id="app">
        <button onClick={showMsg}>消息提示</button>
    </div>
  );
}

export default App;
