import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecondaryNavTile = ({ text, icon }) => (
  <div className="secondary-nav-tile">
    <a href="#" className="secondary-nav-anchor">
      <span className="secondary-nav-text">
        { text }
      </span>
      <div className="secondary-nav-icon">
        <FontAwesomeIcon icon={icon} color="#6CB80F" />
      </div>
    </a>
  </div> 
)

export { SecondaryNavTile }