import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

