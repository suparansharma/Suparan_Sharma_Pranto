import React from 'react'

const About = () => {
  return (
    <div>
          <section id="about-me" class="ts-block pb-4">
                <div class="container">
                <div class="ts-title text-center">
                        <h2>About Me</h2>
                    </div>
                    <div class="row ts-align__vertical">
                    <div class="col-md-6">
                            <img src="assets/img/img-man-looking.png" alt="" class="mw-100 mb-5"/>
                        </div>   
                        <div class="col-md-6">
                        <h4 class="ts-bubble-border">Hi There</h4>
                            <p>
                                I am a highly motivated computer science graduate eagerly looking forward to stepping out of my comfort zone for new professional challenges. My educational background endowed me with the necessary skill sets to approach a problem from various perspectives and get myself industryready. Currently, I am seeking for a growing and rewarding career in web development where I can apply my academic knowledge and technological skills.
                            </p>
                            <dl class="ts-column-count-2">
                                <dt>Name:</dt>
                                <dd>Suparan Sharma</dd>
                                <dt>Phone:</dt>
                                <dd>+8801789085098</dd>
                                <dt>Email:</dt>
                                <dd>suparansharmap@gmail.com</dd>
                                <dt>LinkedIn:</dt>
                                <dd>SUPARAN SHARMA PRANTO</dd>
                            </dl>
                            <a href="#contact" class="ts-btn-effect mr-2">
                                <span class="ts-visible btn btn-primary ts-btn-arrow">Contact Me</span>
                                <span class="ts-hidden btn btn-primary ts-btn-arrow" data-bg-color="#d44729">Contact Me</span>
                            </a>

                            <a href="https://drive.google.com/file/d/17DRFcWLR35EHIP9YJwCQ14tFkOr0qLZT/view?usp=sharing" class="ts-btn-effect mr-2">
                                <span class="ts-visible btn btn-outline-light">
                                    <i class="fa fa-download small mr-2"></i>
                                    Download CV
                                </span>
                                <span class="ts-hidden btn btn-light bg-white">
                                    <i class="fa fa-download small mr-2"></i>
                                    Download CV
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About