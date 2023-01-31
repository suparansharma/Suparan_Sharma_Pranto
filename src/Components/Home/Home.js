import React from "react";
import pic1 from "./../../img/img-work-09.png";
import bg from "./../../img/bg-hero.jpg";
import { Col, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="ts-page-wrapper" id="page-top">


      <div id="ts-hero" className="ts-animate-hero-items">

        {/* <!--HERO CONTENT ****************************************************************************************--> */}
        <div className="container position-relative h-100 ts-align__vertical mr-10">
          <div className="row w-100">
            <div className="col-md-7">
              {/* <!--SOCIAL ICONS--> */}
              <figure className="ts-social-icons mb-4">
                <a href="https://www.facebook.com/suparan.dada/" className="mr-3">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://github.com/suparansharma" className="mr-3">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/suparan-sharma-pranto/" className="mr-3">
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://www.instagram.com/suparan_sharma_pranto/" className="mr-3">
                  <i className="fab fa-instagram"></i>
                </a>
              </figure>

              {/* <!--TITLE --> */}
              <h1>I am Suparan Sharma</h1>
              <h1 className="ts-bubble-border">
                <span className="ts-title-rotate">
                  <span className="active">Web Developer</span>
                  <span>Designer</span>
                  <span>Photographer</span>
                  <span>Creative Person</span>
                </span>
              </h1>

            </div>
            {/* <!--end col-md-8--> */}
          </div>
          {/* <!--end row--> */}
          <a href="#my-services" className="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3">
            <span className="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
              <i className="fa fa-arrow-down text-white"></i>
            </span>
            <span className="ts-hidden ts-circle__sm rounded-0">
              <i className="fa fa-arrow-down text-white"></i>
            </span>
          </a>

        </div>
        {/* <!--end container--> */}
        {/* <!--END HERO CONTENT ************************************************************************************--> */}

        {/* <!--HERO BACKGROUND *************************************************************************************--> */}
        <div className="ts-background">
          <div className="ts-background-image" data-bg-image="assets/img/bg-hero.jpg"></div>
        </div>
        {/* <!--END HERO BACKGROUND *********************************************************************************--> */}

      </div>

      {/* <div className="row">
        <div className="col col-lg-6">1 of 3</div>
        <div className="col col-lg-6" >
            <img className="w-100 h-600" src={bg} alt="" srcset="" />
        </div>
  
      </div> */}
    </div>
  );
};

export default Home;
