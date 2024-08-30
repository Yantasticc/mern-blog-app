import express from 'express';
import { createBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById } from '../controllers/blogController.js';

const blogRouter = express.Router();

// CREATE NEW BLOG
blogRouter.post('/create', createBlog);

// GET ALL BLOGS
blogRouter.get('/', getAllBlogs);

// GET BLOG BY ID
blogRouter.get('/:id', getBlogById);

// UPDATE BLOG BY ID
blogRouter.put('/:id', updateBlogById);

// DELETE BLOG BY ID
blogRouter.delete('/:id', deleteBlogById);

export default blogRouter;
