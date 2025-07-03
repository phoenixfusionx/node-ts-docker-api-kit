import swaggerJSDoc from "swagger-jsdoc";

require("dotenv").config();

const SWAGGER_PORT: number = parseInt(process.env.PORT || "5000", 10);
const SWAGGER_BASE_URL: string = process.env.BASE_URL || "http://localhost";

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
        url: `${SWAGGER_BASE_URL}:${SWAGGER_PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
