import { useEffect, useState } from "react"
import { urlObject } from '../../urls/Urls'
import axios from 'axios';
import HomepageOffersCompoenet from "./HomePageOfferComonent"
import JobDataFilterComponent from './JobFilterComponent/JobDataFilterComponent'
import ShimmerEffect from "@/components/ui/ShimmerEffect";
import { Button } from "@/components/ui/button"

type filters={
  jobType:string|undefined;
  location:string|undefined;
  Department:string|undefined;
}

export default function Dashboard() {

    const [jobs,setJobs]=useState<any[]>([]);

    const [filters, setFilters] = useState<filters>({ jobType: undefined, location: undefined, Department: undefined });

    useEffect(()=>{
      const urlforgettingJobs :any=urlObject.url
      axios.get(`${urlforgettingJobs}/api/Jobs`).then((res)=>{
          let data= res.data;
          console.log("data",data)
        setJobs([...res.data.data])
      }).catch((E)=>{
        console.error(E)
      })
    },[])

    function callinggetJobswithQuearyparams() {
          let urlforgettingJobs: string | undefined = urlObject.url
          urlforgettingJobs = urlforgettingJobs + "/api/Jobs?"
          let quear = [];
          if (filters.Department) 
            quear.push(`department=${filters.Department}`)
          if (filters.jobType)
              quear.push(`jobType=${filters.jobType}`)
          if (filters.location) 
            quear.push(`location=${filters.location}`)
          if (quear.length > 0)
            urlforgettingJobs += quear.join("&")
              axios.get(`${urlforgettingJobs}`).then((res) => {
                let data = res.data;
                console.log("data", data)
                setJobs([...res.data.data])
              }).catch((E) => {
                console.error(E)
              })
  }

  const clearFilter=()=>
  {
    setFilters({Department:undefined,jobType:undefined,location:undefined})
    const urlforgettingJobs :any=urlObject.url
        axios.get(`${urlforgettingJobs}/api/Jobs`).then((res)=>{
          let data= res.data;
          console.log("data",data)
        setJobs([...res.data.data])
      }).catch((E)=>{
        console.error(E)
      })
  }

  return (
    // this div is applied for to the full width
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="flex gap-6">
          <aside className="w-1/5 h-1/3 p-3 rounded shadow  flex flex-col justify-between">
            <JobDataFilterComponent filters={filters} setFilters={setFilters} />
            <div className="flex justify-center mt-3">
            {Object.entries(filters).find(e=>e[1]!=undefined)?<div><Button size="lg" variant="destructive" onClick={()=>callinggetJobswithQuearyparams()} disabled={false}>Filter</Button> <Button variant="ghost" size="lg" onClick={(e)=>{clearFilter()}} >clear</Button></div>:null}
            </div>
          </aside>
        <section className="flex-1 p-3 h-[auto]">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to the Jobs listing Section</h1>
            {jobs.length==0?"":<p className="leading-7 [&:not(:first-child)]:mt-6">This is the main DashBoard area. Here you can see the latest Job Updated.</p>}
            <div className="flex flex-wrap gap-2 p-3">
              {jobs.length==0?<ShimmerEffect height="100vh" duration={4}/>:jobs.map((e:any)=>{return <HomepageOffersCompoenet JobdetailsObj={e} Jobid={e.id} userid={1} />})  }
            </div>        
        </section>
        </div>
      </main>
     <div>
     </div>
    </div>
  )

}

