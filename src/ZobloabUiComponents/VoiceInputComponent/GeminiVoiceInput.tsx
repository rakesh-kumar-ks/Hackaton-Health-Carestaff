import React, { useState, useEffect, useRef } from 'react';

const GeminiVoiceInput = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState(''); // Store finalized transcript
 


  return (
    <div>
      <div className="voice-input-container">
        <textarea
          value={finalTranscript + transcript} // Show both finalized and live transcript
          readOnly // Make it read-only, user can't directly edit.
          rows={5}
          placeholder="Speak now..."
        />
        {/* <button onClick={isListening ? stopListening : startListening}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button> */}
        {/* Optional: Display current status */}
        <p>{isListening ? 'Listening...' : 'Not Listening'}</p>
      </div>
    </div>
  );
};

export default GeminiVoiceInput;