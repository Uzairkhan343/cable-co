import Section1 from "../../components/section1/section1";
import Section2 from "../../components/section2/section2";
import Section3 from "../../components/section3/section3";
import Section4 from "../../components/section4/section4";
import "../../Assets/style/style.css"
const Index =()=> {
    return (
      <div className="main-page">
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
      </div>
    );
  }
  
  export default Index;