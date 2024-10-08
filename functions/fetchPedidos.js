const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // Construir o URL da API usando o BIN_ID a partir das variáveis de ambiente
    const apiUrl = `https://api.jsonbin.io/v3/b/${process.env.BIN_ID}`;
    const apiKey = process.env.API_KEY; // Chave da API do JSONBin.io armazenada como variável de ambiente

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Master-Key': apiKey
            }
        });
        const data = await response.json(); // Extrai o conteúdo JSON da resposta
        return {
            statusCode: 200,
            body: JSON.stringify(data.record), // Retorna os dados dentro do objeto 'record'
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao buscar os dados da API' }),
        };
    }
};
