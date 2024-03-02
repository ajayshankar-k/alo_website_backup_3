import React, { Fragment } from 'react'
import UpcomingEventImage from "@/styles/assets/upcomingeventimage.svg";

const UpcomingEventSection = () => {
  return (
    <Fragment>
        <div className="upcoming_events">
        <h2>Upcoming Events</h2>
        <div className="upcoming_events_container">
          <div className="upcoming_events_cards">
            <div className="upcoming_cards_container">
              <div>
                <img
                  src={UpcomingEventImage.src}
                  alt={UpcomingEventImage.src}
                />
              </div>
              <p className="upcoming_card_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
              <p className="upcoming_card_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="upcoming_event_venue">
                <p>
                  <b style={{fontWeight:'600'}}>Date:</b> Jan 26,2023
                </p>
                <p>
                  <b style={{fontWeight:'600'}}>Time:</b> 2.00pm
                </p>
                <p>
                  <b style={{fontWeight:'600'}}>Location:</b> Alo infotech, Nagercoil.
                </p>
              </div>
            </div>
            <div className="upcoming_cards_container">
              <div>
                <img
                  src={UpcomingEventImage.src}
                  alt={UpcomingEventImage.src}
                />
              </div>
              <p className="upcoming_card_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
              <p className="upcoming_card_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="upcoming_event_venue">
                <p>
                  <b style={{fontWeight:'600'}}>Date:</b> Jan 26,2023
                </p>
                <p>
                  <b style={{fontWeight:'600'}}>Time:</b> 2.00pm
                </p>
                <p>
                  <b style={{fontWeight:'600'}}>Location:</b> Alo infotech, Nagercoil.
                </p>
              </div>
            </div>
            <div className="upcoming_cards_container">
              <div>
                <img
                  src={UpcomingEventImage.src}
                  alt={UpcomingEventImage.src}
                />
              </div>
              <p className="upcoming_card_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
              <p className="upcoming_card_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="upcoming_event_venue">
                <p>
                  <b style={{fontWeight:'600'}}>Date:</b> Jan 26,2023
                </p>
                <p>
                  <b style={{fontWeight:'600'}}>Time:</b> 2.00pm
                </p>
                <p>
                  <b style={{fontWeight:'600'}}>Location:</b> Alo infotech, Nagercoil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UpcomingEventSection