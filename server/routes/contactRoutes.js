const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST - submit a new contact form
router.post("/", async (req, res) => {
    try {
        const { name, email, phone, type, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "Name, email and message are required" });
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            message,
        });

        const saved = await newContact.save();
        res.status(201).json({ message: "Form submitted successfully!", data: saved });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// GET - get all submissions
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not fetch submissions" });
    }
});

module.exports = router;
