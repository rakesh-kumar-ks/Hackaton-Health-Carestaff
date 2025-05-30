"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import GoldercoinComponent from "./GodenCoin";
import './coinStyle.css'
import axios from "axios";
import { urlObject } from '../../urls/Urls'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default  function HomepageOffersCompoenet({JobdetailsObj,Jobid,userid}:any) {

    const AppyfortheCompany=()=>{
      const urlforgettingJobs :any=urlObject.url;
        axios.post(`${urlforgettingJobs}/api/onselect/jobs/${Jobid}/user/${userid}`).then((res)=>{
            console.log("responce post api",res)
        }).catch((e)=>{console.error(e)})
    }


  return (
      <div  className="max-w-sm p-1" >
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <CardHeader className="space-y-2 p-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>Company : {JobdetailsObj.company_name} </CardTitle>
          <CardDescription>Job title: {JobdetailsObj.title}</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="my-0 ml-4 list-disc [&>li]:mt-0 p-1">
                <li>Salary: {JobdetailsObj.salary_range}</li>
                <li>Exprenece: {JobdetailsObj.experience_level}</li>
                <li>Location: {JobdetailsObj.location}</li>
                <Collapsible>
                <CollapsibleContent>
                <li>Job type: {JobdetailsObj.job_type}</li>
                <li>Jobs left: {JobdetailsObj.number_of_jobs_left}</li>
                <li>About the Company: {JobdetailsObj.description} </li>
                </CollapsibleContent>
                <CollapsibleTrigger className="text-blue-500 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 underline cursor-pointer"  >See more details....</CollapsibleTrigger>
                </Collapsible>
            </ul>
              <button 
                onClick={()=>AppyfortheCompany()}
                   className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Apply Now</span>
                <span className="bg-zinc-700 rounded-full text-[0.7rem] px-2 py-0 text-white">
                  {JobdetailsObj.coins_value_for_job}
                </span>
                <GoldercoinComponent />
              </button>
          </CardContent>
      </BackgroundGradient>
      </div>
  );
}
