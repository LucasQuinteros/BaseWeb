import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';

import CompShowItems from './Item/MostrarItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowItems/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
