import {useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
function NotFound() {
    const navigate = useNavigate();
  
    // useEffect(() => {
    //   navigate('/'); // Redirect to the home page
    // }, [navigate]);
  
    // return null; // Optional: Can show a loading indicator or a message while redirecting
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">404 - Page Not Found</h1>
      </div>
      <div className="mt-8">
        <Button  
          onClick={() => navigate('/')} 
          variant="ghost"
        >
          Go Back to Home
        </Button >
      </div>
    </div>
      );
  }

  export default NotFound;