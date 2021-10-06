import { useEffect, useRef, useState } from "react";
import ZingChart from "zingchart-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./style.css";
import "react-circular-progressbar/dist/styles.css";
import "zingchart/es6";
import image4 from "../../Assets/images/rubik.png";
import image5 from "../../Assets/images/arrows.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Section2 = () => {
  AOS.init({
    duration: 500,
  });
  let state = {
    gui: {
      contextMenu: {
        backgroundColor: "#333b52", // sets background for entire contextMenu
        button: {
          backgroundColor: "#333b52",
          lineColor: "#333b52",
          visible: false,
        },
        docked: true,
        gear: {
          alpha: 1,
          backgroundColor: "#333b52",
        },
        item: {
          backgroundColor: "#333b52",
          borderColor: "#333b52",
          borderWidth: "0px",
          color: "#fff",
          fontFamily: "Lato",
        },
        position: "right",
      },
    },
    graphset: [
      {
        type: "ring",
        backgroundColor: "transparent",
        title: {
          text: "",
          padding: "15px",
          fontColor: "#1E5D9E",
          fontFamily: "Lato",
          fontSize: "14px",
        },
        subtitle: {
          text: "06/10/20 - 07/11/20",
          padding: "5px",
          fontColor: "#777",
          fontFamily: "Lato",
          fontSize: "12px",
        },
        legend: {
          adjustLayout: true,
          align: "center",
          backgroundColor: "#FBFCFE",
          borderWidth: "0px",
          item: {
            cursor: "pointer",
            fontColor: "#777",
            fontSize: "12px",
            offsetX: "-6px",
          },
          marker: {
            type: "circle",
            borderWidth: "0px",
            cursor: "pointer",
            size: 5,
          },
          mediaRules: [
            {
              maxWidth: "500px",
              visible: false,
            },
          ],
          toggleAction: "remove",
          verticalAlign: "bottom",
        },
        plot: {
          valueBox: [
            {
              type: "all",
              text: "%t",
              placement: "out",
            },
            {
              type: "all",
              text: "%npv%",
              placement: "in",
            },
          ],
          animation: {
            effect: "ANIMATION_EXPAND_VERTICAL",
            sequence: "ANIMATION_BY_PLOT_AND_NODE",
          },
          backgroundColor: "#FBFCFE",
          borderWidth: "0px",
          hoverState: {
            cursor: "hand",
          },
          slice: "60%",
        },
        plotarea: {
          margin: "70px 0px 10px 0px",
          backgroundColor: "transparent",
          borderRadius: "10px",
          borderWidth: "0px",
        },
        scaleR: {
          refAngle: 270,
        },
        tooltip: {
          text: '<span style="color:%color">Page Url: %t</span><br><span style="color:%color">Pageviews: %v</span>',
          anchor: "c",
          backgroundColor: "none",
          borderWidth: "0px",
          fontSize: "16px",
          mediaRules: [
            {
              maxWidth: "500px",
              y: "54%",
            },
          ],
          sticky: true,
          thousandsSeparator: ",",
          x: "50%",
          y: "50%",
        },
        noData: {
          text: "No Selection",
          alpha: 0.6,
          backgroundColor: "#20b2db",
          bold: true,
          fontSize: "18px",
          textAlpha: 0.9,
        },
        series: [
          {
            text: "",
            values: [106541],
            backgroundColor: "#00BAF2",
            lineColor: "#00BAF2",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#00BAF2",
            },
          },
          {
            text: "",
            values: [56711],
            backgroundColor: "#E80C60",
            lineColor: "#E80C60",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#E80C60",
            },
          },
          {
            text: "",
            values: [43781],
            backgroundColor: "#9B26AF",
            lineColor: "#9B26AF",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#9B26AF",
            },
          },
        ],
      },
    ],
  };
  let myConfig = {
    type: "line",
    "background-color": "transparent",
    series: [
      {
        values: [20, 40, 25, 50, 15, 45, 33, 34],
        backgroundColor: "#333b52",
        "line-color": "#6666FF",
        "line-style": "dashed",
        "line-width": 5,
      },
    ],
  };
  const box = useRef(0);
  const [collapsibleContent, setCollapsibleContent] = useState(0);
  useEffect(() => {
    if (collapsibleContent === 1) {
      box.current.style.width = "80%";
    }
    if (collapsibleContent === 2) {
      box.current.style.width = "80%";
    }
  }, [collapsibleContent]);

  const collapsiblehandler = (value) => {
    if (collapsibleContent === value) {
      setCollapsibleContent(0);
    } else setCollapsibleContent(value);
    console.log(value);
  };
  const [addmore, setaddmore] = useState(0);
  const addhandler = (value) => {
    if (addmore === value) {
      setaddmore(0);
    } else setaddmore(value);
  };

  return (
    <div>
      {/* carousal*/}
      <Carousel>
        {/* <div className="chart-respon-1">        </div> */}
        <div className="chart-margin">
          <div className="heading-section">
            <h3>Utilization</h3>
          </div>
          <div className="chart" style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={67} />
          </div>
        </div>
        <div className="chart-width">
          <div className="heading-section">
            <h3>Utilization</h3>
          </div>
          <ZingChart data={state} />
          <div id="myChart" class="chart--container">
            <a class="zc-ref" href="https://www.zingchart.com/">
              Powered by ZingChart
            </a>
          </div>
        </div>
        <div>
          <div className="chart-margin">
            <div className="heading-section">
              <h3>Utilization</h3>
            </div>
            <div className="chart" style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={67} />
            </div>
          </div>
        </div>
        <div>
          <div className="chart-margin">
            <div className="heading-section">
              <h3>Utilization</h3>
            </div>
            <div className="chart" style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={67} />
            </div>
          </div>
        </div>
      </Carousel>
      {/* end */}
      <div className="main-section-2">
        <div className="bg-section-2">
          <div className="section-2-main">
            {/* left side */}
            <div className="left-side-section">
              {/* dots */}
              <div className="dots-sec-2">
                <div className="dots-2"></div>
                <div className="dots-2"></div>
                <div className="dots-2"></div>
              </div>
              {/* heading */}
              <div className="heading-section">
                <h3>Utilization</h3>
              </div>
              {/* graph */}
              <div className="graph-main">
                <div className="chart-margin-1">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={90} />
                  </div>
                </div>
                <div className="chart-width">
                  <ZingChart data={state} />
                  <div id="myChart" class="chart--container">
                    <a class="zc-ref" href="https://www.zingchart.com/">
                      Powered by ZingChart
                    </a>
                  </div>
                </div>
              </div>
              {/* npm strokes */}
              <div className="npm-charts">
                <div className="chart-margin">
                  <div className="chart" style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={67} />
                  </div>
                </div>
                {/* charts 2 */}
                <div className="chart-margin-2">
                  <div className="chart" style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={55} />
                  </div>
                </div>
              </div>
              {/* heading dots */}
              <div className="main-sec-heading">
                <div className="heading-dots-section">
                  <div className="dots-main-3">
                    <div className="dots-3"></div>
                    <div className="dots-3"></div>
                    <div className="dots-3"></div>
                  </div>
                  {/* heading */}
                  <div className="para-heading Roboto_font">
                    <h3 className="Roboto_font">Course Duration Average </h3>
                    <p className="Roboto_font">(in Days)</p>
                  </div>
                </div>
                <div className="side-heading">
                  <div className="dots-main-4">
                    <div className="dots-4"></div>
                    <div className="dots-4"></div>
                    <div className="dots-4"></div>
                  </div>
                  {/* heading */}
                  <div className="heading-div">
                    <h3 className="Roboto_font">Single Engagement</h3>
                  </div>
                </div>
              </div>
              {/* heading */}
              <div className="sec-3">
                <div className="heading-last-section">
                  <h1>Insights</h1>
                </div>
                {/*  chart container  */}
                <div className="charts-main">
                  <div data-aos={"fade-right"} className="chart-1">
                    <p>
                      Looks like your company's Coursework Performance has
                      increased in several areas since last month. Nice job
                    </p>
                  </div>
                  {/* chart2 */}
                  <div data-aos={"fade-left"} className="chart-2">
                    <p>
                      Your company's Wi-Fi competencies might need some
                      attention. Here are a few Courses you might consider:
                      httpz:/bit.ly.kashjf45
                    </p>
                  </div>
                  {/* chart3 */}
                  <div data-aos={"fade-right"} className="chart-3">
                    <p>
                      Did you know that you can customize your Company's Home
                      Screen by selecting "Add to Home" under the Extras Menu?
                      Just look for the three dots.
                    </p>
                  </div>
                  {/* chart 4 */}
                  <div data-aos={"fade-left"} className="chart-4">
                    <p>
                      Certification is one of the best ways to keep your
                      company's skills current and remain competitive. Stay on
                      top of your company's Certification Performance.
                    </p>
                  </div>
                  {/* chart 5 */}
                  <div data-aos={"fade-right"} className="chart-5">
                    <p>
                      Want to know who your company's Top Performers are? You
                      can see them sorted by areas of expertise and get their
                      Member Transcripts right here.
                    </p>
                  </div>
                  {/* chart end  */}
                </div>
                {/* bg-image */}

                <div className="bg-last-image">
                  <div className="bg-last"></div>
                </div>
              </div>
            </div>
            {/* right side section */}
            <div className="right-side-section">
              {/* heading dots */}
              <div className="dots-sec">
                <div className="dots-1"></div>
                <div className="dots-1"></div>
                <div className="dots-1"></div>
              </div>
              {/* heading */}
              <div className="heading-right">
                <h3 className="Roboto_font">Professional Development Index</h3>
              </div>
              {/* ul */}
              <div className="main-sec-ul">
                <ul className="Roboto_font ul-main-flex">
                  <li className="li-one">Average</li>
                  <li className="li-two">Your Company 2018</li>
                  <li className="li-three">Your Company 2017</li>
                </ul>
              </div>
              {/* svgs */}
              <div className="svg-main">
                <div className="polyline">
                  <div id="myChart">
                    <ZingChart data={myConfig} />
                  </div>
                </div>
              </div>
              {/* months */}
              <div className="months-main">
                <div>
                  <ul>
                    <li>JAN</li>
                    <li>FEB</li>
                    <li>MAR</li>
                    <li>APR</li>
                    <li>MAY</li>
                    <li>JUN</li>
                    <li>JUL</li>
                    <li>AUG</li>
                    <li>SEP</li>
                    <li>OCT</li>
                    <li>NOV</li>
                    <li>DEC</li>
                  </ul>
                </div>
              </div>
              {/* heading */}
              <div className="bg-heading-main">
                <div className="bg-heading">
                  <h1>Company Competencies</h1>
                </div>
              </div>
              {/* icon heading */}
              <div className="icon-heading" onClick={() => addhandler(1)}>
                {addmore === 1 && (
                  <div className="addmore-main">
                    <div className="addmore-contect">
                      <div className=" text-icons">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>Wifi</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* text icon 2 */}
                      <div className=" text-icons-2">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>Access NetWork</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* end */}
                      {/* text icon 2 */}
                      <div className=" text-icons-2">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>Cabling</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* end */}
                      {/* text icon 2 */}
                      <div className=" text-icons-2">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>DOCSIS</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* end */}
                      {/* text icon 2 */}
                      <div className=" text-icons-2">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>Headend</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* end */}
                      {/* text icon 2 */}
                      <div className=" text-icons-2">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>Home Networking</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* end */}
                      {/* text icon 2 */}
                      <div className=" text-icons-2">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>Video</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* end */}
                      {/* text icon 2 */}
                      <div className=" text-icons-2">
                        <div>
                          <img src={image5} alt=""></img>
                          <span>VOIP</span>
                        </div>
                        {/*text */}
                        <div>
                          <div className="dots-5">
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                            <div className="dots-6"></div>
                          </div>
                        </div>
                      </div>
                      {/* end */}
                    </div>
                  </div>
                )}
                <div className="icons-head">
                  <img src={image4} alt=""></img>
                  <span>Add More</span>
                </div>
              </div>
              {/* icon text */}
              <div className="icon-text">
                <div
                  className="icon-text-main"
                  onClick={() => collapsiblehandler(1)}
                >
                  <img src={image5} alt=""></img>
                  <div>
                    <p>Wifi</p>
                  </div>
                </div>
                {/* dots */}
                <div className="dots-5">
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                </div>
              </div>
              {collapsibleContent === 1 && (
                <div className="right-main">
                  {/* color1 */}
                  {/* color */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Primer WiFi</h4>
                      </li>
                      <div className="flex-color">
                        <span className="light-green-color"></span>
                        <span className="yellow-color"></span>
                        <span className="span-text-1">Your Company</span>
                      </div>
                      <div className="flex-color">
                        <span className="darkblue"></span>
                        <span className="span-text-2">Similar Companies</span>
                      </div>
                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="color_1">
                    <div
                      ref={box}
                      style={{
                        width: "0px",
                        background: "#31d6c4",
                        transitionProperty: "width",
                        transitionDuration: "2s",
                        borderRadius: "10px",
                      }}
                    >
                      <span>.</span>
                    </div>
                  </div>
                  {/* color2 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end 1 */}
                  {/* color2 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Fundamental WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color3 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color 4 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end2 */}
                  {/* color3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Advanced WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color-5 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-6 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Intermediate WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color 4 */}
                  {/* color-7 */}
                  <div class="color_1">
                    <div class="color_4">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-8 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end */}
                  {/* end4 */}
                </div>
              )}
              {/* progress bar2 */}
              <div className="icon-text-1">
                <div
                  className="icon-text-main"
                  onClick={() => collapsiblehandler(2)}
                >
                  <img src={image5} alt=""></img>
                  <div>
                    <p>RF</p>
                  </div>
                </div>
                {/* dots */}
                <div className="dots-5">
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                </div>
              </div>
              {collapsibleContent === 2 && (
                <div className="right-main">
                  {/* color1 */}
                  {/* color */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Primer WiFi</h4>
                      </li>
                      <div className="flex-color">
                        <span className="light-green-color"></span>
                        <span className="yellow-color"></span>
                        <span className="span-text-1">Your Company</span>
                      </div>
                      <div className="flex-color">
                        <span className="darkblue"></span>
                        <span className="span-text-2">Similar Companies</span>
                      </div>
                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  <div class="color_1">
                    <div
                      class="color_2"
                      ref={box}
                      style={{
                        width: "0px",
                        background: "#31d6c4",
                        transitionProperty: "width",
                        transitionDuration: "2s",
                        borderRadius: "10px",
                      }}
                    >
                      <span>.</span>
                    </div>
                  </div>
                  {/* color2 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end 1 */}
                  {/* color2 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Fundamental WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color3 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color 4 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end2 */}
                  {/* color3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Advanced WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color-5 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-6 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Intermediate WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color 4 */}
                  {/* color-7 */}
                  <div class="color_1">
                    <div class="color_4">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-8 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end */}
                  {/* end4 */}
                </div>
              )}
              {/* progress bar2 end */}
              {/* prograss bar 3 */}
              <div className="icon-text-1">
                <div
                  className="icon-text-main"
                  onClick={() => collapsiblehandler(3)}
                >
                  <img src={image5} alt=""></img>
                  <div>
                    <p>Video bar</p>
                  </div>
                </div>
                {/* dots */}
                <div className="dots-5">
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                </div>
              </div>
              {collapsibleContent === 3 && (
                <div className="right-main">
                  {/* color1 */}
                  {/* color */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Primer WiFi</h4>
                      </li>
                      <div className="flex-color">
                        <span className="light-green-color"></span>
                        <span className="yellow-color"></span>
                        <span className="span-text-1">Your Company</span>
                      </div>
                      <div className="flex-color">
                        <span className="darkblue"></span>
                        <span className="span-text-2">Similar Companies</span>
                      </div>
                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color2 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end 1 */}
                  {/* color2 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Fundamental WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color3 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color 4 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end2 */}
                  {/* color3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Advanced WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color-5 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-6 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Intermediate WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color 4 */}
                  {/* color-7 */}
                  <div class="color_1">
                    <div class="color_4">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-8 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end */}
                  {/* end4 */}
                </div>
              )}
              {/* progress bar 3 end */}
              {/* progress nar 4 */}
              <div className="icon-text-1">
                <div
                  className="icon-text-main"
                  onClick={() => collapsiblehandler(4)}
                >
                  <img src={image5} alt=""></img>
                  <div>
                    <p>Optical Theory</p>
                  </div>
                </div>
                {/* dots */}
                <div className="dots-5">
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                  <div className="dots-6"></div>
                </div>
              </div>
              {collapsibleContent === 4 && (
                <div className="right-main">
                  {/* color1 */}
                  {/* color */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Primer WiFi</h4>
                      </li>
                      <div className="flex-color">
                        <span className="light-green-color"></span>
                        <span className="yellow-color"></span>
                        <span className="span-text-1">Your Company</span>
                      </div>
                      <div className="flex-color">
                        <span className="darkblue"></span>
                        <span className="span-text-2">Similar Companies</span>
                      </div>
                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color2 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end 1 */}
                  {/* color2 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Fundamental WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color3 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color 4 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end2 */}
                  {/* color3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Advanced WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color-5 */}
                  <div class="color_1">
                    <div class="color_2">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-6 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end3 */}
                  <div>
                    <ul className="ul-sec-flex">
                      <li>
                        <h4>Intermediate WiFi</h4>
                      </li>

                      <li>
                        <h5>Suggestions</h5>
                      </li>
                    </ul>
                  </div>
                  {/* color 4 */}
                  {/* color-7 */}
                  <div class="color_1">
                    <div class="color_4">
                      <span>.</span>
                    </div>
                  </div>
                  {/* color-8 */}
                  <div class="color_1">
                    <div class="color_3">
                      <span>.</span>
                    </div>
                  </div>
                  {/* end */}
                  {/* end4 */}
                </div>
              )}
              {/* progrss bar 4 end */}
              {/* reponisve  */}
              <div className="bg-color-responsive-end">
                <div className="heading-respon-h1">
                  <h1>Insights</h1>
                </div>
                <div className="charts-main-1">
                  <div data-aos={"fade-right"} className="chart-11">
                    <p>
                      Looks like your company's Coursework Performance has
                      increased in several areas since last month. Nice job
                    </p>
                  </div>
                  {/* chart2 */}
                  <div data-aos={"fade-left"} className="chart-12">
                    <p>
                      Your company's Wi-Fi competencies might need some
                      attention. Here are a few Courses you might consider:
                      httpz:/bit.ly.kashjf45
                    </p>
                  </div>
                  {/* chart3 */}
                  <div data-aos={"fade-right"} className="chart-13">
                    <p>
                      Did you know that you can customize your Company's Home
                      Screen by selecting "Add to Home" under the Extras Menu?
                      Just look for the three dots.
                    </p>
                  </div>
                  {/* chart 4 */}
                  <div data-aos={"fade-left"} className="chart-14">
                    <p>
                      Certification is one of the best ways to keep your
                      company's skills current and remain competitive. Stay on
                      top of your company's Certification Performance.
                    </p>
                  </div>
                  {/* chart 5 */}
                  <div data-aos={"fade-right"} className="chart-15">
                    <p>
                      Want to know who your company's Top Performers are? You
                      can see them sorted by areas of expertise and get their
                      Member Transcripts right here.
                    </p>
                  </div>
                  {/* chart end  */}
                </div>
              </div>
              {/* responsive end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
