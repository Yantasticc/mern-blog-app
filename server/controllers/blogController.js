import BlogPost from '../models/blogPostModel.js';

// CREATE NEW BLOG
async function createBlog(req, res) {
    try {
        const { title, content, author, category, tags, featuredImage, readingTime } = req.body;

        if (!title || !content || !author || !category || !tags) {
            return res.status(400).send({ message: "Enter all the required fields" });
        }

        const newBlog = new BlogPost({
            title,
            content,
            author,
            category,
            tags,
            featuredImage,
            readingTime
        });

        const savedBlog = await newBlog.save();
        res.status(201).send({ message: "Blog created successfully", blog: savedBlog });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// GET ALL BLOGS
async function getAllBlogs(req, res) {
    try {
        const blogs = await BlogPost.find();
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// GET BLOG BY ID
async function getBlogById(req, res) {
    try {
        const blog = await BlogPost.findById(req.params.id);
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// UPDATE BLOG BY ID
async function updateBlogById(req, res) {
    try {
        const blog = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({ message: "Blog updated successfully", blog });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// DELETE BLOG BY ID
async function deleteBlogById(req, res) {
    try {
        const blog = await BlogPost.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export { createBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById };
