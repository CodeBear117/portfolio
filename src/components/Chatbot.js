import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:5001/chat', { message });
            setChatHistory([...chatHistory, { user: message, bot: response.data.message }]);
            setMessage('');
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div>
            <div>
                {chatHistory.map((entry, index) => (
                    <div key={index}>
                        <p>User: {entry.user}</p>
                        <p>Bot: {entry.bot}</p>
                    </div>
                ))}
            </div>
            <input value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chatbot;