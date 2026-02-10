import { useState, useEffect } from "react";

function Submissions() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/contacts");
            const data = await response.json();

            if (response.ok) {
                setSubmissions(data);
            } else {
                setError("Failed to load submissions");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("Failed to load submissions");
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    };

    const getTypeBadge = (type) => {
        const badges = {
            patient: "badge-patient",
            volunteer: "badge-volunteer",
            general: "badge-general",
        };
        return badges[type] || "badge-general";
    };

    if (loading) {
        return (
            <div className="submissions-page">
                <div className="loading">Loading submissions...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="submissions-page">
                <div className="alert alert-error">{error}</div>
            </div>
        );
    }

    return (
        <div className="submissions-page">
            <div className="submissions-container">
                <h2>All Submissions</h2>
                <div className="submissions-summary">
                    <p>
                        Total submissions: <strong>{submissions.length}</strong>
                    </p>
                    <p>
                        Patients:{" "}
                        <strong>
                            {submissions.filter((s) => s.type === "patient").length}
                        </strong>{" "}
                        | Volunteers:{" "}
                        <strong>
                            {submissions.filter((s) => s.type === "volunteer").length}
                        </strong>{" "}
                        | General:{" "}
                        <strong>
                            {submissions.filter((s) => s.type === "general").length}
                        </strong>
                    </p>
                </div>

                {submissions.length === 0 ? (
                    <div className="no-data">No submissions yet.</div>
                ) : (
                    <div className="table-container">
                        <table className="submissions-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Type</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.map((submission) => (
                                    <tr key={submission._id}>
                                        <td>{formatDate(submission.createdAt)}</td>
                                        <td>{submission.name}</td>
                                        <td>{submission.email}</td>
                                        <td>{submission.phone || "N/A"}</td>
                                        <td>
                                            <span className={`badge ${getTypeBadge(submission.type)}`}>
                                                {submission.type}
                                            </span>
                                        </td>
                                        <td className="message-cell">{submission.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Submissions;
