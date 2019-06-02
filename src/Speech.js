import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="absolute top-1-ns left-1-ns">
      <button className="f6 link dim ph3 pv2 mb2 dib white bg-black" onClick={resetTranscript}>Reset</button>
      <span className="white b f3">{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);