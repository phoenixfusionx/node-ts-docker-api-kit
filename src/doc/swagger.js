const swaggerJSDoc = require("swagger-jsdoc");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || "http://localhost";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js API Starter",
      version: "1.0.0",
      description:
        "Node.js API Starter with Node.js, Express, TypeScript, and MongoDB",
    },
    servers: [
      {
        url: `${BASE_URL}:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
