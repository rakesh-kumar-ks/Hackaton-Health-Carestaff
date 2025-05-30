import { lazy, Suspense, useEffect,useState } from 'react';
import {TextGenarationUIComponent} from './TextGenarationUIComponent'
const ResumeUpload =lazy(()=>import('./FileUploadComponent')) 
const  InterDetailsListComponent = lazy(()=>import('./InterviewDetailsListComponent')); 
import ShimmerEffect from "@/components/ui/ShimmerEffect"; 
// const  GeminiVoiceInput=lazy(()=>import('../VoiceInputComponent/GeminiVoiceInput')) 
// const GeminiVoiceInput = lazy(() => import('../VoiceInputComponent/GeminiVoiceInput'));

export default function AiInterviewComponent (){
    
    const world=`This should be  a Ai generated content  Upload your resume in so that we can processes with the interview`
    const world_Interview_details="Previouse Interview details and result's"
    return(
        <div className='p-3 m-3'>
            <div>
                <TextGenarationUIComponent word={world} />
            </div>
            <div>
                <br />
                <Suspense fallback={<ShimmerEffect/>}>
                  <ResumeUpload />
                </Suspense>
            </div>
            <div>
                <div>
                <TextGenarationUIComponent word={world_Interview_details} />
                <Suspense fallback={<ShimmerEffect/>}> {/* Important: Add a fallback! */}
                    <InterDetailsListComponent/>
                </Suspense>
                </div>
            </div>
        </div>
    )

}