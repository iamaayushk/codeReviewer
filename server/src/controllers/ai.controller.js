const generateContent = require('../services/ai.service');

module.exports.getResponse = async (req, res) => {
    try {
        const prompt = req.query.prompt;
        if (!prompt) {
            return res.status(400).send('Prompt is required');
        }
        const response = await generateContent(prompt);
        res.send(response);
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).send('Error generating response');
    }
}
