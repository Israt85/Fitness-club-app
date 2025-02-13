import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import DashboardLayout from './Layouts/DashboardLayout.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='dashboard' element={<DashboardLayout/>}>
    <Route path='page' element={<Dashboard/>}>
      
    </Route>
    </Route>
    </Routes>
</BrowserRouter>
)
