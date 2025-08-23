import express from "express";
import pool from "../config/db.js";
import fs from "fs";
import path from "path";
import { transporter } from "../config/email.js";
import { generateNDA } from "../utils/generateNDA.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    companyName,
    city,
    state,
    country,
    pincode,
    agree,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO lead_nda 
        (email, first_name, last_name, company_name, city, state, country, pincode, agree, timestramp) 
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, NOW()) RETURNING *`,
      [
        email,
        firstName,
        lastName,
        companyName || "",
        city || "",
        state || "",
        country || "",
        pincode || "",
        agree ? "yes" : "no",
      ]
    );

    const userData = result.rows[0];

    const tempDir = path.join(process.cwd(), "temp");
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const pdfPath = path.join(tempDir, `NDA_${firstName}_${Date.now()}.pdf`);

    await generateNDA(pdfPath, {
      firstName,
      lastName,
      email,
      companyName: companyName || "N/A",
      city,
      state,
      country,
      pincode,
      agree,
      timestramp: result.rows[0].timestramp
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your NDA Submission",
      text: `Hello ${firstName},\n\nThank you for submitting the NDA. Please find the attached PDF.`,
      attachments: [{ filename: path.basename(pdfPath), path: pdfPath }],
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.error("Email error:", err);
      else console.log("Email sent:", info.response);
    });

    res.json({ success: true, data: userData, pdfPath: `/temp/${path.basename(pdfPath)}` });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
