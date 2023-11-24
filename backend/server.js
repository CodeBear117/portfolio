require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5001;

// Middleware to parse JSON payloads in POST requests
app.use(express.json());

// Basic route to check server status
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route to handle chat requests
app.post('/chat', async (req, res) => {
    const userInput = req.body.message;

    // For now, just echo the user's message
    res.json({ message: `You said: ${userInput}` });
});

// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/chatbot', async (req, res) => {
    const userInput = req.body.message;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: userInput,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const botResponse = response.data.choices[0].text.trim();
        res.json({ message: botResponse });
    } catch (error) {
        console.error("Error querying OpenAI:", error);
        res.status(500).json({ message: "Error querying OpenAI" });
    }
});
