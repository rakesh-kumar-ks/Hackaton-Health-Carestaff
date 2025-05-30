import React, { createContext, useState, useContext, ReactNode, Children } from 'react';


export type UserJobFilterObject={
            jobType:string;
            location:string;
            Department:string;
            salarayRange:number;
}
interface UserJobFilterContextType {
    userJobFilterObject:UserJobFilterObject;
    setuserFilterObject:(UserJobFilterObject:UserJobFilterObject | null)=>void;
}
const UserJobFilterContext = createContext<UserJobFilterContextType|null>(null);

// Custom hook for consuming the context
export const UserJobFilter = () => {
    const context = useContext(UserJobFilterContext);
    if (!context) {
      throw new Error('UserJobFilter must be used within a UserProvider');
    }
    return context;
  };

  // Create a provider component
interface UserJobFilterProviderProps {
    children: ReactNode;
  }

  export const UserJobFilterContextApp : React.FC<UserJobFilterProviderProps> =({children})=>{
    const [userJobFilterObject,setuserFilterObject] = useState<UserJobFilterObject|null>(null);
    return (
        <UserJobFilterContext.Provider value={{userJobFilterObject,setuserFilterObject}}>
            {children}
        </UserJobFilterContext.Provider>
    )
}