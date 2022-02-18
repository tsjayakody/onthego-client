import React from 'react'
import reviewList from '../../data/Reviews'
import AboutReview from './AboutReview'

function AboutUsReviewListContainer() {
  return (
    <div className='flex w-full overflow-x-auto md:ml-[50px]'>
        {reviewList.map((item) => (
          <AboutReview
            key={item.key}
            userImage={item.userImage}
            userName={item.userName}
            userRole={item.userType}
            userReview={item.userReview}
          />
        ))}
      </div>
  )
}

export default AboutUsReviewListContainer