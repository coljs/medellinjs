<template>
  <div id="heroes-area" class="section section-padding-extra heroes-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="section-heading">
            <h2 class="section-title">Héroes</h2>
            <p class="section-subtitle">Personas que han contribuido con su conocimiento en nuestra comunidad.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div id="heroes" class="heroes-list">
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 heroes-profile" v-for="(hero, key) in heroes" :key="key">
              <div class="img-box reviewer-mock" :style="{backgroundImage:`url(${hero.avatar})`}" >
                <ul class="text-center hidden-sm hidden-xs rs-links">
                   <a target="_blank" :href="hero.github"><i class="fab fa-github"></i></a>
                   <a target="_blank" :href="hero.twitter"><i class="fab fa-twitter"></i></a>
                   <a @click="$modal.show(hero.username)"><i class="fa fa-comment"></i></a>
                </ul>
              </div>
              <div class="text-center">
                <h1>{{hero.name}}</h1>
                <div class="member-connections hidden-lg hidden-md rs-links">
                  <a target="_blank" :href="hero.github"><i class="fab fa-github"></i></a>
                  <a target="_blank" :href="hero.twitter"><i class="fab fa-twitter"></i></a>
                  <a @click="$modal.show(hero.username)"><i class="fa fa-comment"></i></a>
                </div>
              </div>
              <modal class="heroes-modal" :name="hero.username" :adaptive="true" :scrollable="true">
                <a class="heroes-modal__close pull-right close" @click="$modal.hide(hero.username)"><i class="fa fa-times"></i></a>
                <ul class="timeline" v-if="hero">
                  <li v-for="(slide, index) in hero.slides" :key="index">
                    <div :class="'direction-'+slide.direction">
                      <div class="flag-wrapper">
                        <span class="flag">{{slide.title}}</span>
                      </div>
                      <div class="desc"><a :href="slide.url">{{slide.url}}</a></div>
                    </div>
                  </li>
                </ul>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import heroes from '@/assets/data/heroes.js'
  export default {
    data () {
      return {
        heroes,
        showModal: false
      }
    }
  }
</script>

<style lang="scss">
.heroes-list {
  position: relative;
}

.heroes-modal {
  background: white;
  box-shadow: 0 0 5px grey;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 99;

  .v--modal-box  {
    max-width: 100%;
    overflow: auto;
    padding: 16px;
  }

  @media screen and (min-width: 661px) {
    left: 10%;
    width: 80%;
  }
}

.heroes-modal__close {
  cursor: pointer;
  z-index: 100;
}

.heroes-profile {
  position: unset;
}

ul.rs-links {
  bottom: 30%; /* Reset style */
}

ul.rs-links a {
  cursor: pointer;
  margin: 0 5px;
}

ul.rs-links i {
  letter-spacing: 0; /* Reset style */
}
</style>
