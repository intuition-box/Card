import React from 'react';

const Form = ({
  username, setUsername,
  discordRole, setDiscordRole,
  iqLevel, setIqLevel,
  topActivity, setTopActivity,
  occupation, setOccupation,
  bullish, setBullish,
  motto, setMotto,
  setPhoto
}) => {

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

  const handleSubmit = (data) => {
    console.log('submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-md font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={19}
              className="mt-1 p-3 bg-white block w-full rounded-md border-1 border-gray-400 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name (max. 19 characters)"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-md font-medium mb-1">Discord Role</label>
            <select
              value={discordRole}
              onChange={(e) => setDiscordRole(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="" disabled hidden>Select your role</option>
              <option value="Inquirer">🧿 Inquirer</option>
              <option value="Wanderer">🌌 Wanderer</option>
              <option value="Traveler">🗺️ Traveler</option>
              <option value="Disciple">📜 Disciple</option>
              <option value="Enchanter">✨ Enchanter</option>
              <option value="Illuminated">🌟 Illuminated</option>
              <option value="Conscious">🌀 Conscious</option>
              <option value="Oracle">🔮 Oracle</option>
              <option value="Templar">🛡️ Templar</option>
              <option value="Core">💠 Core</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-md font-medium mb-1">Intuit Occupation</label>
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="" disabled hidden>Select your occupation</option>
              <option value="Content Ninja">🥷 Content Ninja</option>
              <option value="Relicorrrr">🧿 Relicorrrr</option>
              <option value="Knowledge Forager">🧭 Knowledge Forager</option>
              <option value="Meme Operative">🕶️ Meme Operative</option>
              <option value="Certified Shitposter">💩 Certified Shitposter</option>
              <option value="Intuition Channeler">🔮 Intuition Channeler</option>
              <option value="Thread Architect">🧵 Thread Architect</option>
              <option value="Yapper-in-Chief">📣 Yapper-in-Chief</option>
              <option value="Games Night Advocate">🎮 Games Night Advocate</option>
            </select>
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-md font-medium mb-1">IQ Level</label>
            <select
              value={iqLevel}
              onChange={(e) => setIqLevel(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="" disabled hidden>Select your IQ level</option>
              <option value="I need more brain juice">Less than 100,000 IQ points</option>
              <option value="Basic instincts coming online">100,000 - 500,000 IQ points</option>
              <option value="My wisdom is growing">500,000 - 2,000,000 IQ points</option>
              <option value="Thoughts are syncing with the graph">2,000,000 - 5,000,000 IQ points</option>
              <option value="Einstein has nothing on me">5,000,000 - 10,000,000 IQ points</option>
              <option value="I am the source of truth">More than 10,000,000 IQ points</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-md font-medium mb-1">Top Community Activity</label>
            <select
              value={topActivity}
              onChange={(e) => setTopActivity(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="" disabled hidden>Select your top activity</option>
              <option value="Solving Riddles">🧠 Solving Riddles</option>
              <option value="Creating Claims in the Portal">✍️ Creating Claims in the Portal</option>
              <option value="Staking on Claims">💰 Staking on Claims</option>
              <option value="Taking on Community Challenges">🏆 Community Challenges</option>
              <option value="Yapping on Discord">📣 Yapping on Discord</option>
              <option value="Joining Spaces">🎙️ Joining Spaces</option>
              <option value="Decoding Lore Signals">🧩 Decoding Lore Signals</option>
            </select>
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-md font-medium mb-1">How Bullish are you</label>
            <select
              value={bullish}
              onChange={(e) => setBullish(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="" disabled hidden>Select your level</option>
              <option value="Prehistoric Pre-Sale">🦴 Prehistoric Pre-Sale</option>
              <option value="Mildly Paranoid Optimist">🤖 Mildly Paranoid Optimist</option>
              <option value="Full Moon Mode">🌕 Full Moon Mode</option>
              <option value="Quantum-Backed Conviction">🧪 Quantum-Backed Conviction</option>
              <option value="Betting the Simulation">🔥 Betting the Simulation</option>
              <option value="DCA Until the Sun Explodes">📊 DCA Until the Sun Explodes</option>
              <option value="Signed the Smart Contract in Blood">🧿 Signed the Smart Contract in Blood</option>
              <option value="Bags Are in Orbit">🛰️ Bags Are in Orbit</option>
              <option value="I'd Literally Die for the Protocol">💀 Would Literally Die for the Protocol</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Upload Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:text-sm file:font-semibold file:shadow-2xl bg-white file:text-black hover:file:bg-blue-100"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
