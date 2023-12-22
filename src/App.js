import React, { useState } from 'react';
import './App.css'; // Import Tailwind CSS
import thala from "./thala.mp4"
import ghantekaking from "./ghantekaking.mp4"
import wcwin from "./wcwin.mp4"
import sapnatoota from "./sapnatoota.mp4"
import naughty from "./naughty.mp4"

function App() {
  const [inputString, setInputString] = useState('');
  
  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const playVideo = () => {
    // Check if the input string length is 7
    if (inputString.length === 7 || inputString === "7") {   
  
      const videoUrl = thala
      const videoPlayer = document.getElementById('videoPlayer');
  
      // Set the source and play the video
      videoPlayer.src = videoUrl;
      videoPlayer.style.display = 'block'; // Show the video player
      videoPlayer.play();
    }
    else if (inputString.length === 4) {   
  
      const videoUrl = wcwin
      const videoPlayer = document.getElementById('videoPlayer');
  
      // Set the source and play the video
      videoPlayer.src = videoUrl;
      videoPlayer.style.display = 'block'; // Show the video player
      videoPlayer.play();
    }
     else if (inputString.length === 5) {   
  
      const videoUrl = ghantekaking
      const videoPlayer = document.getElementById('videoPlayer');
  
      // Set the source and play the video
      videoPlayer.src = videoUrl;
      videoPlayer.style.display = 'block'; // Show the video player
      videoPlayer.play();
    }
    else if (inputString.length === 9 ) {  
  
      const videoUrl = sapnatoota
      const videoPlayer = document.getElementById('videoPlayer');
  
      // Set the source and play the video
      videoPlayer.src = videoUrl;
      videoPlayer.style.display = 'block'; // Show the video player
      videoPlayer.play();
    }
     else {
      const videoUrl = naughty
      const videoPlayer = document.getElementById('videoPlayer');
  
      // Set the source and play the video
      videoPlayer.src = videoUrl;
      videoPlayer.style.display = 'block'; // Show the video player
      videoPlayer.play();
    }
  };
  

  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFF00]">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputString">
            Thala For a Reason
          </label>
          <input
            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="inputString"
            type="text"
            placeholder="Type here..."
            value={inputString}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={playVideo}
        >
          Check 
        </button>
        <video
          id="videoPlayer"
          className="mt-4"
          width="640"
          height="360"
          controls
          style={{ display: 'none' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
    
  
}

export default App;
