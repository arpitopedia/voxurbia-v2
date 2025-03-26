const express = require('express');
const path = require('path');
const app = express();
let port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Send index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const startServer = () => {
    app.listen(port)
        .on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${port} is busy, trying ${port + 1}...`);
                port += 1;
                startServer();
            } else {
                console.error(err);
            }
        })
        .on('listening', () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
};

startServer();