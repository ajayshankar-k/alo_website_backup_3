import React, { useState,useEffect } from "react";
import Button from "@/components/common/button";
import { aloversary2k22Copy ,pongal2k23Copy ,onam2023Copy, clgseminarCopy, officecelebCopy, inaugurationCopy , teamoutCopy} from "./EventsImages";

// import in1 from '@/styles/assets/inaguration/in1.svg'

import EventPrevArrow from '@/styles/assets/eventprevarrow.svg';
import EventNextArrow from '@/styles/assets/eventnextarrow.svg';



const EventsGallery = () => {
    const [loading, setLoading] = useState(false);
    const [imageSlice, setSlicing] = useState(6)
    const [activeIndex,setActiveIndex] = useState(0)
    const [refreshscroll, setRefreshScroll] = useState(false)

    

    //pagenation for event gallery
  
    const handleEventNavNext = () =>{
      setRefreshScroll(true)
      setLoading(true)
      setActiveIndex((prevIndex) => (prevIndex + 1) % eventNames.length);
    }
  
    const handleEventNavPrev = () =>{
      setRefreshScroll(true)
      setLoading(true)
      setActiveIndex((prevIndex) =>
      prevIndex === 0 ? eventNames.length - 1 : prevIndex - 1
    );
    }
  
    const handleClickEventNames = (index) =>{
      setActiveIndex(index)
      setLoading(true)
    }
  
  
    const eventNames = [
      'Inauguration',
      'Onam',
      'Pongal',
      'Aloversary',
      'College Seminar',
      'Office Celebration',
      'Team Out'
    ]


  
    const handleLoad = () =>{
      setLoading(false)
    }
  
    // images maped
    const aloversary2k22 = aloversary2k22Copy.slice(0,imageSlice)
    const pongal2k23 = pongal2k23Copy.slice(0,imageSlice)
    const onam2023 = onam2023Copy.slice(0,imageSlice)
    const inauguration = inaugurationCopy.slice(0,imageSlice)
    const officeceleb = officecelebCopy.slice(0,imageSlice)
    const clgseminar = clgseminarCopy.slice(0,imageSlice)
    const teamout = teamoutCopy.slice(0,imageSlice)

    useEffect(() => {
        setRefreshScroll(false)
        setSlicing(6)
        if(refreshscroll){
          const activeElement = document.querySelector('.event_gallery_nav .active');
            if (activeElement) {
              activeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
              });
            }
        }
      }, [activeIndex]);
      
  
    
  return (
    <div className="event_gallery">
    <h2>Event gallery</h2>
    <div className="event_gallery_container">
      <div className="event_gallery_nav_container">
        <img onClick={handleEventNavPrev} draggable='false' src={EventPrevArrow.src} alt={EventPrevArrow.src} />

        <div className="event_gallery_nav">
          {eventNames.map((eventtitles,index)=>(
            <p onClick={()=>handleClickEventNames(index)} className={index === activeIndex ? 'active' : ''} key={index}>{eventtitles}</p>
          ))}
        </div>
        <div className="event_second_gallery_nav">{eventNames[activeIndex]}</div>

        <img onClick={handleEventNavNext} draggable='false' src={EventNextArrow.src} alt={EventNextArrow.src} />
      </div>

      {loading ? <p className="events_image_loader">Loading...</p>:""}

     

       {activeIndex === 0 ?
       <>
          <div className="event_gallery_images"> 
            {inauguration.map((image)=>(
              <img  key={image.src} onLoad={handleLoad} src={image.src} alt="" />
            ))} 
          </div>
          {inaugurationCopy.length>=6 && inaugurationCopy.length>imageSlice ?
          <div className="event_loadmore">
          {loading ? "" : <Button onClick={()=>setSlicing(imageSlice+6)} label="Load more" />}
          </div>
          :''}
      </>
      : '' }

       {activeIndex === 1 ?
       <>
      <div className="event_gallery_images">  
        {onam2023.map((image)=>(
          <img  key={image.src} onLoad={handleLoad} src={image.src} alt="" />
        ))}
      </div>
      {onam2023Copy.length>=6 && onam2023Copy.length>imageSlice?
          <div className="event_loadmore">
          {loading ? "" : <Button onClick={()=>setSlicing(imageSlice+6)} label="Load more" />}
          </div>
          :''}
      </>
      : '' }

      {activeIndex === 2 ?
      <>
      <div className="event_gallery_images">  
        {pongal2k23.map((image)=>(
        < img  key={image.src} onLoad={handleLoad} src={image.src} alt="" />
        ))}
      </div>
      {pongal2k23Copy.length>=6 && pongal2k23Copy.length>imageSlice?
          <div className="event_loadmore">
          {loading ? "" : <Button onClick={()=>setSlicing(imageSlice+6)} label="Load more" />}
          </div>
          :''}
      </>
      : '' }
     
      {activeIndex === 3 ?
      <>
      <div className="event_gallery_images">
        {aloversary2k22.map((image)=>(
          <img  key={image.src} onLoad={handleLoad} src={image.src} alt="" />
        ))} 
      </div>
      {aloversary2k22Copy.length>=6 && aloversary2k22Copy.length>imageSlice?
          <div className="event_loadmore">
          {loading ? "" : <Button onClick={()=>setSlicing(imageSlice+6)} label="Load more" />}
          </div>
          :''}
      </>
      : '' }

      {activeIndex === 4 ?
      <>
      <div className="event_gallery_images">
        {clgseminar.map((image)=>(
          <img  key={image.src} onLoad={handleLoad} src={image.src} alt="" />
        ))} 
      </div>
      {clgseminarCopy.length>=6 && clgseminarCopy.length>imageSlice?
          <div className="event_loadmore">
          {loading ? "" : <Button onClick={()=>setSlicing(imageSlice+6)} label="Load more" />}
          </div>
          :''}
      </>
      : '' }

      {activeIndex === 5 ?
      <>
      <div className="event_gallery_images">
        {officeceleb.map((image)=>(
          <img  key={image.src} onLoad={handleLoad} src={image.src} alt="" />
        ))} 
      </div>
      {officecelebCopy.length>=6 && officecelebCopy.length>imageSlice?
        <div className="event_loadmore">
        {loading ? "" : <Button onClick={()=>setSlicing(imageSlice+6)} label="Load more" />}
        </div>
        :''}
        </>
      : '' }

      {activeIndex === 6 ?
      <>
      <div className="event_gallery_images">
        {teamout.map((image)=>(
          <img  key={image.src} onLoad={handleLoad} src={image.src} alt="" />
        ))} 
      </div>
      {teamoutCopy.length>=6 && teamoutCopy.length>imageSlice?
        <div className="event_loadmore">
        {loading ? "" : <Button onClick={()=>setSlicing(imageSlice+6)} label="Load more" />}
        </div>
        :''}
      </>
      : '' }
    </div>
  </div>
  )
}

export default EventsGallery