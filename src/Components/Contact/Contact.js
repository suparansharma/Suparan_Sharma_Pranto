import React from 'react'

const Contact = () => {
  return (
    <div> <section id="contact" class="ts-block ts-separate-bg-element" data-bg-image="assets/img/bg-man-wall.jpg" data-bg-image-opacity=".1">
    <div class="container">
        <div class="ts-title text-center">
            <h2 class="ts-bubble-border">Get In Touch</h2>
        </div>
        <div class="row ts-xs-text-center ">
            <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp">
                {/* <!-- <img src="assets/img/icon-pin.png" class="mb-4" alt=""> --> */}
                <h5>Address</h5>
                <div class="ts-opacity__50">
                    <figure class="mb-0">House-4, Road-13, Nikunja-2,</figure>
                    <figure>Khilkhet, Dhaka-1229</figure>
                </div>
                {/* <!--end ts-opacity__50--> */}
            </div>
            {/* <!--end col-md-3--> */}
            <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".1s">
                {/* <!-- <img src="assets/img/icon-phone-02.png" class="mb-4" alt=""> --> */}
                <h5>Phone</h5>
                <div class="ts-opacity__50">
                    <figure class="mb-0">01789085098</figure>
                    <figure>01854232578</figure>
                </div>
                {/* <!--end ts-opacity__50--> */}
            </div>
            {/* <!--end col-md-3--> */}
            <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".2s">
                {/* <!-- <img src="assets/img/icon-envelope.png" class="mb-4" alt=""> --> */}
                <h5>Email</h5>
                <div class="ts-opacity__50">
                    <figure class="mb-0">suparansharmap@gmail.com</figure>
                    {/* <!-- <figure>support@example.com</figure> --> */}
                </div>
                {/* <!--end ts-opacity__50--> */}
            </div>
            {/* <!--end col-md-3--> */}
            <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".3s">
                
                {/* <!-- <img src="assets/img/icon-talk-bubble.png" class="mb-4" alt=""> --> */}
                <h5>Facebook Chat</h5>
                <div class="ts-opacity__50">
                    
                    <figure><a href="https://www.facebook.com/suparan.dada/"></a>Suparan Sharma Pranto</figure>
                </div>
                {/* <!--end ts-opacity__50--> */}
            </div>
            {/* <!--end col-md-3--> */}
        </div>
        {/* <!--end row--> */}

        <div class="pt-5">
            <div class="row">
                <div class="col-md-4">
                    <h3>Let’s Connect</h3>
                    <div class="ts-column-count-sm-2">
                        <a href="https://www.facebook.com/suparan.dada/" class="mb-3 d-flex text-white ts-align__vertical">
                        <span class="ts-circle__xs border border-white ts-border-light mr-4">
                            <i class="fab fa-facebook-f"></i>
                        </span>
                            <span>Facebook</span>
                        </a>
                        {/* <!--end link--> */}

                        <a href="https://github.com/suparansharma" class="mb-3 d-flex text-white ts-align__vertical">
                            <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                <i class="fab fa-github"></i>
                            </span>
                                <span>Github</span>
                            </a>
                       
                       
                        {/* <!--end link--> */}
                        <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                        <span class="ts-circle__xs border border-white ts-border-light mr-4">
                            <i class="fab fa-instagram"></i>
                        </span>
                            <span>Instagram</span>
                        </a>
                        {/* <!--end link--> */}
                        <a href="https://www.instagram.com/suparan_sharma_pranto/" class="mb-3 d-flex text-white ts-align__vertical">
                        <span class="ts-circle__xs border border-white ts-border-light mr-4">
                            <i class="fab fa-pinterest-p"></i>
                        </span>
                            <span>Pinterest</span>
                        </a>
                        {/* <!--end link--> */}
                        <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                        <span class="ts-circle__xs border border-white ts-border-light mr-4">
                            <i class="fab fa-skype"></i>
                        </span>
                            <span>Skype</span>
                        </a>
                        {/* <!--end link--> */}
                    </div>
                </div>
                {/* <!--end col-md-4--> */}
                <div class="col-md-8">
                    <h3>Send Me a Message</h3>
                    <form id="form-contact" method="post" class="clearfix ts-form ts-form-email" data-php-path="assets/php/email.php">
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="form-contact-name">Name *</label>
                                    <input type="text" class="form-control" id="form-contact-name" name="name" placeholder="Name" required/>
                                </div>
                                {/* <!--end form-group --> */}
                            </div>
                            {/* <!--end col-md-6 col-sm-6 --> */}
                            <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="form-contact-email">Email *</label>
                                    <input type="email" class="form-control" id="form-contact-email" name="email" placeholder="Email" required/>
                                </div>
                                {/* <!--end form-group --> */}
                            </div>
                            {/* <!--end col-md-6 col-sm-6 --> */}
                        </div>
                        {/* <!--end row --> */}
                        <div class="form-group">
                            <label for="form-contact-subject">Subject *</label>
                            <input type="email" class="form-control" id="form-contact-subject" name="subject" placeholder="Subject" required/>
                        </div>
                        {/* <!--end form-group --> */}
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form-contact-message">Message *</label>
                                    <textarea class="form-control" id="form-contact-message" rows="5" name="message" placeholder="Message" required></textarea>
                                </div>
                                {/* <!--end form-group --> */}
                            </div>
                            {/* <!--end col-md-12 --> */}
                        </div>
                        {/* <!--end row --> */}
                        <div class="form-group clearfix">
                            <button type="submit" class="btn btn-primary float-right ts-btn-arrow" id="form-contact-submit">Send a Message</button>
                        </div>
                        {/* <!--end form-group --> */}
                        <div class="form-contact-status"></div>
                    </form>
                    {/* <!--end form-contact --> */}
                </div>
            </div>
            {/* <!--end row--> */}
        </div>
    </div>
    {/* <!--end container--> */}
</section></div>
  )
}

export default Contact