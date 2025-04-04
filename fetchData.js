exports.handler = async () => {
    const fetch = require('node-fetch');
    
    try {
        const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
        if (!apiKey) throw new Error("API key is missing or not accessible.");

        const spreadsheetId = "your_spreadsheet_id"; // Update this
        const range = "Dialog1!A2:H10";
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);

        const data = await response.json();
        return { statusCode: 200, body: JSON.stringify(data) };

    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
