import React, { createContext, useState, useContext, ReactNode, Children } from 'react';

export type UserDetails={
    userid: string;
    username:string;
    firstname:string;
    lastname: string;
    email: string;
    password:string;
    dateofbirth:Date|null;
    profilepictureurl:string;
    role: string;
    bio:string;
    phonenumber:string;
    isactive:boolean;
    loggedinStatus:boolean
} 

interface UserDetailsContextType{
    userDetails:UserDetails | null;
    setuserDetails:(userdetails:UserDetails | null)=>void;
}


//context object created
const UserDetailsContext = createContext<UserDetailsContextType|null>(null);

// Custom hook for consuming the context
export const useUserDetails = () => {
    const context = useContext(UserDetailsContext);
    if (!context) {
      throw new Error('UserDetails must be used within a UserProvider');
    }
    return context;
  };

// Create a provider component
interface UserDetailsProviderProps {
    children: ReactNode;
  }
  
export const UserDetailsContextApp : React.FC<UserDetailsProviderProps> =({children})=>{
    const [userDetails,setuserDetails]= useState<UserDetails|null>(null);
    return (
        <UserDetailsContext.Provider value={{userDetails,setuserDetails}}>
            {children}
        </UserDetailsContext.Provider>
    )
}







