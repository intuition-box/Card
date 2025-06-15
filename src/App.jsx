import { useEffect, useRef, useState } from 'react'
import templateImg from './assets/intuitidtest.webp'

import './App.css'

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
      ctx.font = '32px Arial';
      ctx.fillStyle = '#000';
      ctx.fillText(name, 100, 100); // Adjust position
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
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <h2 className="text-2xl font-bold">Create Your Custom Graphic</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>

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
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Download Image
          </button>
        </div>
      </div>
    </main>
  );
}

export default App
