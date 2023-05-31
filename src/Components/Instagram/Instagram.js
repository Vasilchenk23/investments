import React from 'react';
import insta from "../Instagram/instagram.png";

const Instagram = () => {
  const instagramUrl = "https://www.instagram.com/";

  return (
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
      <img src={insta} alt="Instagram" />
    </a>
  );
}

export default Instagram;
