<template>
  <div id="community-area" class="section section-padding-extra section-bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="section-heading">
            <h2 class="section-title">Somos MedellínJS</h2>
            <p class="section-subtitle">Hacemos parte de una gran familia, la Comunidad JavaScript Colombiana</p>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-sm-12">
            <a href="http://www.coljs.org/">
              <div class="text-center wow animated fadeInUp" data-wow-duration="1.5s">
                <span class="intro-icon">
                  <i class="fab fa-angellist"></i>
                </span>
                <h4 class="intro-heading">COLJS</h4>
                <img class="rounded-img" src="//i.imgur.com/azFflhQ.jpg" alt="ColJS">
              </div>
            </a>
          </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-3" v-for="community in communities" :key="community.name">
          <a v-bind:href="community.website">
            <div class="text-center wow animated fadeInUp" data-wow-duration="1.5s">
              <h4 class="intro-heading">{{community.name}}</h4>
              <img class="rounded-img community-img" :src="community.avatar" :alt="community.name">
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

<style>
.community-img {
  width: 160px;
  height: 160px;
}
</style>
