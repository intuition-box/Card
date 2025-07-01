import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState('');
    const [discordRole, setDiscordRole] = useState('Oracle');
    const [iqLevel, setIqLevel] = useState('');
    const [topCommunityActivity, setTopCommunityActivity] = useState('');
    const [intuitOccupation, setIntuitOccupation] = useState('');
    const [howBullish, setHowBullish] = useState('');
    const [badgeMotto, setBadgeMotto] = useState('');


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

    const handleSubmit = () => {

    }
    return (

        <form>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Name:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
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

        </form>
    )
}

export default Form
