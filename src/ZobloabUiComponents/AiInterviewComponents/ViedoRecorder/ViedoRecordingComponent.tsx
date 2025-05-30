import React, { useState, useRef, useEffect } from 'react';

function VideoRecorder({ onRecordingComplete }:any) {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null); // Keep track of the media stream

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        mediaStreamRef.current = stream; // Store the stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        // Handle error (e.g., display message to user)
      }
    };

    getCameraPermission();

    return () => { // Cleanup function (important!)
      if (mediaStreamRef.current) {
        const tracks = mediaStreamRef.current.getTracks();
        tracks.forEach(track => track.stop()); // Stop all tracks
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const startRecording = async () => {
    setVideoChunks([]); // Clear previous chunks
    const options = { mimeType: 'video/webm;codecs=vp9' }; // Adjust mime type as needed
    try {
      const recorder = new MediaRecorder(mediaStreamRef.current, options);
      setMediaRecorder(recorder);

      recorder.ondataavailable = handleDataAvailable;
      recorder.onstop = handleStop;
      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      // Handle error
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setVideoChunks((prevChunks) => [...prevChunks, event.data]);
    }
  };

  const handleStop = () => {
    const blob = new Blob(videoChunks, { type: 'video/webm' }); // Create the video blob
    const url = URL.createObjectURL(blob); // Create a URL for the video
    // You can now use the 'blob' or 'url' (e.g., send it to a server, display it)
    if (onRecordingComplete) {
        onRecordingComplete(blob); // Call the callback function
      }
    // Optional: Download the video
    // const a = document.createElement('a');
    // document.body.appendChild(a);
    // a.href = url;
    // a.download = 'recorded-video.webm';
    // a.click();
    // window.URL.revokeObjectURL(url); // Release the URL
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline></video> {/* playsInline for mobile */}
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
}

export default VideoRecorder;