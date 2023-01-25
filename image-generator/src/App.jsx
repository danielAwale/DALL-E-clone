import { useState } from 'react';
import {Configuration, OpenAIApi} from 'openai';
import './App.css'

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  });
  return (
    <div>
    </div>
  )
}

export default App
