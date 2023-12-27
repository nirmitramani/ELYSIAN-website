import React, { useEffect, useState } from 'react';
import phoneImg from '../../assets/images/phone-icon.png';
import emailImg from '../../assets/images/email-icon.png';
import '../../index.css'
import { NavLink } from 'react-router-dom';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
            // Display errors using iziToast
            iziToast.error({
                title: 'Error',
                message: 'Please fill in all the required fields correctly.',
                position: 'topCenter',
            });
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                // Display errors using iziToast
                iziToast.error({
                    title: 'Error',
                    message: 'Please enter a valid email address.',
                    position: 'topCenter',
                });
            } else {
                console.log("dd");
                // Save data to localStorage
                localStorage.setItem('contactFormData', JSON.stringify(formData));
    
                // Display success message
                iziToast.success({
                    title: 'Success',
                    message: 'Form submitted successfully!',
                    position: 'topCenter',
                });
    
                // Clear form data
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        }
    };
    

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 800);
            return () => clearTimeout(timeout);
        }, []);
    
        if (loading) {
            return <div id="js-preloader" class="js-preloader">
                <div class="preloader-inner">
                    <span class="dot"></span>
                    <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>;
        }
        return (
            <>
                <div className="page-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="breadcrumb">
                                  <NavLink to={'/'}>Home</NavLink> / Contact Us</span>
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-page section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h6>| Contact Us</h6>
                                    <h2>Get In Touch With Our Agents</h2>
                                </div>
                                <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you htmlFor visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="item phone">
                                            <img src={phoneImg} alt="" style={{ maxWidth: '52px' }} />
                                            <h6>010-020-0340<br /><span>Phone Number</span></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="item email">
                                            <img src={emailImg} alt="" style={{ maxWidth: '52px' }} />
                                            <h6>info@villa.co<br /><span>Business Email</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form id="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="name">Full Name</label>
                                                <input
                                                    type="name"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your Name..."
                                                    autoComplete="on"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your E-mail..."
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="subject">Subject</label>
                                                <input
                                                    type="subject"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Subject..."
                                                    autoComplete="on"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="message">Message</label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Your Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button id="form-submit" className="orange-button" onClick={handleSubmit}>
                                                    Send Message
                                                </button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-12">
                                <div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameBorder="0" style={{ border: '0', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}
                                        allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    export default ContactUs;
