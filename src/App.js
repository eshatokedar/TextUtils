import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  
  return (
    <>
    <Navbar title="TextUtils--convert your text here!" />
    <div class="container my-5">
    <TextForm heading="Enter text :)"/>
    </div>
    </>
  );
}

export default App;      
