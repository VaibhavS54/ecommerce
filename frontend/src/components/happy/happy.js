
import React, { useState, useEffect } from 'react';
import './happy.css';

const Happy = [
  {
    text: "I've been a loyal Jijivisha customer for years, and I can't express how much I love their handmade clothing and jewellery. The quality is impeccable, and the designs are truly one-of-a-kind. It's heartwarming to see the dedication of the artisans behind these creations. Keep up the fantastic work!",
    author: "Riya Rani"
  },
  {
    text: "I've always admired the artistry of Indian craftsmanship, and Jijivisha has made it accessible like never before. The jewellery and clothing are not just accessories; they're expressions of our identity. I feel proud to wear them, knowing that I'm promoting Indian art and culture.",
    author: "Kalpana Chauhan"
  },
   {
    text: "Absolutely delighted with my recent purchase from Jijivisha! The handcrafted jewellery is a true work of art, and the clothing is incredibly unique. I feel a deep connection to our Indian heritage every time I wear them. Thank you for preserving our culture and bringing such beauty into our lives.",
    author: "Reena Chopra"
       },
    {
       text: "As an advocate for sustainable fashion, I'm thrilled to have found Jijivisha. The exquisite pieces I've bought here not only make me look good but also feel good about my choices. Knowing that I'm supporting skilled artisans and promoting eco-friendly practices is incredibly satisfying. Kudos to the Jijivisha team!",
       author: "Shivani Singh"
    },
  {
    text: "Jijivisha has become my go-to destination for meaningful gifts. Whether it's a beautifully handcrafted necklace for a friend or a handwoven saree for a family member, I know that each piece carries a piece of our culture and heritage. Thank you for making gifting so special.",
    author: "Tanu gupta"
  }
];

const HappyCoustomer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Happy.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="testimonial">
      <h2>Happy Customers</h2>
      <div className="testimonial-content">
        <p className="quote-icon">❝</p>
        <p className="testimonial-text">
          {Happy[currentIndex].text}
        </p>
        <p className="testimonial-author">{Happy[currentIndex].author}</p>
      </div>
      <div className="dots">
        {Happy.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HappyCoustomer;
