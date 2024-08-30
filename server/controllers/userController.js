import UsersDB from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from "dotenv"
dotenv.config();
const JTW_SECRET_KEY = process.env.JTW_SECRET_KEY;

// CREATE NEW USER
async function createUser(req, res) {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send({ message: "Enter all the required fields" });
        }

        // Check if user already exists
        const existingUser = await UsersDB.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "User already exists" });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new UsersDB({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        const newUser = await user.save();

        res.status(201).send({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// LOGIN USER
async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(400).send({ message: "Enter all the required fields" });
        }

        // Check if user exists
        const user = await UsersDB.findOne({ username });
        if(!user) {
            res.status(400).send({message: "Invalid username or password"})
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).send({ message: "Invalid username or password" });
        }

        // Generate a token
        const token = jwt.sign({ userId: user._id }, JTW_SECRET_KEY, { expiresIn: '1h' });

        res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export { createUser, loginUser };
