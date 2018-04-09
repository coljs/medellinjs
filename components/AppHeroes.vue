<template>
  <div id='heroes-area' class='section section-padding-extra heroes-area'>
    <div class='container'>
      <div class='row'>
        <div class='col-md-12 text-center'>
          <div class='section-heading'>
            <h2 class='section-title'>Héroes</h2>
            <p class="section-subtitle">Personas que han contribuido con su conocimiento en nuestra comunidad.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div id="heroes" class="heroes">
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profileHero" v-for="hero in heroes">
              <div class="img-box reviewer-mock" v-b-modal="'modal-' + hero.username">
                <img v-bind:src="hero.avatar" class="img-responsive">
                <ul class="text-center hidden-sm hidden-xs">
                   <a target="_blank" v-bind:href="hero.github"><i class="fa fa-github"></i></a>
                   <a target="_blank" :href="hero.twitter"><i class="fa fa-twitter"></i></a>
                   <a v-b-modal="'modal-' + hero.username"><i class="fa fa-comment"></i></a>
                </ul>
              </div>
              <div class="text-center ">
                <h1>{{hero.name}}</h1>
                <div class="member-connections hidden-lg hidden-md">
                  <a target="_blank" v-bind:href="hero.github"><i class="fa fa-github"></i></a>
                  <a target="_blank" :href="hero.twitter"><i class="fa fa-twitter"></i></a>
                  <a v-b-modal="'modal-' + hero.username"><i class="fa fa-comment"></i></a>
                </div>
              </div>

              <b-modal size="lg" hide-footer v-bind:id="'modal-' +hero.username" :title="'Charlas de '+hero.name">
                <ul class="timeline">
                  <li v-for="slide in hero.slides">
                    <div :class="'direction-'+slide.direction">
                      <div class="flag-wrapper">
                        <span class="flag">{{slide.title}}</span>
                        <!-- <span class="time-wrapper"><span class="time">fecha</span></span> -->
                      </div>
                      <div class="desc"><a :href="slide.url">{{slide.url}}</a></div>
                    </div>
                  </li>
                </ul>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import heroes from '@/assets/data/heroes.js'
export default{
  data () {
    return {
      heroes
    }
  }
}
</script>
