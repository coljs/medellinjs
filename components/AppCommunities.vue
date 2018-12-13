<template>
  <div id="community-area" class="section section-padding-extra section-bg">
    <div>
      <div class="col-md-6 col-md-offset-3 text-center">
        <div class="section-heading">
          <h2 class="section-title">Somos MedellínJS</h2>
          <p class="section-subtitle">Hacemos parte de una gran familia, la Comunidad JavaScript Colombiana</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-sm-12">
            <a href="www.coljs.org/">
              <div class="text-center wow animated fadeInUp" data-wow-duration="1.5s">
                <span class="intro-icon">
                  <i class="fab fa-angellist"></i>
                </span>
                <h4 class="intro-heading">COLJS</h4>
                <img class='rounded-img' src="https://i.imgur.com/azFflhQ.jpg" alt="ColJS">
              </div>
            </a>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-3" v-for="community in communities">
            <a v-bind:href="community.website">
              <div class="text-center wow animated fadeInUp" data-wow-duration="1.5s">
                <h4 class="intro-heading">{{community.name}}</h4>
                <img class='rounded-img' v-bind:src="community.avatar" alt="MedellinJS" width="160" height="160">
              </div>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import communities from '@/assets/data/communities.js'
export default {
  data () {
    return {
      communities
    }
  }
}
</script>
