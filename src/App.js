import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminInput from './components/admin/AdminInput';
import Login from './components/users/Login';
import Register from './components/users/Register';

function App() {
  return (
    <div className="App">
      {/* <AdminInput/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/AdminInput' element={<AdminInput/>}/> 
      </Routes>
    </div>
  );
}

export default App;
