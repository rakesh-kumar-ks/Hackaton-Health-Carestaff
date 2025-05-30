import { useState, useRef, useEffect, CSSProperties } from "react"
import QuestionAudioViedorecordingComponent from './QuestionAudioViedorecordingComponent'

export default function InterviewPopUpModel ({ interviewQuestions }: string[]) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');

  useEffect(() => {
    let timer: any;

    if (currentQuestionIndex < interviewQuestions.length) {
      timer = setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestion(interviewQuestions[currentQuestionIndex])
      }, 10000); // 10 seconds delay
    }
    return () => clearTimeout(timer); // Clear timer on unmount or question change
  }, [currentQuestionIndex, currentQuestion]);


  const handleRecordingDone = (videoBlob: any) => {
    console.log("Recording complete! Blob:", videoBlob);
    // Now you can do something with the videoBlob (e.g., upload it)
    const formData = new FormData();
    formData.append('video', videoBlob, 'recorded-video.webm'); // 'recorded-video.webm' is the filename

    fetch('/upload', { // Replace with your upload endpoint
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Video uploaded successfully:', data);
      })
      .catch(error => {
        console.error('Error uploading video:', error);
      });
  };
  return (
    <>
            {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Let start your interview1...</h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Q {currentQuestionIndex+1}: {currentQuestion}</h1> */}
            <QuestionAudioViedorecordingComponent currentQuestion={`Q ${currentQuestionIndex+1} : ${currentQuestion}`} handleRecordingDone={handleRecordingDone} />
      </>
  )
}
