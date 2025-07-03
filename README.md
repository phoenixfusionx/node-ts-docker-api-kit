# Node.js - Typescript API Starter

<p align="center">
  <img src="./public/logo.png" alt="Base API Logo"/>
</p>

Base API is a clean and extensible boilerplate for building secure, production-ready REST APIs using **Node.js**, **TypeScript**, **Express**, **MongoDB** and **Docker**.

This project is designed to **save time** for any developer who wants to quickly start building an API. It includes all the core functionality you'll likely need in most backend projects.

> **Note:** This starter template includes user authentication, email verification, password reset functionality, and comprehensive API documentation. It's production-ready and follows best practices for security and code organization.

## Getting Started

### Prerequisites

- Node.js (v16 or higher) and npm
- MongoDB database (local or cloud)
- Email service credentials (for verification emails)

### 1. Clone the Repository

```bash
git clone https://github.com/phoenixfusionx/node.js-typescript-api-starter.git
cd node.js-typescript-api-starter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root with the following variables:

```env
PORT=5000
BASE_URL=http://localhost
MONGO_URI=mongodb://localhost:27017/node.js-typescript-api-starter
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
SMTP_HOST=smtp.example.com
SMTP_PORT=587
COMPANY_NAME=YourCompanyName
```

### 4. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:5000](http://localhost:5000) to access the API.

## Docker Deployment

### Quick Start with Docker

1. Clone and navigate to the project:

```bash
git clone https://github.com/phoenixfusionx/node.js-typescript-api-starter.git
cd node.js-typescript-api-starter
```

2. Create your `.env` file with the configuration above.

3. Run with Docker Compose:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

This will:

- Build the application from Dockerfile
- Start the Node.js API server
- Start MongoDB container
- Automatically link both services in Docker network

### Production Deployment

For production environments, ensure you:

- Use strong, unique JWT secrets
- Configure proper MongoDB connection strings
- Set up email service credentials
- Use environment-specific configurations

## API Documentation

Once the server is running, visit the interactive Swagger documentation:

```
http://localhost:5000/api-docs
```

The documentation includes:

- All available endpoints
- Request/response schemas
- Authentication requirements
- Example requests and responses

## Project Structure

```
src/
├── app.ts          # Express app configuration
├── server.ts       # Server entry point
├── config/
│   └── db.ts       # Database configuration
├── controllers/
│   ├── auth.controller.ts       # Authentication logic
│   ├── blog.controller.ts       # Blog operations
│   └── user.controller.ts       # User management
├── middleware/
│   ├── auth.middleware.ts       # JWT authentication
│   ├── security.middleware.ts   # Security headers
│   └── validation.middleware.ts # Input validation
├── models/
│   ├── blog.model.ts          # Blog data model
│   └── user.model.ts          # User data model
├── routes/
│   ├── auth.routes.ts    # Authentication routes
│   ├── blog.routes.ts    # Blog routes
│   └── user.routes.ts    # User routes
├── types/
│   └── auth.d.ts        # TypeScript type definitions
└── utils/
    ├── jwt.ts           # JWT utilities
    └── mailer.ts        # Email functionality
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run test` - Run test suite

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)

## Author

Developed and maintained by [PhoenixFusionX](https://github.com/phoenixfusionx). For questions or contributions, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
