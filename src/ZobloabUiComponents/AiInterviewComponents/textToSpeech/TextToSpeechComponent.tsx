import React, { useState, useEffect, useRef } from 'react';

function TextToSpeechQueue({ rate = 1, pitch = 1, volume = 1 , text}) {
  const [currentText, setCurrentText] = useState(text); // Store the current text
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;
  const voices = useRef(window.speechSynthesis.getVoices());

  useEffect(() => {
    const handleVoicesChanged = () => {
      voices.current = window.speechSynthesis.getVoices();
    };
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (currentText && !isSpeaking) {
      speakText(currentText);
    }
  }, [currentText, isSpeaking]);

  const speakText = (text) => {
    if (synth.speaking) {
      synth.cancel(); // Stop current speech if any
    }

    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;

      // Optional: Set the voice (same as before)
      // const selectedVoice = voices.current.find(voice => voice.name === 'Microsoft Zira - Mobile | en-US');
      // if (selectedVoice) {
      //   utterance.voice = selectedVoice;
      // }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (event) => {
        console.error("Speech error:", event.error);
        setIsSpeaking(false);
      };

      synth.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    synth.cancel();
    setIsSpeaking(false);
    setCurrentText(null); // Clear current text
  };

  // Function to receive and speak the text from the parent
  const receiveText = (text) => {
    setCurrentText(text); // Set the new text, triggering the useEffect
  };

  return null; // Doesn't render anything itself
}

export default TextToSpeechQueue;