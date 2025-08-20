import express from "express";
import pool from "../config/db.js"; // adjust path if needed

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    email,
    firstName,
    middleName,
    lastName,
    road,
    city,
    state,
    country,
    pincode,
    agree,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO lead_nda 
        (email, first_name, middle_name, last_name, road, city, state, country, pincode, agree, timestramp) 
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, NOW()) RETURNING *`,
      [email, firstName, middleName, lastName, road, city, state, country, pincode, agree ? "yes" : "no"]
    );
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
