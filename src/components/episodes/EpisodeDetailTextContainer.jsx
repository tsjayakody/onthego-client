import React from 'react'
import PropTypes from 'prop-types'

//TODO: need to pass description as a prop later

function EpisodeDetailTextContainer({ text }) {
  return (
    <div className='flex'>
      <p className='text-#FFFFFF text-[14px] text-justify'>
        {text}
      </p>
    </div>
  )
}

EpisodeDetailTextContainer.defaultProps = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

EpisodeDetailTextContainer.propTypes = {
  text: PropTypes.string,
}

export default EpisodeDetailTextContainer