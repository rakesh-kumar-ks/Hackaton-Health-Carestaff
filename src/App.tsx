import './App.css'
import { Routes, Route ,useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react';
import NotFound from './ZobloabUiComponents/NotFound/NotFoundComponent'
import Navbar from './ZobloabUiComponents/MainPageComponents/NavBarComponent' ;
import SparklesPreview from './ZobloabUiComponents/LandingPage/LandingPage'
import JoiningCompoenet from "./ZobloabUiComponents/LoginPageComponent/JoiningCompoenet"
import RegisteredUserLoginForm from './ZobloabUiComponents/LoginPageComponent/RegisteredUserComponent' 
import  Dashboard from  './ZobloabUiComponents/MainPageComponents/HomePage'
import AdminPage from './pages/AdminPage';

import ShimmerEffect from "@/components/ui/ShimmerEffect"; // this should not be lazy loaded

function App() {
  const [login, setLogin] = useState(false);
    const navigate = useNavigate();

      useEffect(()=>{
          navigate("/")
      },[login])

    if (!login) {
      return (
        <Suspense fallback={<ShimmerEffect/>}>
        <Routes>
            <Route path='/' element={<SparklesPreview />} />
            <Route path='/login' element={<RegisteredUserLoginForm setLogin={setLogin} />} />
            <Route path="/createaccount" element={<JoiningCompoenet />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </Suspense>
      )
    }
    else {
      return (
        <>
          <Navbar  setLogin={setLogin} />
          <Suspense fallback={<ShimmerEffect/>}>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path='/admin' element={<AdminPage />} /> */}
              {/* <Route path="*" element={<NotFound/>} /> */}
          </Routes>
          </Suspense>
        </>
      )
    }
}

export default App
