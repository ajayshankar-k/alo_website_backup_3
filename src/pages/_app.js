import '@/styles/globals.css'
import { Fragment,useEffect } from 'react'
import WebLayout from '@/layouts/WebLayout'
import AnimatedCursor from "react-animated-cursor"
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd'
import Head from 'next/head';
// const FacebookScript = dynamic(() => import('../components/common/facebookscript'), { ssr: false });

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Function to open Zoho SalesIQ chat
    const openSalesIQChat = () => {
      $zoho.salesiq.floatwindow.visible('show');
    };

    // Attach the function to elements with the specific class name
    const elementsWithClassName = document.querySelectorAll('.your-class-name');
    elementsWithClassName.forEach((element) => {
      element.addEventListener('click', openSalesIQChat);
    });

    // Clean up event listeners
    return () => {
      elementsWithClassName.forEach((element) => {
        element.removeEventListener('click', openSalesIQChat);
      });
    };
  }, []);
  // Callback function to open Zoho SalesIQ chat
  const handleOpenChat = () => {
    $zoho.salesiq.floatwindow.visible('show');
  };
  
  const customInnerStyle = {zIndex:'9999',}

  return (
    <Fragment>
       <Head>
        <script
          type="text/javascript"
          id="zsiqchat"
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho = $zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode: "siq8be40f1f8d59d2c948b4f1ceb4e4b3a196b4b46d8f1700b28b80f2e5addbb842",
                values: {},
                ready: function () {}
              };
              var d = document;
              var s = d.createElement("script");
              s.type = "text/javascript";
              s.id = "zsiqscript";
              s.defer = true;
              s.src = "https://salesiq.zohopublic.in/widget";
              var t = d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s, t);
            `,
          }}
        />
      </Head>
      <WebLayout>
        {/* <FacebookScript /> */}
        <div  className="mobile-cursor">
          <AnimatedCursor
            innerSize={8}
            outerSize={25}
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={1.5}
            innerStyle={customInnerStyle} // style for innercircle
            outerStyle={customInnerStyle} // style for outercircle
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
            ]}
          />
        </div>
        <ToastContainer autoClose='3000' pauseOnHover='true'/>
       
        <Component {...pageProps} openChat={handleOpenChat} />
        
      </WebLayout>
    </Fragment>
  )
}
