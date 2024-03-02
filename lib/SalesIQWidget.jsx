import React, { useEffect } from 'react';

const SalesIQWidget = ({ url, widgetCode }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute("type", "text/javascript");

    let code = `$zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`;

    window.addEventListener('load', () => {
      script.appendChild(document.createTextNode(code));
      document.body.appendChild(script);
    });

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    }
  }, [url, widgetCode]);

  return null;
};

export default SalesIQWidget;
