<template>
  <div id="contact-area" class="section section-padding-extra contact-area">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="section-heading">
            <h2 class="section-title">Leave a message</h2>
            <p class="section-subtitle">There are many variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form id="contactForm" class="contact-form wow animated fadeInUp" data-wow-duration="1.5s" action="#" method="post">
            <div class="row">
              <div class="col-sm-6">
                <input id="name" type="text" name="name" placeholder="Name" required>
              </div>
              <div class="col-sm-6">
                <input id="email" type="email" name="email" placeholder="Email" required>
              </div>
              <div class="col-sm-12">
                <input id="subject" type="text" name="subject" placeholder="Subject" required>
              </div>
              <div class="col-sm-12">
                <textarea id="message" placeholder="Message" rows="4" required></textarea>
              </div>
              <div class="col-sm-12 text-center">
                <button class="btn" type="submit">Submit Message</button>
              </div>
              <div class="col-md-12 text-center">
                <p class="input-success">We have received your mail, We will get back to you soon!</p>
                <p class="input-error">Sorry, Message could not send! Please try again.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="contact-infos">
          <div class="col-sm-4 text-center">
            <div class="contact-item wow animated fadeInUp" data-wow-duration="1.5s">
              <span class="contact-icon">
                <i class="fa fa-map-marker"></i>
              </span>
              <p class="contact-detail">68 Dohava Strees, Lorem isput Spusts
                <br/>New York, United State</p>
            </div>
          </div>
          <div class="col-sm-4 text-center">
            <div class="contact-item wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s">
              <span class="contact-icon">
                <i class="fa fa-envelope"></i>
              </span>
              <p class="contact-detail">info@geo.com
                <br/>support@geo.com</p>
            </div>
          </div>
          <div class="col-sm-4 text-center">
            <div class="contact-item wow animated fadeInUp" data-wow-delay="1s" data-wow-duration="1.5s">
              <span class="contact-icon">
                <i class="fa fa-phone"></i>
              </span>
              <p class="contact-detail">+123-456-7890 - Central Office
                <br/>+123-456-7890 - Fax</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
