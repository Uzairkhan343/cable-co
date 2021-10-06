import image10 from "../../Assets/images/facebook-logo.png";
import image11 from "../../Assets/images/linkedin.png";
import image12 from "../../Assets/images/twitter (1).png";
import image13 from "../../Assets/images/youtube (1).png";
import image14 from "../../Assets/images/google-plus.png";
import image15 from "../../Assets/images/apple.png";
import image16 from "../../Assets/images/play.png";
import image17 from "../../Assets/images/text2.png"
import "./style.css";
const Section4 = () => {
  return (
    <div>
      {/* footer  */}
      <div className="footer-main">
        <div className="footer-sec">
          {/* ul links */}
          <div className="ul-links-1 list-type">
            <ul>
              <li className="padding-li"> Account</li>
              <li>Change permissions</li>
              <li>Get transcript</li>
              <li>Billing Information</li>
              <li>More insights</li>
            </ul>
          </div>
          {/* links 2 */}
          <div className="ul-links-2 list-type">
            <ul>
              <li className="padding-li">Learning</li>
              <li>Dashboard home</li>
              <li>Course dashboard</li>
              <li>Certification dashboard</li>
              <li>More dashboard</li>
            </ul>
          </div>
          {/* links3 */}
          <div className="ul-links-3 list-type">
            <ul>
              <li className="padding-li">Support</li>
              <li>Customer Support</li>
              <li>FAQs / resources</li>
              <li>Live Support chat</li>
              <li>Email SCTE</li>
            </ul>
          </div>
          {/* links4 */}
          <div className="ul-links-4 list-type">
            <ul>
              <li className="padding-li">Quicklinks</li>
              <li>Corporate dashboard</li>
              <li>Personal dashboard</li>
              <li>Chapter dashboard</li>
              <li>SCTE website</li>
            </ul>
          </div>
          {/* image icons */}
          <div className="img-flex">
            <div className="margin-div">
              <img src={image10} alt=""></img>
            </div>
            <div className="margin-div">
              <img src={image11} alt=""></img>
            </div>
            <div className="margin-div">
              <img src={image12} alt=""></img>
            </div>
            <div className="margin-div">
              <img src={image13} alt=""></img>
            </div>
            <div className="margin-div">
              <img src={image14} alt=""></img>
            </div>
            <div className="margin-div">
              <img src={image10} alt=""></img>
            </div>
            <div className="margin-div">
              <img src={image15} alt=""></img>
            </div>
            <div className="margin-div">
              <img src={image16} alt=""></img>
            </div>
          </div>
          {/* ffoter end */}
        </div>
        <div className="last-footer-sec">
          <div className="last-ul-sec-footer">
            <ul>
              <li>140 philips Road,Exton PA 19341</li>
              <li className="margin-ul-li">Toll-free: 800.542.5040</li>
              <li>Phone: 610.363.6888</li>
              <li className="margin-ul-li">Fax: 610.8847237</li>
            </ul>
          </div>
          {/* img */}
          <div className="last-img">
            <img src={image17} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
