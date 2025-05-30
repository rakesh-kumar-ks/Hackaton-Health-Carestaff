import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"


const JobDataFilterComponent=({filters,setFilters}:any)=>
{

  console.log("filters obj",filters)

    return(
       <>
        <Card className="w-[auto]">
         <CardHeader>
         <CardTitle className="ml-2">Filters</CardTitle>
       </CardHeader>
        <CardContent>
         <div className="p-2">
         <SelectComponentforJobFilter />
         </div>
         <div className="p-2">
         <SelectComponentforJobFilterOnLocation/>
         </div>
         <div className="p-2">
         <SelectComponentforJobFilterOnDepartment/>
         </div>
        </CardContent>
        </Card>
        </>
    )
    
  function SelectComponentforJobFilter() {
    return (<>
      <Label htmlFor="jobs-filter">Jobs Type</Label>
      <Select id="jobs-filter" value={filters?.jobType} onValueChange={(e)=>filters!=undefined? setFilters({...filters,jobType:e}):null}>
        <SelectTrigger className="w-[12em]">
          <SelectValue placeholder="Select a Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Job Type</SelectLabel>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
          </SelectGroup>
        </SelectContent>
    </Select>
    </>)
  }

  function SelectComponentforJobFilterOnLocation() {
    return (<>
      <Label htmlFor="jobs-on-location">Location</Label>
      <Select id="jobs-on-location" value={filters?.location} onValueChange={(e)=> filters!=undefined? setFilters({...filters,location:e}):null} >
        <SelectTrigger className="w-[12em]">
          <SelectValue placeholder="Select a Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Delhi</SelectLabel>
            <SelectItem value="New Delhi">New Delhi</SelectItem>
            <SelectLabel>Karnataka</SelectLabel>
            <SelectItem value="Banglore">Banglore</SelectItem>
            <SelectItem value="Mysore">Mysore</SelectItem>
            <SelectLabel>Maharastra</SelectLabel>
            <SelectItem value="puna">puna</SelectItem>
            <SelectLabel>Tamil Nadu</SelectLabel>
            <SelectItem value="Chennai">Chennai</SelectItem>
            <SelectLabel>USA</SelectLabel>
            <SelectItem value="San Francisco, CA">San Francisco, CA</SelectItem>
            <SelectItem value="TEXAS, TE">TEXAS, TE</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>)
  }

  function SelectComponentforJobFilterOnDepartment() {
    return (<>
      <Label htmlFor="jobs-on-Department">Department</Label>
      <Select id="jobs-on-Department" value={filters?.Department} onValueChange={(e)=> filters!=undefined? setFilters({...filters,Department:e}):null} >
        <SelectTrigger className="w-[12em]">
          <SelectValue placeholder="Select a Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Department</SelectLabel>
            <SelectItem value="Test Engineer">Test Engineer</SelectItem>
            <SelectItem value="Software Engineer">Software Engineer</SelectItem>
            <SelectItem value="Test Engineer aws">Test Engineer aws</SelectItem>
            <SelectItem value="Engineering-software">Engineering-software</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>)
  }


  function SalaryRangeComponent()
  {
    return(<>
      <Label htmlFor="salary-range">select salary range</Label>
      <Slider id="salary-range" defaultValue={[33]} max={100} step={1} />
    </>)
  }

}

export default JobDataFilterComponent;