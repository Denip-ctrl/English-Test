exports.handler = async () => {
    try {
        const apiKey = process.env.GOOGLE_SHEETS_API_KEY; // Secure API key retrieval
        const spreadsheetId = "19thbKkn07eHqgebQzS4gVo4i_J-HSO9Xz8TNd76zcqU";
        const range = "Dialog1!A2:H10";
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

        console.log("Using API Key:", apiKey ? "Loaded Successfully" : "Missing!");

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error ${response.status}`);

        const data = await response.json();
        console.log("Fetched Data:", data);

        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("Function Error:", error);
        return {
            statusCode: 500,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ error: error.message }),
        };
    }
};
