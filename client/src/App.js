import React from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import Create from './components/create';
import Edit from './components/edit';
import Navbar from './components/navbar';
import RecordList from './components/recordList';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<RecordList />}/>
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/create" element={<Create />}/>
      </Routes>
    <Create/>
    </div>
  );
}

export default App;
