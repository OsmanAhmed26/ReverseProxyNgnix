const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
