import { useEffect, useRef, useState } from 'react';
import logo from './assets/logo.svg'
import templateImg from './assets/bigid2.jpg';

import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  const canvasRef = useRef(null);
  const [username, setUsername] = useState('');
  const [discordRole, setDiscordRole] = useState('');
  const [iqLevel, setIqLevel] = useState('');
  const [topActivity, setTopActivity] = useState('');
  const [occupation, setOccupation] = useState('');
  const [bullish, setBullish] = useState('');
  const [motto, setMotto] = useState('');
  const [photo, setPhoto] = useState(null);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    const bg = new Image();
    bg.src = templateImg;
    bg.onload = () => {
      setTemplate(bg);
    };
  }, []);

  useEffect(() => {
    const drawCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (!template) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

      // Draw uploaded photo
      if (photo) {
        const maxWidth = 310;
        const maxHeight = 340;

        const imgWidth = photo.width;
        const imgHeight = photo.height;

        const widthRatio = maxWidth / imgWidth;
        const heightRatio = maxHeight / imgHeight;
        const scale = Math.min(widthRatio, heightRatio);

        const drawWidth = imgWidth * scale;
        const drawHeight = imgHeight * scale;

        ctx.drawImage(photo, 155, 240, drawWidth, drawHeight);
      }

      // Draw text fields
      ctx.font = 'bold 36px Arial';
      ctx.fillStyle = '#fff';
      ctx.textBaseline = 'top';

      ctx.fillText(username, 785, 420);
      ctx.fillText(discordRole, 785, 580);
      ctx.fillText(occupation, 785, 720);
      ctx.fillText(iqLevel, 1308, 420);
      ctx.fillText(topActivity, 1305, 580);
      ctx.fillText(bullish, 1305, 720);
      ctx.fillText(motto, 260, 300);
    };

    drawCanvas();
  }, [template, username, discordRole, iqLevel, topActivity, occupation, bullish, motto, photo]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(null);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => setPhoto(img);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'custom-image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <main>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <h2 className="mx-auto w-max py-3 text-2xl font-semibold flex items-center gap-3">Create Your Intuition ID! <img src={logo} className='w-6' alt='intuition logo' /></h2>

        <Form
          username={username} setUsername={setUsername}
          discordRole={discordRole} setDiscordRole={setDiscordRole}
          iqLevel={iqLevel} setIqLevel={setIqLevel}
          topActivity={topActivity} setTopActivity={setTopActivity}
          occupation={occupation} setOccupation={setOccupation}
          bullish={bullish} setBullish={setBullish}
          motto={motto} setMotto={setMotto}
          setPhoto={setPhoto}
          handlePhotoUpload={handlePhotoUpload}
        />

        <div className="w-full flex justify-center">
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="border w-[85%] sm:w-[400px] md:w-[500px] h-auto border-gray-300 rounded-md shadow"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleDownload}
            className="mt-4 px-6 py-2 border border-transparent bg-black text-white rounded-md hover:border-black hover:bg-white hover:text-black transition"
          >
            Download from the Overmind
          </button>
        </div>
      </div>
      <p className='w-full text-center text-gray-600 my-3 text-sm mx-auto'>Built for the community. Give this <a className='underline text-cyan-900' href="https://github.com/giantcoconut/intuitid">repo</a> a star if you like this tool! </p>
    </main>
  );
}

export default App;
