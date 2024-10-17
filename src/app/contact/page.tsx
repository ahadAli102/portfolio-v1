'use client'
import React, { useState } from "react";

export interface EmailBody {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [emailData, setEmailData] = useState<EmailBody>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmailData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        setIsLoading(true);
        setError("");
        setSuccess("");
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuccess("Message sent successfully!");
            setEmailData({ name: "", email: "", subject: "", message: "" });
        }).catch(error => {
            setError("Failed to send message. Please try again.");
            console.error("Error sending message:", error);
        }).finally(() => setIsLoading(false));
    };

    return (
        <>
            <section className="contact section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* contact-info-item */}
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-map-marker"/>
                            </div>
                            <h4>Address</h4>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        {/* contact-info-item Ended */}
                        {/* contact-info-item */}
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-phone"/>
                            </div>
                            <h4>Call Us On</h4>
                            <p>+88 01551058902</p>
                        </div>
                        {/* contact-info-item Ended */}
                        {/* contact-info-item */}
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-envelope"/>
                            </div>
                            <h4>Email</h4>
                            <p>linkonahad10@email.com</p>
                        </div>
                        {/* contact-info-item Ended */}
                    </div>
                    {/* Contact Form */}
                    <div className="row">
                        <form className="contact-form padd-15">
                            <div className="row">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Name*"
                                            value={emailData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email*"
                                            value={emailData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control"
                                            placeholder="Subject*"
                                            value={emailData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            placeholder="Your Message*"
                                            value={emailData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 padd-15">
                                    <button className="btn" disabled={isLoading} onClick={handleSubmit}>
                                        {isLoading ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </div>
                            {error && <div className="contact-info-item padd-15">{error}</div>}
                            {success && <div className="contact-info-item padd-15">{success}</div>}
                        </form>
                    </div>
                    {/* Contact Form Ended */}
                </div>
            </section>
        </>
    );
};

export default Contact;
