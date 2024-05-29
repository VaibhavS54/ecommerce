import React from 'react';
import './review.css';

function Review() {
  const reviews = [
    { rating: 4.0, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 3.2, text: 'Lorem ipsum dolor sit amet consectetur. Tristique enim ullamcorper risus auctor scelerisque convallis velit fames cursus. Pharetra maecenas sed interdum pellentesque id morbi. Elit nisi donec enim aenean purus integer vitae a. Sem vitae diam laoreet nec risus quis in.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 2.9, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 4.0, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 4.0, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' }
  ];

  return (
    <div className="reviewsContainer">
      <div className="reviewsList">
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <div className="reviewItem" key={index}>
            <div className="reviewRating">
              <span className={`starRating ${review.rating >= 4 ? 'green' : review.rating >= 3 ? 'yellow' : 'red'}`}>
                ★ {review.rating}
              </span>
            </div>
            <div className="reviewContent">
              <p>{review.text}</p>
              <div className="reviewFooter">
                <span className="rev">{review.date}</span>
                <span className="rev">{review.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="reviewSummary">
        <div className="reviewbox">
        <div className="summaryHeader">
          <span className="overallRating">4.0 ★</span>
          <span>Based on 64 reviews</span>
        </div>
        <div className="ratingDistribution">
          <div className="ratingRow">
            <span>5 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '50%'}}></div></div>
            <span>12</span>
          </div>
          <div className="ratingRow">
            <span>4 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '70%'}}></div></div>
            <span>20</span>
          </div>
          <div className="ratingRow">
            <span>3 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '30%'}}></div></div>
            <span>6</span>
          </div>
          <div className="ratingRow">
            <span>2 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '0%'}}></div></div>
            <span>0</span>
          </div>
          <div className="ratingRow">
            <span>1 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '10%'}}></div></div>
            <span>2</span>
          </div>
        </div>
        </div>
        <div className="reviewForm">
          <h3>Add Your Rating</h3>
          <div className="ratingStars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <textarea placeholder="Write your review here"></textarea>
          <div className="formFields">
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email *" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
