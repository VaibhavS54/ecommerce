
import React from 'react';
import './contact.css';
import Maps from '../../assets/map.png';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="contact-info">
        <div className="contact-item">
          <h3>+917993521114</h3>
        </div>
        <div className="contact-item">
          <h3>Shop@jijivishaonline.com</h3>
        </div>
        <div className="contact-item">
          <p>Plot No:3 9 M R Enclave Himayat
        Sagar Bandlaguda, Hyderabad, Telangana, India, 500091</p>
        </div>
      </div>
      <div className="map">
        <img className="maps" src={Maps}></img>
      </div>
      <form className="contact-form">
      <h2>We are here for you 24×7 customer care support</h2>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject (optional)" />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <footer>
        <h3>JIJIVISHA: OUR PERSPECTIVE</h3>
        <p>
        India wears her beauty in the colorful textiles, breathtaking ornaments, and inspiring stories that come alive in her streets. There is magic in the hands that
work the loom, in the eyes that pore over a needle, in the brushstrokes that paint life. And yet few things can sum it all up, can capture the essence in a
box. At Jijivisha, we have begun a fascinating journey, a humble attempt to bring India a little closer to the world. Dedicated to creating a unique
interpretation of age-old crafts, we partner with artisanal communities, textile designers, independent artists (and the occasional maverick) to showcase a
new, contemporary design language that comes from India and belongs everywhere on the globe. We believe in sharing stories and celebrating how each
handmade object can come to represent something much bigger than itself. Traveling to the colorful corners of this fascinating country, we curate unique
and exclusive collections that represent India’s finest craft-based designs, so that you can savor the delightful treasures at leisure, with us. Immerse
yourself in the beauty of India. Shop for handmade sarees, dupattas, jewelry, shawls, home decor, art, and more
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
