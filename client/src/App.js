import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Main from './Components/Main/main';

function App() {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
