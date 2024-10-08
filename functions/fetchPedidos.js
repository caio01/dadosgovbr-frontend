const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const apiUrl = `https://api.jsonbin.io/v3/b/${process.env.BIN_ID}`;
    const apiKey = process.env.API_KEY;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Master-Key': apiKey
            }
        });
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data.record),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao buscar os dados da API' })
        };
    }
};
