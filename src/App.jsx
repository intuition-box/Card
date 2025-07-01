import { useEffect, useRef, useState } from 'react'
import templateImg from './assets/intuitidtest.png'

import './App.css'
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  const canvasRef = useRef(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear previous content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the template background
    const bg = new Image();
    bg.src = templateImg;
    bg.onload = () => {
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

      // Draw uploaded photo if available
      if (photo) {
        ctx.drawImage(photo, 100, 500, 200, 200); // Adjust position and size
      }

      // Draw the name
      ctx.font = '22px Arial';
      ctx.fillStyle = '#000';
      ctx.textBaseline = 'top'
      ctx.fillText(name, 268, 115); // Adjust position
    };
  };

  useEffect(() => {
    drawCanvas();
  }, [name, photo]);

    const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => setPhoto(img);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <h2 className="text-2xl font-bold">Create Your Intuition ID!</h2>

<Form/>

        <div className="w-full flex justify-center">
          <canvas
            ref={canvasRef}
            width={480}
            height={270}
            className="border border-gray-300 rounded-md shadow"
          />
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const canvas = canvasRef.current;
              const link = document.createElement('a');
              link.download = 'custom-image.png';
              link.href = canvas.toDataURL();
              link.click();
            }}
            className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-blue-900 transition"
          >
            Download from the Overmind
          </button>
        </div>
      </div>
    </main>
  );
}

export default App
