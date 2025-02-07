import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import DashboardLayout from './Layouts/DashboardLayout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Routes>
      <Route path="/home" element={<MainLayouts />} />
      
    </Routes>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='dashboard' element={<DashboardLayout/>}/>
    </Routes>
</BrowserRouter>
)
