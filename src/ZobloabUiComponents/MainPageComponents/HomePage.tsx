import { useEffect, useState } from "react"
import { urlObject } from '../../urls/Urls'
import axios from 'axios';
import { Button } from "@/components/ui/button"
import AdminPage from "@/pages/AdminPage";

type filters={
  jobType:string|undefined;
  location:string|undefined;
  Department:string|undefined;
}

export default function Dashboard() {

   

 

  return (
    // this div is applied for to the full width
    <div className="flex min-h-screen w-full flex-col">
      {/* <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="flex gap-6">
          <aside className="w-1/5 h-1/3 p-3 rounded shadow  flex flex-col justify-between">
        
            <div className="flex justify-center mt-3">
        
            </div>
          </aside>
        <section className="flex-1 p-3 h-[auto]">



        </section>
        </div>
      </main>
     <div>
     </div> */}

     <AdminPage />
    </div>
  )

}

