import React, { Fragment } from 'react'
import EventsBannerImage from "@/styles/assets/eventsbannerimage.svg"; 
 

const EventBannerSection = () => {
  return (
    <Fragment>
        <div className="events_banner">
        <div className="events_banner_container">
          <div className="events_banner_leftblock"> 
            <h1>Alo Events</h1>
            <p>
            Discover Alo Infotech&apos;s dynamic calendar! Join our upcoming events, webinars, tech talks, and seminars for thought-provoking conversations and networking opportunities.
            </p>
          </div>
          <div className="events_banner_rightblock">
            <img src={EventsBannerImage.src} alt={EventsBannerImage.src} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EventBannerSection