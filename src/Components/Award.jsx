import React from "react";
import "./Award.css";
import { GiCheckedShield } from "react-icons/gi";
import { BsAwardFill } from "react-icons/bs";


const Award = () => {
  return (
    <div className="Award_main">
      <div className="Award_content">
        <p className="awd_t1">Award Winning Projects<BsAwardFill/></p>
        <p className="awd_t2">
          Interior Design Awards strive to showcase excellence and bestow
          recognition to those in the fields of interiors, landscapes, spaces
          and the experiences created in these interiors as well. The 5 design
          disciplines they look at are architectural design, interior design,
          graphic design, fashion design, and product design.{" "}
        </p>
        <ol className="awd_t3">
          <li><GiCheckedShield/>Cooper Hewitt National Design Awards</li>
          <li> <GiCheckedShield/> Restaurant and Bar Design Awards</li>
          <li> <GiCheckedShield/> International Design Awards</li>
        </ol>
        
      </div>
    </div>
  );
};

export default Award;
