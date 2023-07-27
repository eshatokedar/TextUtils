import './App.css';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  
  return (
    <>
    <Navebar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <div class="container my-5">
    <TextForm heading="Enter text :)"/>
    </div>
    </>
  );
}

export default App;      
