import express from "express";
import pool from "../config/db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const userQuery = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
        if (userQuery.rows.length === 0) {
            return res.status(404).json({ message: "User not found. Please sign up." });
        }

        const user = userQuery.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            "your_jwt_secret", // replace with an env variable in production
            { expiresIn: "1h" }
        );

        res.status(200).json({ 
            message: "Login successful", 
            token: token,
            user: { name: user.name, email: user.email } 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
