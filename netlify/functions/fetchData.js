exports.handler = async () => {
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY; // Secure API key from Netlify env
    const spreadsheetId = "19thbKkn07eHqgebQzS4gVo4i_J-HSO9Xz8TNd76zcqU";
    const range = "Dialog1!A2:H10";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url); // No need for require('node-fetch')
        const data = await response.json();
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
