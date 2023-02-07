import React from "react";
import "./Home.css";

const Home = () => {
  return (
    


      <div id="ts-hero" className="ts-animate-hero-items">

        {/* <!--HERO CONTENT ****************************************************************************************--> */}
        <div className="container position-relative h-100 ts-align__vertical name-intro ">
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

        <main id="ts-content">

        {/* <!--MY SERVICES ***********************************************************************************--> */}
            <section id="my-services" className="ts-block ts-xs-text-center pb-0">
                <div className="container">
                    <div className="ts-title text-center">
                        <h2>My Services</h2>
                    </div>
                    {/* <!--end ts-title--> */}
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-xl-4">
                            <div className="ts-item" data-animate="ts-fadeInUp">
                                <div className="ts-item-content">
                                    <div className="ts-item-header">
                                        <figure className="icon">
                                            <img src="assets/img/icon-brushes.png" alt=""/>
                                        </figure>
                                        {/* <!--end icon--> */}
                                    </div>
                                    {/* <!--end ts-item-header--> */}
                                    <div className="ts-item-body">
                                        <h4>Web Design</h4>
                                        <p className="mb-0">
                                            Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
                                        </p>
                                    </div>
                                    {/* <!--end ts-item-body--> */}
                                    <div className="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                    {/* <!--end ts-item-footer--> */}
                                </div>
                                {/* <!--end ts-item-content--> */}
                            </div>
                            {/* <!--end ts-item--> */}
                        </div>
                        {/* <!--end col-xl-4--> */}
                        <div className="col-sm-6 col-md-4 col-xl-4">
                            <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".4s">
                                <div className="ts-item-content">
                                    <div className="ts-item-header">
                                        <figure className="icon">
                                            <img src="assets/img/icon-lcd.png" alt=""/>
                                        </figure>
                                        {/* <!--end icon--> */}
                                    </div>
                                    {/* <!--end ts-item-header--> */}
                                    <div className="ts-item-body">
                                        <h4>Coding</h4>
                                        <p className="mb-0">
                                            Aenean pretium nulla libero, vitae iaculis libero efficitur a. Fusce ut augue finibus quam
                                        </p>
                                    </div>
                                    {/* <!--end ts-item-body--> */}
                                    <div className="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                    {/* <!--end ts-item-footer--> */}
                                </div>
                                {/* <!--end ts-item-content--> */}
                            </div>
                            {/* <!--end ts-item--> */}
                        </div>
                        {/* <!--end col-xl-4--> */}
                        <div className="col-sm-6 col-md-4 col-xl-4">
                            <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".5s">
                                <div className="ts-item-content">
                                    <div className="ts-item-header">
                                        <figure className="icon">
                                            <img src="assets/img/icon-phone.png" alt=""/>
                                        </figure>
                                        {/* <!--end icon--> */}
                                    </div>
                                    {/* <!--end ts-item-header--> */}
                                    <div className="ts-item-body">
                                        <h4>App Developing</h4>
                                        <p className="mb-0">
                                            Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
                                        </p>
                                    </div>
                                    {/* <!--end ts-item-body--> */}
                                    <div className="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                    {/* <!--end ts-item-footer--> */}
                                </div>
                                {/* <!--end ts-item-content--> */}
                            </div>
                            {/* <!--end ts-item--> */}
                        </div>
                       
                        {/* <!--end col-xl-4--> */}
                        <div className="col-sm-6 col-md-4 col-xl-4">
                            <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".3s">
                                <div className="ts-item-content">
                                    <div className="ts-item-header">
                                        <figure className="icon">
                                            <img src="assets/img/icon-pencil.png" alt=""/>
                                        </figure>
                                        {/* <!--end icon--> */}
                                    </div>
                                    {/* <!--end ts-item-header--> */}
                                    <div className="ts-item-body">
                                        <h4>Copy Writing</h4>
                                        <p className="mb-0">
                                            Fusce lorem ex, fringilla eget consequat ut, molestie sit amet nibh. Nullam vitae tincidunt
                                        </p>
                                    </div>
                                    {/* <!--end ts-item-body--> */}
                                    <div className="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                    {/* <!--end ts-item-footer--> */}
                                </div>
                                {/* <!--end ts-item-content--> */}
                            </div>
                            {/* <!--end ts-item--> */}
                        </div>
                        {/* <!--end col-xl-4--> */}
                        <div className="col-sm-6 col-md-4 col-xl-4">
                            <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".1s">
                                <div className="ts-item-content">
                                    <div className="ts-item-header">
                                        <figure className="icon">
                                            <img src="assets/img/icon-camera.png" alt=""/>
                                        </figure>
                                        {/* <!--end icon--> */}
                                    </div>
                                    {/* <!--end ts-item-header--> */}
                                    <div className="ts-item-body">
                                        <h4>Photography</h4>
                                        <p className="mb-0">
                                            Fusce lorem ex, fringilla eget consequat ut, molestie sit amet nibh. Nullam vitae tincidunt
                                        </p>
                                    </div>
                                    {/* <!--end ts-item-body--> */}
                                    <div className="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                    {/* <!--end ts-item-footer--> */}
                                </div>
                                {/* <!--end ts-item-content--> */}
                            </div>
                            {/* <!--end ts-item--> */}
                        </div>
                       
                        {/* <!--end col-xl-4--> */}
                        <div className="col-sm-6 col-md-4 col-xl-4">
                            <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".2s">
                                <div className="ts-item-content">
                                    <div className="ts-item-header">
                                        <figure className="icon">
                                            <img src="assets/img/icon-video.png" alt=""/>
                                        </figure>
                                        {/* <!--end icon--> */}
                                    </div>
                                    {/* <!--end ts-item-header--> */}
                                    <div className="ts-item-body">
                                        <h4>Video Editing</h4>
                                        <p className="mb-0">
                                            Aenean pretium nulla libero, vitae iaculis libero efficitur a. Fusce ut augue finibus quam
                                        </p>
                                    </div>
                                    {/* <!--end ts-item-body--> */}
                                    <div className="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                    {/* <!--end ts-item-footer--> */}
                                </div>
                                {/* <!--end ts-item-content--> */}
                            </div>
                            {/* <!--end ts-item--> */}
                        </div>
                        {/* <!--end col-xl-4--> */}

                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!--END MY SERVICES *************************************************************************************--> */}

            </main>

      </div>

  
  );
};

export default Home;
