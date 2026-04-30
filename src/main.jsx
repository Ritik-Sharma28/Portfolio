import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Console Easter Egg
console.log(
  '%c👋 Hey Developer!',
  'color: #22d3ee; font-size: 20px; font-weight: bold; font-family: Space Grotesk, sans-serif'
)
console.log(
  "%cLooks like you're curious about my code! Let's connect 🚀",
  'color: #a78bfa; font-size: 14px'
)
console.log(
  '%c📧 ritiksharma.14y@gmail.com',
  'color: #94a3b8; font-size: 12px'
)
console.log(
  '%c💻 github.com/Ritik-Sharma28',
  'color: #94a3b8; font-size: 12px'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
