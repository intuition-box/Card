import React, { useState } from 'react'

const Form =  ({
  username, setUsername,
  discordRole, setDiscordRole,
  iqLevel, setIqLevel,
  topActivity, setTopActivity,
  occupation, setOccupation,
  bullish, setBullish,
  motto, setMotto,
  setPhoto
})  => {

    // const [username, setUsername] = useState('');
    // const [discordRole, setDiscotrbrthrdRole] = useState('Inquirer');
    // const [iqLevel, setIqLevel] = useState('');
    // const [topCommunityActivity, setTopCommunityActivity] = useState('');
    // const [intuitOccupation, setIntuitOccupation] = useState('');
    // const [howBullish, setHowBullish] = useState('');
    // const [badgeMotto, setBadgeMotto] = useState('');


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
        console.log('submitted')
    }

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'custom-image.png';
        link.href = canvas.toDataURL();
        link.click(); n
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="space-y-4">

                <div className="flex  gap-4">
                    <div className='w-1/2'>
                        <label className="block text-md font-medium">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 p-3 block w-full rounded-md border-1 border-gray-400 shadow-sm    focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className='w-1/2'>
                        <label className="block text-md font-medium  mb-1">Discord Role</label>
                        <select
                            value={discordRole}
                            onChange={(e) => setDiscordRole(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
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

                <div className="flex gap-4">
                    <div className='w-1/2'>
                        <label className="block text-md font-medium  mb-1">Intuit Occupation</label>
                        <select
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
                            <option value="Content Ninja">🥷 Content Ninja</option>
                            <option value="Psi-Class Researcher">🧪 Psi-Class Researcher</option>
                            <option value="Knowledge Forager">🧭 Knowledge Forager</option>
                            <option value="Signal Archaeologist">💾 Signal Archaeologist</option>
                            <option value="Meme Operative Level 3">🕶️ Meme Operative Level 3</option>
                            <option value="Vault Whisperer">🗃️ Vault Whisperer</option>
                            <option value="Intuition Channeler">🔮 Intuition Channeler</option>
                            <option value="Data Washer">🧼 Data Washer</option>
                            <option value="Thread Architect">🧵 Thread Architect</option>
                            <option value="Chain-Rift Navigator">⛓️ Chain-Rift Navigator</option>
                        </select>

                    </div>
                    <div className='w-1/2'>
                        <label className="block text-md font-medium  mb-1">IQ Level</label>
                        <select
                            value={iqLevel}
                            onChange={(e) => setIqLevel(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
                            <option value="<100k">Less than 100,000 IQ points</option>
                            <option value="100k-500k">100,000 - 500,000 IQ points</option>
                            <option value="500k-2m">500,000 - 2,000,000 IQ points</option>
                            <option value="2m-5m">2,000,000 - 5,000,000 IQ points</option>
                            <option value="5m-10m">5,000,000 - 10,000,000 IQ points</option>
                            <option value=">10m">More than 10,000,000 IQ points</option>
                        </select>

                    </div>
                </div>

                <div className="flex gap-4">
                    <div className='w-1/2'>
                        <label className="block text-md font-medium  mb-1">Top Community Activity</label>
                        <select
                            value={topActivity}
                            onChange={(e) => setTopActivity(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
                            <option value="Decoding Lore Signals">🧩 Decoding Lore Signals</option>
                            <option value="UFO in Voice Chat">🛸 UFO in Voice Chat</option>
                            <option value="Theory Thread Infiltration">🧠 Theory Thread Infiltration</option>
                            <option value="Meme File Distribution">📁 Meme File Distribution</option>
                            <option value="Watching the Network">🔭 Watching the Network</option>
                            <option value="Portal System Maintenance">🎛️ Portal System Maintenance</option>
                            <option value="Lost in Triple Space">🧑‍🚀 Lost in Triple Space</option>
                            <option value="Poking the Consensus Hole">🕳️ Poking the Consensus Hole</option>
                            <option value="Scroll Carrier on Standby">📜 Scroll Carrier on Standby</option>
                        </select>

                    </div>
                    <div className='w-1/2'>
                        <label className="block text-md font-medium  mb-1">How Bullish are you</label>
                        <select
                            value={bullish}
                            onChange={(e) => setBullish(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
                            <option value="Prehistoric Pre-Sale">🦴 Prehistoric Pre-Sale</option>
                            <option value="Mildly Paranoid Optimist">🤖 Mildly Paranoid Optimist</option>
                            <option value="Full Moon Mode">🌕 Full Moon Mode</option>
                            <option value="Quantum-Backed Belief">🧪 Quantum-Backed Belief</option>
                            <option value="Bet the Simulation">🔥 Bet the Simulation</option>
                            <option value="DCA'd Into the Multiverse">📊 DCA'd Into the Multiverse</option>
                            <option value="Tattooed the Contract">🧿 Tattooed the Contract</option>
                            <option value="Broadcasted My Bags to Space">🛰️ Broadcasted My Bags to Space</option>
                            <option value="I Am the Exit Liquidity">💀 I Am the Exit Liquidity</option>
                        </select>

                    </div>
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

            {/* <div className="text-center">
                <button
                    onClick={handleDownload}
                    className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-blue-900 transition"
                >
                    Download from the Overmind
                </button>
            </div> */}
        </form>
    )
}

export default Form
