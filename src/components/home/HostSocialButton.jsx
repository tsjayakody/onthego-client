import React from 'react';
import PropTypes from 'prop-types';

function HostSocialButton({
  icon,
  link
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} height='10' width='13' alt="" />
    </a>
  )
}

HostSocialButton.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
}

export default HostSocialButton