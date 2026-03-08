const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Book API',
            version: '1.0.0',
            description: 'API Documentation',
        },
        servers: [
            {
                url: process.env.SERVER_URL || 'http://localhost:3000',
                description: process.env.NODE_ENV === 'production' ? 'Production server' : 'Local server'
            }
        ],
    },
    apis: ['./routes/*.js'], 
};

module.exports = swaggerJsdoc(options);