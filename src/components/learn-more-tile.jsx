import React from 'react';

const LearnMoreTile = ({ text, className }) => (
  <div className={`learn-more-section ${className}`}>
    <div className="learn-more-image" />
    <div className="learn-more-description">
      <span>{text}</span>
      <a href="#" className="learn-more-link">Learn more</a>
    </div>
  </div>
)

export { LearnMoreTile }