import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog"
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { urlObject } from '../../urls/Urls'
import axios from 'axios';
type InterStatusDetails = {
    resumeid: number,
    resume_path: string,
    created_at: Date,
    interview_taken_by_user: boolean,
    interview_link: string | null,
    interview_feedback: string | null,
    interview_state: string | null
}
import { useUserDetails } from '@/ZobloabContext/UserDetailsContext';
import SpinningComponent from "./SpinnigComponent/Spinning";
import { Button } from "react-day-picker";
const InterviewPopUpModel = lazy(()=>import("./InterviewPopUpModel"))
const InterDetailsListComponent : React.FC = () => {
    const [selectedResumeId, setSelectedResumeId] = useState<number | null>(null);
    const EnvbaseUrlprefix: any = urlObject.url
    const [showPopup, setShowPopup] = useState(false);
    const { userDetails } = useUserDetails();
    const [interviewQuestions,setInterviewquestions]=useState<String[]>([])
    const [interStatusDetails, setinterStatusDetails] = useState<InterStatusDetails[]>([]);

    const selectedinterview = (resumeid:number)=>{
        setSelectedResumeId(resumeid);
        console.log("resume id ",resumeid)
        axios.get(`${EnvbaseUrlprefix}/api/get/generatedAiQuestionbasedonResume/${resumeid}`).
        then((data)=>{
          let responce =data.data.data
          setInterviewquestions([...responce])
        }) 
        .catch(erro=>console.log(erro))
    }

    useEffect(() => {
        const EnvbaseUrlprefix: any = urlObject.url
        axios.get(`${EnvbaseUrlprefix}/api/getUserInterviewDetails/${userDetails?.username}`).then((data) => {
            let responce: InterStatusDetails[] = data.data.data
            if (responce) {
                setinterStatusDetails(responce)
            }
        })
    }, [])

    return (
        <div>
        { selectedResumeId ?
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >All interview status</TableHead>
                        <TableHead>Interview taken</TableHead>
                        <TableHead>Feed back</TableHead>
                        <TableHead>Resume uploaded</TableHead>
                        <TableHead >Interview_link</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {interStatusDetails.map((e, i) => ( // Corrected map usage
                        <TableRow key={i}> {/* Add a key prop */}
                            <TableCell >{e.interview_state || "-"}</TableCell>
                            <TableCell>{e.interview_taken_by_user ? "Yes" : "No"}</TableCell>
                            <TableCell>{e.interview_feedback || "-"}</TableCell> {/* Display - if no link */}
                            <TableCell>{e.resume_path || "-"}</TableCell> {/* Display - if no feedback */}
                            <Suspense fallback={<SpinningComponent />}>
                                {/* <TableCell onClick={()=>selectedinterview(e.resumeid)}> <InterviewPopUpModel interviewQuestions={interviewQuestions} /> </TableCell>  */}
                                <TableCell> <button onClick={() => selectedinterview(e.resumeid)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Take Interview</button>  </TableCell>
                            </Suspense>
                        </TableRow>
                    ))}
                    {interStatusDetails.length === 0 && ( // Conditional rendering for empty table
                        <TableRow>
                            <TableCell colSpan={5} className="text-center">No interview details found.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table> :
            <>
                <Suspense fallback={<SpinningComponent />}>
                    <Dialog>
                        <DialogTrigger style={{ fontSize: 15, color: 'blue' }} >
                            <h1>Lets Start..</h1>
                        </DialogTrigger>
                        <DialogContent className="flex flex-col items-center justify-center" >
                            <DialogHeader className="text-center" >
                                <DialogDescription className="text-center">
                                    {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Let start your interview1...</h1> */}
                                    <InterviewPopUpModel
                                        interviewQuestions={interviewQuestions}
                                        resumeId={selectedResumeId}
                                        onClose={() => setSelectedResumeId(null)} />
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </Suspense>
                </>
                }
        </div>
    )
}

export default InterDetailsListComponent;