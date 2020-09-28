import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import './Footer.css';
import Button from './Button';

function Footer() {
  return (
    <div className='footer__container'>
      <section className='footer__subscription'>
        <p className='footer__subscriptionHeading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer__subscriptionText'>
          You can unsubscribe at any time.
        </p>
        <div className='footer__inputAreas'>
          <form>
            <input
              className='footer__input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer__links'>
        <div className='footer__linkWrapper'>
          <div className='footer__linkItems'>
            <h2>About Us</h2>
            <Link to='/signup'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer__linkItems'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer__linkWrapper'>
          <div className='footer__linkItems'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer__linkItems'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='footer__social'>
        <div className='footer__socialWrap'>
          <div className='footer__logo'>
            <Link to='/' className='footer__socialLogo'>
              <MdFingerprint className='footer__navbarIcon' />
              LAVISH
            </Link>
          </div>
          <small className='footer__websiteRights'>LAVISH © 2020</small>
          <div className='footer__socialIcons'>
            <Link
              className='footer__socialIconLink'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='footer__socialIconLink'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='footer__socialIconLink'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='footer__socialIconLink'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='footer__socialIconLink'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;