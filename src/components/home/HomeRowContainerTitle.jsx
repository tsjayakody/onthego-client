import React from 'react';
import PropTypes from 'prop-types'

function HomeRowContainerTitle({
  rowTitle
}) {
  return (
    <>
      <p className='text-#FFFFFF pb-[22px] md:pb-[17px]'>
        {rowTitle}
      </p>
    </>
  );
}

HomeRowContainerTitle.defaultProps = {
  rowTitle: '_',
}

HomeRowContainerTitle.propTypes = {
  rowTitle: PropTypes.string,
}

export default HomeRowContainerTitle;
