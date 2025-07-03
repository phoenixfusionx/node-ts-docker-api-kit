import { Router } from "express";
import {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
  addComment,
  deleteComment,
} from "../controllers/blog.controller";
import { authorize } from "../middleware/auth.middleware";
import {
  validateBlog,
  validateComment,
} from "../middleware/validation.middleware";

const router = Router();

// Public routes
router.get("/", getBlogs);
router.get("/:id", getBlog);

// Protected routes - admin only
router.post("/", authorize("admin"), validateBlog, createBlog);
router.put("/:id", authorize("admin"), validateBlog, updateBlog);
router.delete("/:id", authorize("admin"), deleteBlog);

// Comment routes - admin only
router.post("/:id/comments", authorize("admin"), validateComment, addComment);
router.delete("/:id/comments/:commentId", authorize("admin"), deleteComment);

export default router;
