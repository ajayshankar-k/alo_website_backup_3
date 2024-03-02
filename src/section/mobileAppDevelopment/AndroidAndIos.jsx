import React from "react";
import android from '@/styles/assets/81.svg'
import ios from '@/styles/assets/82.svg'

const AndroidAndIos = () => {
  return (
    <div className="androidios">
      <div className="androidios_container">
        <div className="androidios_androidblock">
          <div className="androidios_title_block">
            <h2>Android Mobile App Development:</h2>
            <p>
              Alo Infotech excels in Android mobile app development, creating
              dynamic and user-friendly applications tailored to the Android
              platform. Our team leverages the latest technologies and follows
              best practices to design and develop innovative Android apps that
              cater to diverse business needs. From conceptualization to
              deployment, we ensure a seamless development process,
              incorporating engaging UI/UX designs, robust functionalities, and
              optimal performance. Our Android app development services
              encompass a wide range of industries, providing scalable and
              feature-rich solutions that resonate with the specific
              requirements of our clients.
            </p>
          </div>
          <div className="androidios_image">
            <img src={android.src} alt={android.src} />
          </div>
        </div>
        <div className="androidios_iosblock">
          <div className="androidios_image">
            <img src={ios.src} alt={ios.src} />
          </div>
          <div className="androidios_title_block">
            <h2>iOS Mobile App Development:</h2>
            <p>
              In the realm of iOS mobile app development, Alo Infotech stands
              out as a proficient and experienced provider. Our dedicated team
              specializes in crafting high-quality iOS applications that align
              with the design principles and standards set by Apple. We employ
              cutting-edge tools and technologies to build visually appealing
              and functionally superior iOS apps. Whether it&apos;s for iPhones,
              iPads, or other Apple devices, our development process prioritizes
              user experience, performance optimization, and adherence to
              Apple&apos;s guidelines. Alo Infotech ensures that iOS apps developed
              meet the highest standards of quality, delivering a seamless and
              intuitive experience for end-users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidAndIos;
