import React from "react";
import Link from "next/link";

const DownloadApp = ({ styling, description, href }) => {
  return (
    <div className="products_download_app">
      <div className="download_app_container">
        <h2>{description}</h2>
        <div className="download_app_buttons">
          <Link href={href} target="___">
            <button className={styling}>Download our app</button>
          </Link>
          <Link href="/contact-us">
            <button className="downloadApp_contactus">Contact us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
