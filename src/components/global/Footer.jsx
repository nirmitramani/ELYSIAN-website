import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFontAwesome, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                        ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                    </p>
                    <div className="icons">
                       <Link to="https://www.facebook.com/"><i><FontAwesomeIcon icon={faFacebook} /></i></Link>
                       <Link to="https://www.facebook.com/"><i><FontAwesomeIcon icon={faXTwitter} /></i></Link>
                       <Link to="https://www.linkedin.com/"><i><FontAwesomeIcon icon={faLinkedin} /></i></Link>
                       <Link to="https://www.instagram.com/"><i><FontAwesomeIcon icon={faInstagram} /></i></Link>
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> City, Country</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p> elysian@gmail.com</p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2 className='footer_text'>ELYSIAN</h2>
                    <p className="menu">
                        <Link to='/'> Home</Link> |
                        <Link to='/properties'> Properties</Link> |
                        <Link to='/contact-us'> Contact Us</Link>
                    </p>
                    <p className="name"> Elysian &copy; 2016</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
