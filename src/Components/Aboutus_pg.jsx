import React from "react";
import "./Aboutus_pg.css";
import Rank from "./Rank";
import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsFillTelephoneFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { AiFillMail, AiFillProject } from "react-icons/ai";
import { SiExpertsexchange } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
const Aboutus_pg = () => {
  return (
    <div className="Aboutuspg_main">
      <div className="Aboutuspg_intro">
        <div className="tx">
          <p className="apg_t1">A FEW WORDS ABOUT</p>
          <p className="apg_t2">Our Firm</p>
          <p className="apg_t3">
            {" "}
            Award Winning Interior Desgin Firm in Hyderabad
          </p>
        </div>
      </div>
      <div className="Aboutuspg_info">
        <p id="bg-text">Abdul Naseer</p>
        <div className="box3">
          <div className="txt">
            <p className="txt_t1">Interior Desginer,Co Founder</p>
            <p className="txt_t2">Abdul Naseer</p>
            <p className="txt_t3">
              We've all been there before. You're engaged in a conversation and
              a term comes up that's left you completely clueless. For that
              reason, we checked in with interior designers to find out the top
              industry terms that are worth knowing. Read on for their
              explanation of designer jargon and consider making use of these
              words the next time you find yourself in a design chat.
            </p>
            <p className="txt_t4">Get in Touch</p>
            <BsLinkedin /> <BsInstagram /> <BsFacebook />{" "}
            <BsFillTelephoneFill /> <AiFillMail />
          </div>
          <div className="txt">
            <img src="https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </div>
        </div>
      </div>
      <div className="Aboutuspg_count">
        <div className="box4">
          <div className="ab_1">
            <AiFillProject />
            <p className="abc_t1">52</p>
            <p className="abc_t2">Projects completed </p>
          </div>
          <div className="ab_1">
            <BsFillPersonFill />
            <p className="abc_t1">78 +</p>
            <p className="abc_t2">Happy Coustmers</p>
          </div>
          <div className="ab_1">
            <TfiCup />
            <p className="abc_t1">15</p>
            <p className="abc_t2">Awards Recieved </p>
          </div>
          <div className="ab_1">
            <SiExpertsexchange />
            <p className="abc_t1">17</p>
            <p className="abc_t2">Years in Service </p>
          </div>
        </div>
      </div>
      <div className="Aboutuspg_team">
      <p id="bg-text">Our Team</p>
        <div className="team">
        <p className="team_h">Meet Our Team</p>
        <p className="team_d"> Talent wins games, but teamwork and intelligence win championships.</p>
      <div className="box5">
          <div className="at_1">
            <img src="https://images.pexels.com/photos/7063784/pexels-photo-7063784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            
            <p className="at_t1">Abdul Naseer</p>
            <p className="at_t2">Developer</p>
            
          </div>
          <div className="at_1">
          <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            
            <p className="at_t1">Sidharth</p>
            <p className="at_t2">Co Founder</p>
           
          </div>
          <div className="at_1">
          <img src="https://images.pexels.com/photos/6405066/pexels-photo-6405066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
           
            <p className="at_t1">Shyam</p>
            <p className="at_t2">Team lead </p>
           
          </div>
          </div>
         
        </div>
        
        

      </div>
      <Rank/>
    </div>
  );
};

export default Aboutus_pg;
