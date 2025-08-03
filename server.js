const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Basic Hello World route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Hello World - Warp Project</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        margin: 50px;
                        background-color: #f0f0f0;
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        display: inline-block;
                    }
                    h1 { color: #333; }
                    .subtitle { color: #666; margin-top: 10px; }
                    .info { margin-top: 20px; font-size: 14px; color: #888; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌍 Hello, World!</h1>
                    <p class="subtitle">Welcome to the Warp Hello-World Project</p>
                    <p class="info">
                        This is a demonstration project to validate the Warp structure.<br>
                        Project: Hello-World | Framework: Express.js | Environment: Node.js
                    </p>
                </div>
            </body>
        </html>
    `);
});

// API endpoint for programmatic access
app.get('/api/hello', (req, res) => {
    res.json({
        message: "Hello, World!",
        project: "Hello-World",
        framework: "Express.js",
        timestamp: new Date().toISOString(),
        status: "success"
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: "healthy",
        project: "Hello-World",
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Hello-World server running on port ${PORT}`);
    console.log(`📍 Visit: http://localhost:${PORT}`);
    console.log(`🔍 API: http://localhost:${PORT}/api/hello`);
    console.log(`❤️  Health: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Received SIGTERM, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 Received SIGINT, shutting down gracefully...');
    process.exit(0);
});
