import {
    Dialog,
    DialogDescription,
    DialogHeader,
  } from "@/components/ui/dialog"
import { TextGenarationUIComponent } from './TextGenarationUIComponent'
import VideoRecorder from "./ViedoRecorder/ViedoRecordingComponent"
import TextToSpeechQueue from "./textToSpeech/TextToSpeechComponent";


function QuestionAudioViedorecordingComponent({currentQuestion,handleRecordingDone}:any){

    return(
            <Dialog>
              <DialogHeader>
              <DialogDescription>
                <TextGenarationUIComponent word={currentQuestion} />
              </DialogDescription>
            </DialogHeader>
            <VideoRecorder onRecordingComplete={handleRecordingDone} />
            <TextToSpeechQueue text={currentQuestion} /> 
            </Dialog>
    )
}



export default QuestionAudioViedorecordingComponent;