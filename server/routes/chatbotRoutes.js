const express = require("express");
const router = express.Router();

// FAQ data - keyword based responses
const faqData = [
    {
        keywords: ["appointment", "book", "schedule", "visit"],
        answer:
            "You can book an appointment by calling our helpline at 1800-XXX-XXXX or visit your nearest healthcare center. Walk-ins are also welcome during working hours (9 AM - 5 PM).",
    },
    {
        keywords: ["volunteer", "join", "help", "contribute"],
        answer:
            "We'd love to have you as a volunteer! Please fill out the contact form on our website with type 'Volunteer' and we'll get back to you within 2-3 days.",
    },
    {
        keywords: ["medicine", "drug", "prescription", "medication"],
        answer:
            "For medicine-related queries, please consult with our healthcare professionals. You can book a consultation through our appointment system.",
    },
    {
        keywords: ["emergency", "urgent", "ambulance"],
        answer:
            "For emergencies, please call 112 (National Emergency Number) or 108 (Ambulance) immediately. Do not wait for an online response in case of emergencies.",
    },
    {
        keywords: ["insurance", "coverage", "cashless"],
        answer:
            "We accept most major health insurance providers. Please bring your insurance card and a valid ID when visiting. Contact our billing department for specific coverage questions.",
    },
    {
        keywords: ["timing", "hours", "open", "when", "time"],
        answer:
            "Our healthcare centers are open Monday to Saturday, 9:00 AM to 5:00 PM. We are closed on Sundays and public holidays.",
    },
    {
        keywords: ["report", "test", "result", "lab"],
        answer:
            "Lab reports are usually available within 24-48 hours. You can collect them from the center or we can email them to your registered email address.",
    },
    {
        keywords: ["donate", "donation", "fund", "support"],
        answer:
            "Thank you for your generosity! You can donate through our website or directly at any of our centers. All donations are tax-deductible under Section 80G.",
    },
    {
        keywords: ["hi", "hello", "hey", "good morning", "good evening"],
        answer:
            "Hello! Welcome to HealthBridge Support. How can I help you today? You can ask me about appointments, volunteering, medicines, timings, and more.",
    },
    {
        keywords: ["thank", "thanks", "bye", "goodbye"],
        answer:
            "You're welcome! If you have any more questions, feel free to ask. Take care and stay healthy! 😊",
    },
];

// POST - get chatbot response
router.post("/", (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const userMsg = message.toLowerCase();

        // find matching FAQ
        let bestMatch = null;
        let maxMatches = 0;

        for (let faq of faqData) {
            let matchCount = 0;
            for (let keyword of faq.keywords) {
                if (userMsg.includes(keyword)) {
                    matchCount++;
                }
            }
            if (matchCount > maxMatches) {
                maxMatches = matchCount;
                bestMatch = faq;
            }
        }

        if (bestMatch) {
            res.json({ reply: bestMatch.answer });
        } else {
            res.json({
                reply:
                    "I'm sorry, I couldn't understand your question. You can ask me about appointments, volunteering, medicines, timings, donations, or emergencies. Or please fill out our contact form for detailed help!",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Chatbot error" });
    }
});

module.exports = router;
