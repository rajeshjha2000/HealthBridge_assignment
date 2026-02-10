import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1 className="hero-title">Welcome to HealthBridge</h1>
                <p className="hero-subtitle">
                    Your trusted partner in accessible healthcare support
                </p>
                <p className="hero-description">
                    We connect patients with healthcare resources and volunteers with
                    meaningful opportunities to make a difference. Whether you need
                    medical assistance or want to contribute to our mission, we're here
                    to help.
                </p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-primary">
                        Get Support
                    </Link>
                    <Link to="/chat" className="btn btn-secondary">
                        Chat with Us
                    </Link>
                </div>
            </div>

            <div className="features-section">
                <div className="feature-card">
                    <h3>Patient Support</h3>
                    <p>
                        Access healthcare resources, book appointments, and get the care
                        you need.
                    </p>
                </div>
                <div className="feature-card">
                    <h3>Volunteer Opportunities</h3>
                    <p>
                        Join our team of dedicated volunteers making a real impact in
                        healthcare.
                    </p>
                </div>
                <div className="feature-card">
                    <h3>24/7 FAQ Support</h3>
                    <p>
                        Get instant answers to common questions through our automated chat
                        assistant.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
