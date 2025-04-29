'use client'
import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://mail-sender-2z53.onrender.com/api/mail/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            toast.success('Message sent successfully!');
            setFormData({name: '', email: '', subject: '', message: ''});
        } catch (error) {
            toast.error('Failed to send message.');
        } finally {
            setLoading(false);
        }
    };

    const isDisabled = loading || !formData.name || !formData.email || !formData.subject || !formData.message;

    return (
        <section className="contact section" id="contact">
            <ToastContainer position="top-right" autoClose={3000}/>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i className="fa fa-map-marker"/></div>
                        <h4>Address</h4>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i className="fa fa-phone"/></div>
                        <h4>Call</h4>
                        <p>+88 01551058902</p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i className="fa fa-envelope"/></div>
                        <h4>Email</h4>
                        <p>linkonahad10@email.com</p>
                    </div>
                </div>

                <form className="contact-form padd-15" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-item col-6 padd-15">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Name*" required className="form-control"
                                       value={formData.name} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-item col-6 padd-15">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email*" required className="form-control"
                                       value={formData.email} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group">
                                <input type="text" name="subject" placeholder="Subject*" required
                                       className="form-control" value={formData.subject} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message*" required className="form-control"
                                          value={formData.message} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 padd-15">
                            <button type="submit" className="btn" id='send-button-id' disabled={isDisabled}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}