import { sendEmail } from './sendEmailAction';
import React from 'react';

export default function Contact() {
    return (
        <section className="contact section" id="contact">
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

                {/* Contact Form */}
                <form className="contact-form padd-15" action={sendEmail}>
                    <div className="row">
                        <div className="form-item col-6 padd-15">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Name*" required className="form-control" />
                            </div>
                        </div>
                        <div className="form-item col-6 padd-15">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email*" required className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group">
                                <input type="text" name="subject" placeholder="Subject*" required className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message*" required className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 padd-15">
                            <button type="submit" className="btn" id={'send-button-id'} disabled={true} >Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
