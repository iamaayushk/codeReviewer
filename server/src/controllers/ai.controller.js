const generateContent = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;
        if (!code) {
            return res.status(400).send('code is required');
        }
        const response = await generateContent(code);
        res.send(response);
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).send('Error generating response');
    }
}
