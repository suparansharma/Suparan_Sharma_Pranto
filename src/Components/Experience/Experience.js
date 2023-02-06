import React from 'react'

const Experience = () => {
  return (
    <div><section id="testimonials" className="ts-block text-center pb-5">
    <div className="container">
        <div className="ts-title">
            <h2>Experience</h2>
        </div>
        {/* <!--end ts-title--> */}
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="owl-carousel" data-owl-dots="1" data-owl-loop="1" data-animate="ts-fadeInUp">
                    <div className="slide mb-5">
                        <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                            <i className="fa fa-quote-right"></i>
                        </figure>
                        <p className="ts-h5">
                            Teaching Assistant at AIUB (October 5,2021 – January 3,2022 )Responsibilities: As a lab assistant, providing support to the student with lab task, assist faculty to conduct the lab and solve the difficulties faced by the students

                        </p>
                        <div className="ts-circle__lg mb-3" data-bg-image="assets/img/person.png"></div>
                        <h5>Internship</h5>
                        <h6 className="ts-opacity__40">AIUB</h6>
                    </div>
                    {/* <!--end slide--> */}
                    <div className="slide mb-5">
                        <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                            <i className="fa fa-quote-right"></i>
                        </figure>
                        <p className="ts-h5">
                            •Front End Developer at PAP INTERNATIONAL LTD(April 11,2022 – July 5,2022).
                        </p>
                        <div className="ts-circle__lg mb-3" data-bg-image="assets/img/person-02.png"></div>
                        <h5>Internship </h5>
                        <h6 className="ts-opacity__40">PAP INTERNATIONAL LTD</h6>
                    </div>
                    {/* <!--end slide--> */}
                    {/* <div className="slide mb-5">
                      <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow"> 
                             <i className="fa fa-quote-right"></i>
                         </figure> 
                       <p className="ts-h5">
                            Nam egestas porta posuere. Nunc velit lorem, vestibulum vitae massa nec, lacinia dictum
                            ligula. Quisque scelerisque nec dolor id convallis. Vestibulum porta ipsum pretium
                            turpis rhoncus, non fringilla ipsum mattis.
                        </p> -->
                        <div className="ts-circle__lg mb-3" data-bg-image="assets/img/person-02.png"></div>
                        <h5>Junior Software Engineer </h5>
                        <h6 className="ts-opacity__40">PAP INTERNATIONAL LTD</h6>
                    </div> */}
                    {/* <!--end slide--> */}
                </div>
                {/* <!--end owl-carousel--> */}
            </div>
            {/* <!--end col-md-8--> */}
        </div>
        {/* <!--end row--> */}
    </div>
    {/* <!--end container--> */}
</section></div>
  )
}

export default Experience