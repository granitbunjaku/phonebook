import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddContact from './views/AddContact';
import Edit from './views/Edit';
import Home from './views/Home';
 
const App = () => {
  const [numbers, setNumbers] = useState(JSON.parse(localStorage.getItem('numbers')) || []);

  return (
    <div className="app">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home numbers={numbers} setNumbers={setNumbers}/>}></Route>
        <Route path='/addcontact' element={<AddContact numbers={numbers} setNumbers={setNumbers}/>}></Route>
        <Route path='/edit/:id' element={<Edit numbers={numbers} setNumbers={setNumbers}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
