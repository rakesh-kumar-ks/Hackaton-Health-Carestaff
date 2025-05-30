import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";
import { useEffect, useState } from "react";
import { urlObject } from '../../urls/Urls'
import {useUserDetails} from '../../ZobloabContext/UserDetailsContext'
import ShimmerEffect from "@/components/ui/ShimmerEffect";
export default  function JobAppliedCardHoverComponent() {

  const { userDetails} = useUserDetails();

  const[AppliedJobs,setAppliedJobs]=useState([]);

  useEffect(()=>{
    console.log("user userDetails",userDetails)
      const EnvbaseUrlprefix :any=urlObject.url
      axios.get(`${EnvbaseUrlprefix}/api/jobsApplieddetails/${userDetails?.username}`)
      .then((data)=>{
          let project=data.data.data.map((e:any)=> { 
           return  {
            title:e.title,
            description:e.description,
            link:e.company_link,
            coinValueforJob:e.coins_value_for_job,
            company_name:e.company_name,
            salary_range:e.salary_range,
            number_of_jobs_left:e.requirements,
            location:e.location,
            job_type:e.job_type,
            experience_level:e.experience_level,
            user_job_status:e.user_job_status
           }
        })
        setAppliedJobs(project)
      }).catch(er=>console.log(er))
  },[])

  return (
    <div className="h-[400px]" >
      <div className="max-w-5xl  px-1"  >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >List of Jobs u have Applied</h1>
      </div>
      <div className="max-w-5xl mx-auto px-8" >
              {AppliedJobs.length==0?<ShimmerEffect height="100vh" duration={4}/>:<HoverEffect items={AppliedJobs} />}  
      </div>
    </div>
  );
}