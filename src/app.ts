import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import authRoutes from "./rotues/auth.routes";
import usersRoutes from "./rotues/user.routes";
import {
  securityHeaders,
  apiLimiter,
  corsMiddleware,
} from "./middleware/security.middleware";

const app = express();

// Apply security middleware
app.use(securityHeaders);
app.use(corsMiddleware);
app.use(apiLimiter);

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
