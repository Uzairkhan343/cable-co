import image2 from "../../Assets/images/text.png";
import image1 from "../../Assets/images/src.png";
import image3 from "../../Assets/images/arrow_up.png";
import image5 from "../../Assets/images/src.png";
import image6 from "../../Assets/images/text.png";
import "./style.css";
import image4 from "../../Assets/images/upload.png";
import { useState } from "react";

const Section1 = () => {
  const [showpopup, setshowpopup] = useState(0);
  const popuphandler = (value) => {
    if (showpopup === value) {
      setshowpopup(0);
    } else setshowpopup(value);
    console.log(value);
  };
  const [dotspopups, setdotspopups] = useState(0);
  const dotshandler = (value) => {
    if (dotspopups === value) {
      setdotspopups(0);
    } else setdotspopups(value);
    console.log(value);
  };
  const [hamburger, sethambuger] = useState(0);
  const humburgerhandler = (value) => {
    if (hamburger === value) {
      sethambuger(0);
    } else sethambuger(value);
  };
  const [reponsive, setresponsive] = useState(0);
  const responsivehandler = (value) => {
    if (reponsive === 1) {
      setresponsive(0);
    } else setresponsive(value);
  };

  return (
    <div>
      <div className="main-container">
        {/* mobile navigation bar */}
        <div className="main-mobile-bar">
          {/* heading-image */}
          <div className="image-heading">
            <div>
              <h1>CableCo</h1>
            </div>
            {/* image */}
            <div>
              <img src={image5} alt=""></img>
            </div>
          </div>
          {/* image */}
          <div className="image-responsive">
            <img src={image6} alt=""></img>
          </div>
          {/* hamburger */}
          <div className="hamburger-main" onClick={() => humburgerhandler(1)}>
            <div className="padding-lines"></div>
            <div className="padding-lines"></div>
            <div className="padding-lines"></div>
            {/* hamburgercontent */}
            {hamburger === 1 && (
              <div className="hamburger-ul">
                <ul className="ul-responsive">
                  <li>Change Setting</li>
                  <li>Export / Share</li>
                  <li>Support / FAQs</li>
                  <li>Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* end mobile bar */}
        <div className="background-image">
          <div className="header-main">
            {/* sec-1 */}
            <div className="heading-logo">
              <div className="logo-heading-flex">
                <h1 className="old_standerd_font">CableCo</h1>
                <div className="logo-image">
                  <img src={image1} alt=""></img>
                </div>
              </div>
              {/*  */}
              {/* links */}
              <div className="ul-links ">
                <div className="ul-flex">
                  <ul className="Roboto_font">
                    <li className="border-li">HOME</li>
                    <li className="paddingn-li hover-border">COURSEWORK</li>
                    <li className="hover-tag">CERTIFICATION</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* links */}
            <div className="ul-links-flex">
              <ul className="Roboto_font">
                <li className="li-radius">Dashboard</li>
                <li className="paddingn-li hover-li">Change Setting</li>
                <li className="hover-li">Export / Share</li>
                <li className="paddingn-li hover-li">Support / FAQs</li>
                <li className=" hover-li">Log Out</li>
              </ul>
            </div>
            {/* logo and headings */}
            <div className="image-heading-main">
              <div>
                <img src={image2} alt=""></img>
              </div>
              {/* heading */}
              <div>
                <p className="Roboto_font">Company View</p>
                <h4 className="Roboto_font">Home</h4>
              </div>
            </div>
          </div>
          {/* responsive tags */}
          <div className="main-responsive-section">
            {/* one */}
            <div className="dropdown-1">
              <h6>Course Performance</h6>
              <img
                src={image4}
                alt=""
                onClick={() => responsivehandler(1)}
              ></img>
            </div>
            {/* box-1 reponisvie */}
            {reponsive === 1 && (
              <div className="bg-color-responsive">
                <div className="flex-responsive-tag">
                  <div className="heading-responise">
                    <h6 className="Roboto_font">Course Performance</h6>
                  </div>
                  <div className="head-respon">
                    <h5 className="Roboto_font  heading-g5">
                      <sup>+</sup>
                      <span>0</span>
                      <span className="extra">.1</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                <div className="heading-2 font-weight heading-responise-tag">
                  <h5 className="font-weight">
                    <span>78</span>
                    <span className="extra">.6</span>
                    <sup>%</sup>
                  </h5>
                </div>
                <div className="end-text" onClick={() => popuphandler(2)}>
                  <div className="text">
                    <p>Company Avg Score vs Others</p>
                  </div>
                  {/* image */}
                  <div>
                    <img src={image3} alt=""></img>
                  </div>
                </div>
              </div>
            )}
            {/* end box-1 reponsive */}
            {/* two  */}
            <div className="dropdown-2">
              <h6>Course Performance</h6>
              <img src={image4} alt="" onClick={()=>responsivehandler(2)}></img>
            </div>
            {/* box-1 reponisvie */}
            {reponsive === 2 && (
            <div className="bg-color-responsive-3">
              <div className="flex-responsive-tag">
                <div className="heading-responise">
                  <h6 className="Roboto_font">Course Performance</h6>
                </div>
                <div className="head-respon">
                  <h5 className="Roboto_font  heading-g5">
                    <sup>+</sup>
                    <span>0</span>
                    <span className="extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="heading-2 font-weight heading-responise-tag">
                <h5 className="font-weight">
                  <span>78</span>
                  <span className="extra">.6</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="end-text" onClick={() => popuphandler(2)}>
                <div className="text">
                  <p>Company Avg Score vs Others</p>
                </div>
                {/* image */}
                <div>
                  <img src={image3} alt=""></img>
                </div>
              </div>
            </div>
            )}
            {/* end box-1 reponsive */}
            {/* three */}
            <div className="dropdown-3">
              <h6>Course Performance</h6>
              <img src={image4} alt="" onClick={()=>responsivehandler(3)}></img>
            </div>
            {/* box-1 reponisvie */}
            {reponsive === 3 && (
            <div className="bg-color-responsive-4">
              <div className="flex-responsive-tag">
                <div className="heading-responise">
                  <h6 className="Roboto_font">Course Performance</h6>
                </div>
                <div className="head-respon">
                  <h5 className="Roboto_font  heading-g5">
                    <sup>+</sup>
                    <span>0</span>
                    <span className="extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="heading-2 font-weight heading-responise-tag">
                <h5 className="font-weight">
                  <span>78</span>
                  <span className="extra">.6</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="end-text" onClick={() => popuphandler(2)}>
                <div className="text">
                  <p>Company Avg Score vs Others</p>
                </div>
                {/* image */}
                <div>
                  <img src={image3} alt=""></img>
                </div>
              </div>
            </div>
            )}
            {/* end box-1 reponsive */}
            {/* four */}
            <div className="dropdown-4">
              <h6>Course Performance</h6>
              <img src={image4} alt="" onClick={()=>responsivehandler(4)}></img>
            </div>
            {/* box-1 reponisvie */}
            {reponsive === 4 && (
            <div className="bg-color-responsive-5">
              <div className="flex-responsive-tag">
                <div className="heading-responise">
                  <h6 className="Roboto_font">Course Performance</h6>
                </div>
                <div className="head-respon">
                  <h5 className="Roboto_font  heading-g5">
                    <sup>+</sup>
                    <span>0</span>
                    <span className="extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="heading-2 font-weight heading-responise-tag">
                <h5 className="font-weight">
                  <span>78</span>
                  <span className="extra">.6</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="end-text" onClick={() => popuphandler(2)}>
                <div className="text">
                  <p>Company Avg Score vs Others</p>
                </div>
                {/* image */}
                <div>
                  <img src={image3} alt="" onClick={()=>responsivehandler(5)}></img>
                </div>
              </div>
            </div>
            )}
            {/* end box-1 reponsive */}
            {/* five  */}
            {reponsive === 5 && (
            <div className="bg-color-responsive-2">
              <div className="flex-responsive-tag">
                <div className="heading-responise">
                  <h6 className="Roboto_font">Course Performance</h6>
                </div>
                <div className="head-respon">
                  <h5 className="Roboto_font  heading-g5">
                    <sup>+</sup>
                    <span>0</span>
                    <span className="extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="heading-2 font-weight heading-responise-tag">
                <h5 className="font-weight">
                  <span>78</span>
                  <span className="extra">.6</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="end-text" onClick={() => popuphandler(2)}>
                <div className="text">
                  <p>Company Avg Score vs Others</p>
                </div>
                {/* image */}
                <div>
                  <img src={image3} alt=""></img>
                </div>
              </div>
            </div>
            )}
          </div>
          {/* end box-1 reponsive */}

          {/* end responisve */}
          {/* background-image-2 */}
          <div className="bg-image">
            <div className="bg-main">
              {/* start-box-1 */}
              <div className="box-1">
                {/* popups */}
                <div className="popup-main">
                  {showpopup === 1 && (
                    <div className="contant-popups">
                      <div className="main-popup-flex">
                        <div className="text-start">
                          <h6>Course Performance</h6>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* popups end */}
                <div className="dots-main" onClick={() => dotshandler(1)}>
                  {dotspopups === 1 && (
                    <div className="dots-popup">
                      <div className="dots-content">
                        <div>
                          <p>
                            Indicates average performance in courses that are
                            passed by team members
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="dots"></div>

                  {/* end */}
                </div>

                {/* heading */}
                <div
                  className="heading-numbers"
                  onClick={() => popuphandler(1)}
                >
                  <div className="heading">
                    <h6 className="Roboto_font">Course Performance</h6>
                  </div>
                  <div>
                    <h5 className="Roboto_font">
                      <sup>+</sup>
                      <span>0</span>
                      <span className="extra">.1</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {/* heading-2 */}
                <div className="heading-2" onClick={() => popuphandler(1)}>
                  <h5 className="Roboto_font font-weight">
                    <span>87</span>
                    <span className="extra">.9</span>
                    <sup>%</sup>
                  </h5>
                </div>
                {/* end text */}
                <div className="end-text" onClick={() => popuphandler(1)}>
                  <div className="text">
                    <p>Company Avg Score vs Others</p>
                  </div>
                  {/* image */}
                  <div>
                    <img src={image3} alt=""></img>
                  </div>
                </div>
              </div>

              {/* end-box-1 */}
              {/* start-box-2 */}
              <div className="box-1">
                {/* popups */}
                <div className="popup-main-2">
                  {showpopup === 2 && (
                    <div className="contant-popups-2">
                      <div className="main-popup-flex">
                        <div className="text-start">
                          <h6>Course Performance</h6>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="dots-main" onClick={() => dotshandler(2)}>
                  {dotspopups === 2 && (
                    <div className="dots-popup">
                      <div className="dots-content">
                        <div>
                          <p>
                            Indicates average performance in courses that are
                            passed by team members
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="dots"></div>
                </div>

                {/* heading */}
                <div
                  className="heading-numbers"
                  onClick={() => popuphandler(2)}
                >
                  <div className="heading">
                    <h6 className="Roboto_font">Certification Performance</h6>
                  </div>
                  <div>
                    <h5 className="Roboto_font">
                      <sup>-</sup>
                      <span>2</span>
                      <span className="extra">.1</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {/* heading-2 */}
                <div
                  className="heading-2 font-weight"
                  onClick={() => popuphandler(2)}
                >
                  <h5 className="font-weight">
                    <span>78</span>
                    <span className="extra">.6</span>
                    <sup>%</sup>
                  </h5>
                </div>
                {/* end text */}
                <div className="end-text" onClick={() => popuphandler(2)}>
                  <div className="text">
                    <p>Company Avg Score vs Others</p>
                  </div>
                  {/* image */}
                  <div>
                    <img src={image3} alt=""></img>
                  </div>
                </div>
              </div>
              {/* end-box-2 */}
              {/* start-box-3 */}
              <div className="box-1">
                <div className="popup-main-3">
                  {showpopup === 3 && (
                    <div className="contant-popups-3">
                      <div className="main-popup-flex">
                        <div className="text-start">
                          <h6>Course Performance</h6>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="dots-main" onClick={() => dotshandler(3)}>
                  {dotspopups === 3 && (
                    <div className="dots-popup">
                      <div className="dots-content">
                        <div>
                          <p>
                            Indicates average performance in courses that are
                            passed by team members
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="dots"></div>
                </div>

                {/* heading */}
                <div
                  className="heading-numbers"
                  onClick={() => popuphandler(3)}
                >
                  <div className="heading">
                    <h6 className="Roboto_font">Courses-Completion Rate</h6>
                  </div>
                  <div>
                    <h5 className="Roboto_font">
                      <sup>-</sup>
                      <span>8</span>
                      <span className="extra">.63</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {/* heading-2 */}
                <div className="heading-2" onClick={() => popuphandler(3)}>
                  <h5 className="Roboto_font font-weight">
                    <span>30</span>
                    <span className="extra">.16</span>
                    <sup>%</sup>
                  </h5>
                </div>
                {/* end text */}
                <div className="end-text" onClick={() => popuphandler(3)}>
                  <div className="text">
                    <p>Company Avg Score vs Others</p>
                  </div>
                  {/* image */}
                  <div>
                    <img src={image3} alt=""></img>
                  </div>
                </div>
              </div>
              {/* end-box-3 */}
              {/* start-box-4 */}
              <div className="box-1">
                <div className="popup-main-4">
                  {showpopup === 4 && (
                    <div className="contant-popups-4">
                      <div className="main-popup-flex">
                        <div className="text-start">
                          <h6>Course Performance</h6>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="dots-main" onClick={() => dotshandler(4)}>
                  {dotspopups === 4 && (
                    <div className="dots-popup">
                      <div className="dots-content">
                        <div>
                          <p>
                            Indicates average performance in courses that are
                            passed by team members
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="dots"></div>
                </div>

                {/* heading */}
                <div
                  className="heading-numbers"
                  onClick={() => popuphandler(4)}
                >
                  <div className="heading">
                    <h6 className="Roboto_font">Course Pass Rate</h6>
                  </div>
                  <div>
                    <h5 className="Roboto_font">
                      <sup>+</sup>
                      <span>3</span>
                      <span className="extra">.41</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {/* heading-2 */}
                <div className="heading-2" onClick={() => popuphandler(4)}>
                  <h5 className="Roboto_font font-weight">
                    <span>98</span>
                    <span className="extra">.41</span>
                    <sup>%</sup>
                  </h5>
                </div>
                {/* end text */}
                <div className="end-text" onClick={() => popuphandler(4)}>
                  <div className="text">
                    <p>Company Avg Score vs Others</p>
                  </div>
                  {/* image */}
                  <div>
                    <img src={image3} alt=""></img>
                  </div>
                </div>
              </div>
              {/* end-box-4 */}
              {/* start-box-5 */}
              <div className="box-1">
                <div className="dots-main" onClick={() => dotshandler(5)}>
                  {dotspopups === 5 && (
                    <div className="dots-popup">
                      <div className="dots-content">
                        <div>
                          <p>
                            Indicates average performance in courses that are
                            passed by team members
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="dots"></div>
                </div>
                <div className="popup-main-5">
                  {showpopup === 5 && (
                    <div className="contant-popups-5">
                      <div className="main-popup-flex">
                        <div className="text-start">
                          <h6>Course Performance</h6>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* paragraph */}
                        <div className="text-pop-flex">
                          <p>Period Begins</p>
                          <p>10.15.17 </p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                        {/* heading */}
                        <div className="text-start">
                          <p>Top Performers</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* heading */}
                <div
                  className="heading-numbers"
                  onClick={() => popuphandler(5)}
                >
                  <div className="heading">
                    <h6 className="Roboto_font">Course Pass Rate</h6>
                  </div>
                  <div>
                    <h5 className="Roboto_font ">
                      <sup>-</sup>
                      <span>3</span>
                      <span className="extra">.43</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {/* heading-2 */}
                <div className="heading-2" onClick={() => popuphandler(5)}>
                  <h5 className="Roboto_font font-weight">
                    <span>1</span>
                    <span className="extra">.57</span>
                    <sup>%</sup>
                  </h5>
                </div>
                {/* end text */}
                <div className="end-text" onClick={() => popuphandler(5)}>
                  <div className="text">
                    <p>Company Avg Score vs Others</p>
                  </div>
                  {/* image */}
                  <div>
                    <img src={image3} alt=""></img>
                  </div>
                </div>
              </div>
              {/* end-box-1 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
