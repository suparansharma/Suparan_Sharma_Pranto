import React from "react";
import pic1 from "./../../img/img-work-09.png";
import bg from "./../../img/bg-hero.jpg";
import { Col, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div >
     
      <div className="row">
        <div className="col col-lg-6">1 of 3</div>
        <div className="col col-lg-6" >
            <img className="w-100 h-600" src={bg} alt="" srcset="" />
        </div>
        {/* <div className="col col-lg-4">3 of 3</div> */}
      </div>
    </div>
  );
};

export default Home;
