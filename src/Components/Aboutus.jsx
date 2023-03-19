import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="Aboutus_main">
      <p className="Aboutus_qoute">
        
        “Design should never say, “Look at me!” It should always say, “Look at
        this!”
      </p>
      <img src="https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <div className="Aboutus_content">
        <p className="abt_t1">---- Established 2022</p>
        <p className="abt_t2">Interior Desgin firm based in Hyderabad </p>
        <p className="abt_t3">
          Sidx Interior Design is a full-service interior design company
          located in the Seattle area since 2022, specializing in both
          residential and commercial design. Whether you need a quick refresh of
          furniture and paint colors, or an extensive whole-house renovation, we
          can provide the expertise to make sure the project runs smoothly and
          gives you the best results possible.
          <br /><br />
          Because we are a small design firm, we are extremely flexible and
          nimble. We have relationships with many local craftsmen and
          subcontractors, so you can be assured that your project is completed
          with the highest standards. Or, if you prefer, you can hire your own
          contractors, and we’ll work with them throughout the remodeling
          process.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
