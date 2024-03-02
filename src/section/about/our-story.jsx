import React, { Fragment, useRef, useState } from 'react'
import Image from '@/components/common/image';
import Vid from "@/styles/assets/21.svg";
import LifeAtAloYouTube from "@/styles/assets/lifeataloyoutube.svg"
import LifeAtAlo from "@/styles/assets/lifeatalo.svg"
import OurStoryCloseButton from "@/styles/assets/ourstoryclosebutton.svg"

const OurStory = () => {

    const [showVideo, setShowVideo] = useState(false);
    const playerRef = useRef(null);

    const handleClickPlay = () => {
        setShowVideo(true);
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };
    const handleClickclose = () =>{
        setShowVideo(false);
    }

    return (
        <Fragment>
            <div className="our-story">
                <h2>Our Story</h2>
                <h3>A tale of tech brilliance and growth</h3>
                <div className="our-story-parent">
                    <div className="our-story-content">
                        <h2>We Believe in</h2> 
                        <p>At Alo Info-Tech, our core belief revolves around harnessing the transformative power of software to redefine and elevate business landscapes. As a leading provider of comprehensive IT solutions, we specialize in crafting impactful websites and innovative mobile applications tailored to propel your business to the next stage of success.</p>
                        <p> With a proven track record spanning three years in Nagercoil, we have not only excelled in software development but also established ourselves as experts in digital marketing solutions. Our commitment to excellence, innovation, and client satisfaction is at the forefront of everything we do. Partner with Alo Info-Tech, and let our dedicated team guide your business toward unprecedented growth in the dynamic digital realm. </p>
                    </div>
                    <div className="our-story-video">
                        {!showVideo && (
                            <div className='our_story_video_play_button'>
                                <div className='youtube_play_button_container'>
                                    <img style={{ cursor: 'pointer' }} className='youtube_play_button'  onClick={handleClickPlay} draggable='false' height={'66px'} src={LifeAtAloYouTube.src} alt={LifeAtAloYouTube.src}/>
                                    <h3>Life at Alo</h3>
                                </div>
                                <img
                                    className='lifeatalo_image'
                                    src={LifeAtAlo.src}
                                    alt={LifeAtAlo.src}
                                />
                            </div>
                        )}

                        {showVideo && (
                            <>
                            <div className='our_story_close_button'>
                                <img onClick={handleClickclose} style={{cursor:'pointer',color:'black',backgroundColor:'black'}} width='15px' height='15px' src={OurStoryCloseButton.src} alt={OurStoryCloseButton.src} />
                            </div>
                            <iframe
                                title="YouTube video player"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/mdZltzr32yc?autoplay=1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                            
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default OurStory