import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route, Routes } from 'react-router-dom';
import Teacher from './Pages/Teacher';

export default function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/teacher" element={<Teacher/>} />
      </Routes>
    </div>
  );
}

