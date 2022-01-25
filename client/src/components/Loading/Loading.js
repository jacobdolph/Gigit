import React from "react";
import "./style.css";
import logo from "../../gigitAssets/images/logo-green-min.png";

const Loading = () => (
  <div className="div">
    <img className="loadingLogo" alt='the gigit insignia' src={logo} style={{ height: "50px", width: "auto" }}></img>
    <br />
    <br />
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="200px" height="300px" viewBox="0 0 41.5 66.9" style={{ enableBackground: 'new 0 0 41.5 66.9' }} xmlSpace="preserve">
      <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:none;stroke:url(#SVGID_1_);stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:url(#SVGID_2_);stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n" }} />
      <defs>
      </defs>
      <g>
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1={0} y1="33.4444" x2="41.4829" y2="33.4444">
          <stop offset={0} style={{ stopColor: '#3C9C85' }} />
          <stop offset="0.9918" style={{ stopColor: '#5DB15C' }} />
        </linearGradient>
        <path className="st0" d="M38.6,29H27.2L37.8,3.4c0.5-1.3-1.1-2.5-2.2-1.5L1.9,35.6c-0.9,0.9-0.3,2.3,0.9,2.3h11.5L3.7,63.5
		    C3.1,64.9,4.8,66,5.9,65l33.7-33.7C40.4,30.4,39.8,29,38.6,29z" />
      </g>
    </svg>
    <h1 className="loading">Loading...</h1>
  </div>
);

export default Loading;
