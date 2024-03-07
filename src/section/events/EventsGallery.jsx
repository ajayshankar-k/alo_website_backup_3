import React, { useState,useEffect } from "react";
import Button from "@/components/common/button";

import aloversary2k221 from '@/styles/assets/aloversary2k22/aloversary2k221.svg'
import aloversary2k222 from '@/styles/assets/aloversary2k22/aloversary2k222.svg'
import aloversary2k223 from '@/styles/assets/aloversary2k22/aloversary2k223.svg'
import aloversary2k224 from '@/styles/assets/aloversary2k22/aloversary2k224.svg'
import aloversary2k225 from '@/styles/assets/aloversary2k22/aloversary2k225.svg'

import alo20226 from '@/styles/assets/aloversary2k22/alo20226.svg'
import alo20227 from '@/styles/assets/aloversary2k22/alo20227.svg'
import alo20228 from '@/styles/assets/aloversary2k22/alo20228.svg'


import pongal2k231 from '@/styles/assets/pongal2k23/pongal2k231.svg'
import pongal2k232 from '@/styles/assets/pongal2k23/pongal2k232.svg'
import pongal2k241 from '@/styles/assets/pongal2k24/pongal2k241.svg'
import pongal2k242 from '@/styles/assets/pongal2k24/pongal2k242.svg'
import pongal5 from '@/styles/assets/pongal2k24/1.svg'
import pongal6 from '@/styles/assets/pongal2k24/2.svg'
import pongal7 from '@/styles/assets/pongal2k24/3.svg'

import onam20231 from '@/styles/assets/onam2023/onam20231.svg'
import onam20232 from '@/styles/assets/onam2023/onam20232.svg'
import onam20233 from '@/styles/assets/onam2023/onam20233.svg'
import onam20234 from '@/styles/assets/onam2023/onam20234.svg'
import onam5 from '@/styles/assets/onam2023/1.svg'
import onam6 from '@/styles/assets/onam2023/2.svg'
import onam7 from '@/styles/assets/onam2023/3.svg'
import onam8 from '@/styles/assets/onam2023/4.svg'

import clg1 from '@/styles/assets/collegeseminarsvg/1.svg'
import clg2 from '@/styles/assets/collegeseminarsvg/2.svg'
import clg3 from '@/styles/assets/collegeseminarsvg/3.svg'
import clg4 from '@/styles/assets/collegeseminarsvg/4.svg'
import clg5 from '@/styles/assets/collegeseminarsvg/5.svg'
import clg6 from '@/styles/assets/collegeseminarsvg/6.svg'
import clg7 from '@/styles/assets/collegeseminarsvg/7.svg'
import clg8 from '@/styles/assets/collegeseminarsvg/8.svg'
import clg9 from '@/styles/assets/collegeseminarsvg/9.svg'
import clg10 from '@/styles/assets/collegeseminarsvg/10.svg'

import off1 from '@/styles/assets/officecelebration/1.svg'
import off2 from '@/styles/assets/officecelebration/2.svg'
import off3 from '@/styles/assets/officecelebration/3.svg'

// import in1 from '@/styles/assets/inaguration/in1.svg'
import in2 from '@/styles/assets/inaguration/in2.svg'
import in3 from '@/styles/assets/inaguration/in3.svg'
import in4 from '@/styles/assets/inaguration/in4.svg'
import in5 from '@/styles/assets/inaguration/in5.svg'
import in6 from '@/styles/assets/inaguration/in6.svg'
import in7 from '@/styles/assets/inaguration/in7.svg'
import in8 from '@/styles/assets/inaguration/in8.svg'
import in9 from '@/styles/assets/inaguration/in9.svg'
import in10 from '@/styles/assets/inaguration/in10.svg'

import EventPrevArrow from '@/styles/assets/eventprevarrow.svg';
import EventNextArrow from '@/styles/assets/eventnextarrow.svg';

import team1 from '@/styles/assets/teamout/1.svg'
import team2 from '@/styles/assets/teamout/2.svg'
import team3 from '@/styles/assets/teamout/3.svg'
import team4 from '@/styles/assets/teamout/4.svg'
import team5 from '@/styles/assets/teamout/5.svg'


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
    const aloversary2k22Copy= [
      {src:aloversary2k221.src},
      {src:aloversary2k222.src},
      {src:aloversary2k223.src},
      {src:aloversary2k224.src},
      {src:aloversary2k225.src},
      {src:alo20226.src},
      {src:alo20227.src},
      {src:alo20228.src},
    ]
  
  
    const aloversary2k22 = aloversary2k22Copy.slice(0,imageSlice)

   
    const pongal2k23Copy = [
      {src:pongal2k231.src},
      {src:pongal2k232.src},
      {src:pongal5.src},
      {src:pongal6.src},
      {src:pongal7.src},
      {src:pongal2k241.src},
      {src:pongal2k242.src},
    ]

    const pongal2k23 = pongal2k23Copy.slice(0,imageSlice)
  
    const onam2023Copy = [
      {src: onam20231.src},
      {src: onam20232.src},
      {src: onam20233.src},
      {src: onam20234.src},
      {src: onam5.src},
      {src: onam6.src},
      {src: onam7.src},
      {src: onam8.src},
    ]

    const onam2023 = onam2023Copy.slice(0,imageSlice)
  
    const inaugurationCopy = [
      {src: in10.src},
      {src: in2.src},
      {src: in3.src},
      {src: in4.src},
      {src: in5.src},
      {src: in6.src},
      {src: in7.src},
      {src: in8.src},
      {src: in9.src},
    ]

    const inauguration = inaugurationCopy.slice(0,imageSlice)

    const officecelebCopy = [
      {src: off1.src},
      {src: off2.src},
      {src: off3.src},

    ]

    const officeceleb = officecelebCopy.slice(0,imageSlice)

    const clgseminarCopy = [
      {src: clg1.src},
      {src: clg2.src},
      {src: clg3.src},
      {src: clg4.src},
      {src: clg5.src},
      {src: clg6.src},
      {src: clg7.src},
      {src: clg8.src},
      {src: clg9.src},
      {src: clg10.src},
    ]

    const clgseminar = clgseminarCopy.slice(0,imageSlice)

    const teamoutCopy = [
      {src: team1.src},
      {src: team2.src},
      {src: team3.src},
      {src: team4.src},
      {src: team5.src},
   
    ]

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