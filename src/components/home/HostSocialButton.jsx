import React from 'react';

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

export default HostSocialButton