import React from 'react';
import './blogpage.css';
import Handbags from '../../assets/handbag.png';

function BlogPage() {
  return (
    <div className="pagecontainer">
      <h1>Blog</h1>
      <div className="page-grid">
        <div className="page-card">
          <img src={Handbags} alt="Kalamkari" />
          <h3>Kalamkari artisans frequently draw inspiration from nature, mythology, and folklore</h3>
          <p>The age-old Indian art form of kalamkari continues to stand</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="page-card">
          <img src={Handbags} alt="Kantha" />
          <h3>Bengal's rich cultural heritage is embodied in the acclaimed art form of kantha needlework</h3>
          <p>Bengal's rich cultural heritage is embodied in the acclaimed art</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="page-card">
          <img src={Handbags} alt="Kantha" />
          <h3>Bengal's rich cultural heritage is embodied in the acclaimed art form of kantha needlework</h3>
          <p>Bengal's rich cultural heritage is embodied in the acclaimed art</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;