//useGoogleLogin it can be used the make custome bottons for that we can add the google login functions 
import { CredentialResponse, GoogleLogin,useGoogleLogin } from '@react-oauth/google';
import { jwtDecode, JwtPayload } from "jwt-decode";
import {useUserDetails,UserDetails} from '../../ZobloabContext/UserDetailsContext'
import Cookies from 'js-cookie';
import axios from 'axios';
import { urlObject } from '../../urls/Urls'
const GoogleJoinComponent = () => {

    const {setuserDetails} = useUserDetails();


    function savingorloggintheuser(userDetails:UserDetails)
    {
      const urlforgettingJobs :any=urlObject.url
      axios.post(`${urlforgettingJobs}/api/createorupdateuser`,userDetails).then((res)=>{
          let data= res.data;
          console.log("api/createorupdateuser",data)

      }).catch((E)=>{
        console.error(E)
      })
    }

    function handleLogin(userDetails:UserDetails) {
      // Save user details to localStorage or sessionStorage
     // localStorage.setItem('userDetails', JSON.stringify(userDetails));
      // or
      Cookies.set('userDetails', JSON.stringify(userDetails) , { expires: 1/24,path:"/" });
      // sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
  
      // Update your context or state with the user details
      setuserDetails(userDetails);
  }

    const  onSuccessGoogleLoginDecodingResponce=async (credentialResponse:CredentialResponse) =>{
            const token :string | any = credentialResponse.credential;
            const decoded : any = jwtDecode(token);
        
                let userDetails:UserDetails={
                  "username":`${decoded.email.slice(0,3)}${decoded.given_name.slice(0,3)}`,
                  "password":"",
                  'userid':"",
                  "role":"user",
                  'dateofbirth':null,
                  "bio":"",
                  'email':decoded.email,
                  "isactive":decoded.email_verified,
                  "firstname":decoded.given_name,
                  "lastname":decoded.family_name,
                  "phonenumber":"",
                  "profilepictureurl":decoded.picture,
                  "loggedinStatus":true
              }
           return userDetails;
          }

    return (
      <GoogleLogin 
        onSuccess={async (credentialResponse) => {
        let userDetails:UserDetails=await onSuccessGoogleLoginDecodingResponce(credentialResponse)
        handleLogin(userDetails)

        savingorloggintheuser(userDetails)
       
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      
    />
    )
}

export default GoogleJoinComponent;