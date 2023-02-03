import React from 'react'

const Skill = () => {
  return (
    <div>

           <section id="my-skills" className="ts-block pb-5">
                <div className="container">
                    <div className="ts-title text-center">
                        <h2>My Skills</h2>
                    </div>
                    {/* <!--end ts-title--> */}
                    <h4>Every Day is a  New Challenge</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                               
                            Building a high-quality product is the end goal for any organization, but the software development process is evolving while automation is becoming rampant, and new tools and libraries are emerging daily.
                            </p>
                            <p>
                                An unestablished project environment is always a common software development challenge in terms of its impact on project delivery. If the environment is not available, then there is no way you can proceed with your project on time and under budget.
                            </p>
                            <p>
                                To ensure efficient project development, test and pre-production environments should be made available during the development, testing, and user acceptance testing (UAT) phases. Invest in a solid IT infrastructure upfront to create a better software development environment.
                            </p>
                            <a href="#contact" className="btn btn-outline-light mb-5">Contact Me</a>
                        </div>
                        {/* <!--end col-md-6--> */}
                        <div className="col-md-6">
                    
                            <dl className="ts-column">
                                <dt>•Programming Languages:</dt>
                                <dd>HTML, CSS, Javascript ,Typescript, C,C++,C#, PHP.</dd>
                                <dt>•Frameworks:</dt>
                                <dd>React-Redux ,Bootstrap ,Tailwind.</dd>
                                <dt>•Database & Others: </dt>
                                <dd>MongoDB, MySQL, Oracle, NodeJS, Firebase, Netlify, XAMPP</dd>
                                <dt>•CMS: </dt>
                                <dd>Wordpress</dd>
                                <dt>•Software:</dt>
                                <dd>VS Code, Notepad++, Visual Studio, Microsoft Office,Adobe photoshop,Camtasia Studio
                                    .</dd>

                                <dt>•Version Control:</dt>
                                <dd>GitHub.</dd>

                            </dl>
                            {/* <!--end progress--> */}
                        </div>
                        {/* <!--end col-md-6--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
    </div>
  )
}

export default Skill