import './App.css'
import { Routes, Route,useNavigate  } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {useUserDetails,UserDetails} from './ZobloabContext/UserDetailsContext';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ContractUiMainComponent from './contract-ui-components/ComtractUiMainComponent';
import NotFound from './ZobloabUiComponents/NotFound/NotFoundComponent'
const Navbar = lazy(()=>import('./ZobloabUiComponents/MainPageComponents/NavBarComponent')) ;
const SparklesPreview = lazy(()=>import('./ZobloabUiComponents/LandingPage/LandingPage'))
const JoiningCompoenet = lazy(()=>import("./ZobloabUiComponents/LoginPageComponent/JoiningCompoenet"))
const RegisteredUserLoginForm = lazy(()=>import('./ZobloabUiComponents/LoginPageComponent/RegisteredUserComponent')) 
const Dashboard = lazy(()=>import('./ZobloabUiComponents/MainPageComponents/HomePage'))
const JobAppliedCardHoverComponent = lazy(()=>import('./ZobloabUiComponents/JobAppliedComponents/JobAppliedComponent'))
const MainOfferCompoenet = lazy(()=>import('./ZobloabUiComponents/OffersComponents/MainOfferComponenet'))
const PerformanceMatrixComponent = lazy(()=>import('./ZobloabUiComponents/PerformanceMatrix/PerformanceMatrixComponent'))
const AiInterviewComponent =lazy(()=>import('./ZobloabUiComponents/AiInterviewComponents/AiInterviewComponent'))
import ShimmerEffect from "@/components/ui/ShimmerEffect"; // this should not be lazy loaded
function App() {
  const { userDetails,setuserDetails } = useUserDetails();
  const navigate = useNavigate();

  useEffect(() => {
    // Load user details from localStorage
    // const storedUserDetails = localStorage.getItem('userDetails');
    const storedUserDetails = Cookies.get('userDetails')
    if (storedUserDetails) {
      setuserDetails(JSON.parse(storedUserDetails));
    }
  }, [setuserDetails]);

  useEffect(() => {
    if (userDetails?.isactive) {
      navigate('/');  // Navigate to the Dashboard or any default route after login
    }
    }, [userDetails]);

    if (!userDetails?.isactive) {
      return (
        <Suspense fallback={<ShimmerEffect/>}>
        <Routes>
            <Route path='/' element={<SparklesPreview />} />
            <Route path="/createaccount" element={<JoiningCompoenet />} />
            <Route path='/login' element={<RegisteredUserLoginForm />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </Suspense>
      )
    }
    else {
      return (
        <>
          <Navbar />
          <Suspense fallback={<ShimmerEffect/>}>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contracts" element={<ContractUiMainComponent/>} />
              <Route path='/jobsApplied' element={<JobAppliedCardHoverComponent />} />
              <Route path='/offers' element={<MainOfferCompoenet />} />
              <Route path='/Performance-metrics' element={<PerformanceMatrixComponent />} />
              <Route path='/interview-portal' element={<AiInterviewComponent/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
          </Suspense>
          {/* <footer className='relative bottom-0 left-0 w-full text-center p-4 bg-gray-100'>
            some contenet
          </footer> */}
          {/* <Footer/> */}
        </>
      )
    }
}

export default App
