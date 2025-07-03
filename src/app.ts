import express, { Request, Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import authRoutes from "./rotues/auth.routes";
import usersRoutes from "./rotues/users.routes";

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.BASE_URL || "http://localhost:5000",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400, // 24 hours
};

app.use(cors(corsOptions));

// Parse JSON requests
app.use(express.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Authentication routes
app.use("/api/auth", authRoutes);

// Users routes
app.use("/api/users", usersRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

export default app;
