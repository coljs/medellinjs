<template>
  <div
    id="community-area"
    class="section section-padding-extra section-bg section-bg-purple"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="section-heading">
            <h2 class="section-title">Somos MedellínJS</h2>
            <p class="section-subtitle">
              Hacemos parte de una gran familia, la Comunidad JavaScript
              Colombiana
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <a href="http://www.coljs.org/">
            <div
              class="text-center wow animated fadeInUp"
              data-wow-duration="1.5s"
            >
              <span class="intro-icon">
                <fa :icon="['fab', 'angellist']" />
              </span>
              <h4 class="intro-heading">COLJS</h4>
              <img
                class="rounded-img"
                src="//i.imgur.com/azFflhQ.jpg"
                alt="ColJS"
              />
            </div>
          </a>
        </div>
      </div>
      <div class="row">
        <div
          v-for="community in communities"
          :key="community.name"
          class="col-sm-3"
        >
          <a :href="community.website">
            <div
              class="text-center wow animated fadeInUp"
              data-wow-duration="1.5s"
            >
              <h4 class="intro-heading">{{ community.name }}</h4>
              <img
                class="rounded-img community-img"
                :src="community.avatar"
                :alt="community.name"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faJs } from '@fortawesome/free-brands-svg-icons'
import communities from '@/assets/data/communities.js'

export default {
  data() {
    return {
      communities
    }
  },
  computed: {
    fab() {
      return {
        faJs
      }
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
