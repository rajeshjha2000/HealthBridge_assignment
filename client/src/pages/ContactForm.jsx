import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "general",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("http://localhost:5000/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    type: "general",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="form-container">
                <h2>Contact Us</h2>
                <p className="form-description">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">I am a *</label>
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="general">General Inquiry</option>
                            <option value="patient">Patient</option>
                            <option value="volunteer">Volunteer</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                    {status === "success" && (
                        <div className="alert alert-success">
                            Thank you! Your message has been submitted successfully.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="alert alert-error">
                            Something went wrong. Please try again.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
