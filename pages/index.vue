<template>
  <div>
    <!-- Pre loader -->

    <!--------------- Navbar -------------->
    <app-nav-bar />
    <!--------------- Header -------------->
    <app-header />
    <!--------------- Main Body Area -------------->
    <div class="main-wrap">

      <!--------------- CTA / Free Trial -------------->
      <div class="section cta-section section-bg">
        <div class="container">
          <div class="row">
            <div class="display-flex">
              <div class="col-md-6">
                <h4 class="cta-heading">Are you interested! Let's grab it for free trial!</h4>
              </div>
              <div class="col-md-6">
                <form id="trialForm" class="trial-form" action="#" method="post">
                  <input type="email" name="email" placeholder="Your Email" required>
                  <button class="btn btn-white" type="submit">Free Trial</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Communities Area -------------->
      <AppCommunities />

      <!--------------- Freatures ------------------>
      <div id="features-area" class="section section-padding section-bg features-area">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading">
                <h2 class="section-title">Crazy Feature</h2>
                <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="features text-center">
              <div class="col-md-4 col-sm-6">
                <div class="feature wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s">
                  <span class="feature-icon">
                    <i class="fa fa-gear"></i>
                  </span>
                  <h4 class="feature-title">Tons of API Callback</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporin cididulabore et dolore</p>
                </div>
                <div class="feature wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s">
                  <span class="feature-icon">
                    <i class="fa fa-star-half-o"></i>
                  </span>
                  <h4 class="feature-title">Rebust Demo Package</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporin cididulabore et dolore</p>
                </div>
              </div>
              <div class="col-md-4 hidden-sm hidden-xs text-center wow animated fadeInUp" data-wow-duration="1.5s">
                <img src="img/mocks/2.png" alt="...">
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="feature wow animated fadeInUp" data-wow-delay="1s" data-wow-duration="1.5s">
                  <span class="feature-icon">
                    <i class="fa fa-arrows-alt"></i>
                  </span>
                  <h4 class="feature-title">Responsive Support</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporin cididulabore et dolore</p>
                </div>
                <div class="feature wow animated fadeInUp" data-wow-delay="1s" data-wow-duration="1.5s">
                  <span class="feature-icon">
                    <i class="fa fa-exchange"></i>
                  </span>
                  <h4 class="feature-title">Custom Scrollbar</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporin cididulabore et dolore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- More Features Area -------------->
      <div id="more-features-area" class="section section-padding-extra">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading">
                <h2 class="section-title">More features</h2>
                <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="display-flex">
              <div class="col-lg-5 col-md-6">
                <div class="mock-group mock-group-2">
                  <img class="front-mock wow animated fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1.5s" src="img/mocks/3-front.png"
                    alt="...">
                  <img class="back-mock wow animated fadeInUp" data-wow-duration="1.5s" src="img/mocks/3-back.png" alt="...">
                </div>
              </div>
              <div class="col-md-6 col-lg-offset-1">
                <div class="more-features">
                  <div class="more-feature">
                    <span class="more-feature-icon">
                      <i class="fa fa-arrows-alt"></i>
                    </span>
                    <div class="more-feature-content">
                      <h4 class="more-feature-title">Responsive Support</h4>
                      <p>Lorem ipsum dolor sit amet, consectetured adip iscing elit, seddo eiusmod</p>
                    </div>
                  </div>
                  <div class="more-feature">
                    <span class="more-feature-icon">
                      <i class="fa fa-gear"></i>
                    </span>
                    <div class="more-feature-content">
                      <h4 class="more-feature-title">Tons of API callbacks</h4>
                      <p>Lorem ipsum dolor sit amet, con sec tetured adip is cing elit, sed do</p>
                    </div>
                  </div>
                  <div class="more-feature">
                    <span class="more-feature-icon">
                      <i class="fa fa-tablet"></i>
                    </span>
                    <div class="more-feature-content">
                      <h4 class="more-feature-title">IOS/Surface/Android</h4>
                      <p>Lorem ipsum dolor sit amet, consectetured adipiscing sed do eiusmod</p>
                    </div>
                  </div>
                  <div class="more-feature">
                    <span class="more-feature-icon">
                      <i class="fa fa-undo"></i>
                    </span>
                    <div class="more-feature-content">
                      <h4 class="more-feature-title">Auto-Sliding</h4>
                      <p>Lorem ipsum dolor sit amet, consectetured adipiscing elit, sed do eiusmod sed do</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Fun fact -------------->
      <div id="fun-fact-area" class="section section-padding-extra section-bg fun-fact-area">
        <div class="container">
          <div class="row">
            <div class="fun-facts">
              <div class="col-md-3 col-sm-6 text-center">
                <div class="fun-fact">
                  <span class="fact-icon">
                    <i class="fa fa-users"></i>
                  </span>
                  <h3 class="fact-count">
                    <span class="fact-counter" data-from="0" data-to="46799"></span>
                  </h3>
                  <p class="fact-name">Customers</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center">
                <div class="fun-fact">
                  <span class="fact-icon">
                    <i class="fa fa-cloud-download"></i>
                  </span>
                  <h3 class="fact-count">
                    <span class="fact-counter" data-from="0" data-to="10000"></span>+</h3>
                  <p class="fact-name">Total Download</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center">
                <div class="fun-fact">
                  <span class="fact-icon">
                    <i class="fa fa-comments-o"></i>
                  </span>
                  <h3 class="fact-count">
                    <span class="fact-counter" data-from="0" data-to="5000"></span>+</h3>
                  <p class="fact-name">5 star rating</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center">
                <div class="fun-fact">
                  <span class="fact-icon">
                    <i class="fa fa-thumbs-o-up"></i>
                  </span>
                  <h3 class="fact-count">
                    <span class="fact-counter" data-from="0" data-to="110"></span>
                  </h3>
                  <p class="fact-name">Support Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Description -------------->
      <div id="description-area" class="section section-padding-extra">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading">
                <h2 class="section-title">Why Geo Best?</h2>
                <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <!--------------- Description Tabs -------------->
            <div class="display-flex">
              <div class="col-lg-8 col-md-7 float-left">
                <div class="description-tab">
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation">
                      <a href="#description-1" aria-controls="description-1" role="tab" data-toggle="tab">
                        <i class="fa fa-cloud-download"></i>
                      </a>
                    </li>
                    <li role="presentation" class="active">
                      <a href="#description-2" aria-controls="description-2" role="tab" data-toggle="tab">
                        <i class="fa fa-sort-alpha-asc"></i>
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#description-3" aria-controls="description-3" role="tab" data-toggle="tab">
                        <i class="fa fa-puzzle-piece"></i>
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#description-4" aria-controls="description-4" role="tab" data-toggle="tab">
                        <i class="fa fa-random"></i>
                      </a>
                    </li>
                  </ul>

                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade" id="description-1">
                      <h4 class="description-title">Feature Description Title</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.Duis
                        aute irure reprehenderit in voluptate velit esse</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.</p>
                      <ul>
                        <li>Consectetur adipisicing elit, sed domod</li>
                        <li>Richard McClintock, a Latin professor at Hampden</li>
                        <li>There are many variations of passages</li>
                        <li>If you are going to use a passage of Lorem Ipsum, you need</li>
                      </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane fade in active" id="description-2">
                      <h4 class="description-title">Feature Description Title</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.Duis
                        aute irure reprehenderit in voluptate velit esse</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.</p>
                      <ul>
                        <li>Consectetur adipisicing elit, sed domod</li>
                        <li>Richard McClintock, a Latin professor at Hampden</li>
                        <li>There are many variations of passages</li>
                        <li>If you are going to use a passage of Lorem Ipsum, you need</li>
                      </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="description-3">
                      <h4 class="description-title">Feature Description Title</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.Duis
                        aute irure reprehenderit in voluptate velit esse</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.</p>
                      <ul>
                        <li>Consectetur adipisicing elit, sed domod</li>
                        <li>Richard McClintock, a Latin professor at Hampden</li>
                        <li>There are many variations of passages</li>
                        <li>If you are going to use a passage of Lorem Ipsum, you need</li>
                      </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="description-4">
                      <h4 class="description-title">Feature Description Title</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.Duis
                        aute irure reprehenderit in voluptate velit esse</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed domod tempor incididunt ut labore et
                        dolore magna aliqua. Ut eniquis notrud exercitation ullamco laboris nisi ut aliquip commodoquat.</p>
                      <ul>
                        <li>Consectetur adipisicing elit, sed domod</li>
                        <li>Richard McClintock, a Latin professor at Hampden</li>
                        <li>There are many variations of passages</li>
                        <li>If you are going to use a passage of Lorem Ipsum, you need</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-lg-4 col-md-5 float-left">
                <div class="mock-group mock-group-3">
                  <img class="front-mock wow animated fadeInRight" data-wow-delay="0.5s" data-wow-duration="1.5s" src="img/mocks/4-front.png"
                    alt="...">
                  <img class="back-mock wow animated fadeInUp" data-wow-duration="1.5s" src="img/mocks/4-back.png" alt="...">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- How it works -------------->
      <div id="how-it-works" class="section section-padding section-bg how-it-works">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <h2 class="section-title wow animated fadeInDown" data-wow-duration="1.5s">How it works</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <a class="video-play-icon wow animated fadeInUp" data-wow-duration="1.5s" href="https://www.youtube.com/watch?v=0I8GmbDU7c4">
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Screenshot Area -------------->
      <div id="screenshot-area" class="section section-padding-extra">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading">
                <h2 class="section-title">Screenshot</h2>
                <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div id="screenshots" class="screenshots">
              <div id="screenshot-carousel" class="screenshot-carousel owl-carousel">
                <div class="screenshot">
                  <img src="img/screen/1.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/2.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/3.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/1.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/2.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/3.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/1.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/2.jpg" alt="...">
                </div>
                <div class="screenshot">
                  <img src="img/screen/3.jpg" alt="...">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Reviews -------------->
      <div id="review-area" class="section section-padding section-bg review-area">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading">
                <h2 class="section-title">Reviews</h2>
                <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div id="reviews" class="reviews">
                <div id="review-carousel" class="review-carousel owl-carousel">
                  <div class="review text-center">
                    <div class="reviewer-mock">
                      <img src="img/client-team/client-1.jpg" alt="...">
                    </div>
                    <p class="review-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.</p>
                    <h4 class="commenter-name">Jacob Marlin</h4>
                    <p class="commenter-profession">
                      <span class="designation">CEO</span>,
                      <span class="company">Tech-Rocking</span>
                    </p>
                  </div>
                  <div class="review text-center">
                    <div class="reviewer-mock">
                      <img src="img/client-team/client-1.jpg" alt="...">
                    </div>
                    <p class="review-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.</p>
                    <h4 class="commenter-name">Jacob Marlin</h4>
                    <p class="commenter-profession">
                      <span class="designation">CEO</span>,
                      <span class="company">Tech-Rocking</span>
                    </p>
                  </div>
                  <div class="review text-center">
                    <div class="reviewer-mock">
                      <img src="img/client-team/client-1.jpg" alt="...">
                    </div>
                    <p class="review-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.</p>
                    <h4 class="commenter-name">Jacob Marlin</h4>
                    <p class="commenter-profession">
                      <span class="designation">CEO</span>,
                      <span class="company">Tech-Rocking</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Price List -------------->
      <div id="price-area" class="section section-padding-extra">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading">
                <h2 class="section-title">Price List</h2>
                <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="price-tables">
              <div class="col-sm-4">
                <div class="price-table text-center wow animated fadeInUp" data-wow-duration="1.5s">
                  <div class="price-heading">
                    <h2 class="price-plan">Free Plan</h2>
                    <h3 class="plan-price">
                      <span class="price-ammount">
                        <i class="fa fa-heart"></i> $0.00</span>
                      <span class="price-cycle">/per month</span>
                    </h3>
                  </div>
                  <ul class="plan-features">
                    <li class="plan-feature">Unlimited Space</li>
                    <li class="plan-feature">Unlimited Database</li>
                    <li class="plan-feature">Easy to Install</li>
                    <li class="plan-feature">Unlimited Subdomains</li>
                    <li class="plan-feature">Dedicated Server</li>
                  </ul>
                  <a class="btn btn-get-plan" href="#">Sign Up</a>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="price-table text-center active wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s">
                  <div class="price-heading">
                    <h2 class="price-plan">Regular Plan</h2>
                    <h3 class="plan-price">
                      <span class="price-ammount">
                        <i class="fa fa-gears"></i> $333</span>
                      <span class="price-cycle">/per month</span>
                    </h3>
                  </div>
                  <ul class="plan-features">
                    <li class="plan-feature">Unlimited Space</li>
                    <li class="plan-feature">Unlimited Database</li>
                    <li class="plan-feature">Easy to Install</li>
                    <li class="plan-feature">Unlimited Subdomains</li>
                    <li class="plan-feature">Dedicated Server</li>
                  </ul>
                  <a class="btn btn-get-plan" href="#">Sign Up</a>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="price-table text-center wow animated fadeInUp" data-wow-delay="1s" data-wow-duration="1.5s">
                  <div class="price-heading">
                    <h2 class="price-plan">Business Plan</h2>
                    <h3 class="plan-price">
                      <span class="price-ammount">
                        <i class="fa fa-heart"></i> $999</span>
                      <span class="price-cycle"> /per month</span>
                    </h3>
                  </div>
                  <ul class="plan-features">
                    <li class="plan-feature">Unlimited Space</li>
                    <li class="plan-feature">Unlimited Database</li>
                    <li class="plan-feature">Easy to Install</li>
                    <li class="plan-feature">Unlimited Subdomains</li>
                    <li class="plan-feature">Dedicated Server</li>
                  </ul>
                  <a class="btn btn-get-plan" href="#">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Downloads -------------->
      <div id="download-area" class="section section-padding section-bg download-area">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading no-sep">
                <h2 class="section-title">Download</h2>
                <p class="section-subtitle">It has survived not only five centuries, but also the leap into electronic</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="button-group">
                <a class="btn btn-big btn-border wow animated fadeInUp" data-wow-duration="1.5s" href="#">
                  <i class="fa fa-apple"></i> App Store</a>
                <a class="btn btn-big btn-border wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" href="#">
                  <i class="fa fa-android"></i> Play Store</a>
                <a class="btn btn-big btn-border wow animated fadeInUp" data-wow-delay="1s" data-wow-duration="1.5s" href="#">
                  <i class="fa fa-windows"></i> Window Store</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Team area -------------->
      <AppOrganizer />

      <!--------------- CTA / Purchase -------------->
      <div class="section cta-section cta-2">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h4 class="cta-heading wow animated fadeInLeft" data-wow-duration="1.5s">GEO is one of The Clean and Unique App Template in Themeforest</h4>
              <a class="btn btn-white wow animated fadeInRight" data-wow-duration="1.5s" href="#">Purchase Now</a>
            </div>
          </div>
        </div>
      </div>

      <!--------------- FAQ -------------->
      <div id="faq-area" class="section section-padding-extra">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
              <div class="section-heading">
                <h2 class="section-title">General FAQ</h2>
                <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="panel-group wow animated fadeInLeft" data-wow-duration="1.5s" id="faqs" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading active" role="tab" id="faq1">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#faqs" href="#ans1" aria-expanded="true" aria-controls="ans1">Q: What does it mean by faqs?</a>
                    </h4>
                  </div>
                  <div id="ans1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="faq1">
                    <div class="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore
                        et dolore magna aliqua, Ut enim ad minim veniam incidi dunt ut labore et dolore magna aliqua, Ut
                        enim ad minim veniam.</p>
                      <p class="answered-on">Answer: Sunday, April 6th, 2017 at 3:10 pm</p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="faq2">
                    <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#faqs" href="#ans2" aria-expanded="false" aria-controls="ans2">Q: How to purchase with discount code?</a>
                    </h4>
                  </div>
                  <div id="ans2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="faq2">
                    <div class="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore
                        et dolore magna aliqua, Ut enim ad minim veniam incidi dunt ut labore et dolore magna aliqua, Ut
                        enim ad minim veniam.</p>
                      <p class="answered-on">Answer: Sunday, April 6th, 2017 at 3:10 pm</p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="faq3">
                    <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#faqs" href="#ans3" aria-expanded="false" aria-controls="ans3">Q: How to fix uo when it doesn't work?</a>
                    </h4>
                  </div>
                  <div id="ans3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="faq3">
                    <div class="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore
                        et dolore magna aliqua, Ut enim ad minim veniam incidi dunt ut labore et dolore magna aliqua, Ut
                        enim ad minim veniam.</p>
                      <p class="answered-on">Answer: Sunday, April 6th, 2017 at 3:10 pm</p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="faq4">
                    <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#faqs" href="#ans4" aria-expanded="false" aria-controls="ans4">Q: How to make a conversation?</a>
                    </h4>
                  </div>
                  <div id="ans4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="faq4">
                    <div class="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore
                        et dolore magna aliqua, Ut enim ad minim veniam incidi dunt ut labore et dolore magna aliqua, Ut
                        enim ad minim veniam.</p>
                      <p class="answered-on">Answer: Sunday, April 6th, 2017 at 3:10 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <form id="ask-question" class="ask-question wow animated fadeInRight" data-wow-duration="1.5s" action="#" method="post">
                <div class="input-group">
                  <span class="input-group-addon" id="name-addon">
                    <i class="fa fa-user"></i>
                  </span>
                  <input type="text" name="name" class="form-control" placeholder="Your Name" aria-describedby="name-addon">
                </div>
                <div class="input-group">
                  <span class="input-group-addon" id="email-addon">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <input type="text" name="email" class="form-control" placeholder="Email" aria-describedby="email-addon">
                </div>
                <div class="input-group">
                  <textarea name="question" class="form-control" placeholder="Your Question" rows="5"></textarea>
                </div>
                <div class="input-group">
                  <button type="submit" class="btn">Ask Question</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Subscribe -------------->
      <div id="subscribe-area" class="section section-padding section-bg subscribe-area">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <div class="section-heading no-sep wow animated fadeInDown" data-wow-duration="1.5s">
                <h2 class="section-title">Newsletter Subscribe</h2>
                <p class="section-subtitle">There are many variations of passages of Lorem Ipsum available and is dummy</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <form action="#" id="subscribeForm" class="subscribe-form wow animated fadeInUp" data-wow-duration="1.5s" method="post">
                <input type="email" name="email" placeholder="Enter your email address" required>
                <button type="submit">Subscribe</button>
                <p class="newsletter-success"></p>
                <p class="newsletter-error"></p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!--------------- Contact Area ------------>
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
      <div id="map-section" class="section">
        <div class="google-map" id="location" data-lat="23.75043" data-lng="90.38844" data-zoom="16" style="height: 330px"></div>
      </div>
    </div>

    <!--------------- Footer -------------->
    <app-footer />

    <a id="to-top" class="to-top" href="#top-header" data-spy="affix" data-offset-top="500">
      <i class="fa fa-chevron-up"></i>
    </a>

  </div>
</template>


<script>
import AppCommunities from '~/components/AppCommunities.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppOrganizer from '~/components/AppOrganizer.vue'
import AppNavBar from '~/components/AppNavBar.vue'
import AppPreLoader from '~/components/AppPreLoader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppCommunities,
    AppHeader,
    AppOrganizer,
    AppNavBar,
    AppPreLoader,
    AppFooter
  }
}
</script>
