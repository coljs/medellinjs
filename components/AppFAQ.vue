<template>
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
</template>
