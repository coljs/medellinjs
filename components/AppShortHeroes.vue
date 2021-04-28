<template>
  <div id="heroes-area" class="section section-padding-extra heroes-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="section-heading">
            <h2 class="section-title">Héroes</h2>
            <p class="section-subtitle">
              Personas que han contribuido con su conocimiento en nuestra
              comunidad.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <base-heroes :heroes="heroes" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center show-more-heroes">
          <nuxt-link to="/heroes" class="buttton-hero">
            ¡Conoce a nuestros {{ keysHeros.length }} Héroes!
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sampleSize from 'lodash/sampleSize'

import heroesData from '@/assets/data/heroes.js'
import BaseHeroes from '~/components/BaseHeroes'

export default {
  components: {
    BaseHeroes,
  },
  data() {
    return {
      keysHeros: Object.keys(heroesData),
      showModal: false,
      myHeroes: [],
    }
  },
  computed: {
    heroes() {
      return this.myHeroes
    },
  },
  mounted() {
    const heroesKeys = sampleSize(this.keysHeros, 8)
    this.myHeroes = heroesKeys.map((hero) => heroesData[hero])
  },
}
</script>

<style lang="scss">
.heroes-list {
  position: relative;
}

.show-more-heroes {
  margin-top: 50px;

  .buttton-hero {
    background-color: #6670e1;
    border-radius: 4px;
    color: #ffffff;
    padding: 20px;

    &:hover {
      background-color: #3c50c4;
    }
  }
}

.heroes-modal {
  background: white;
  box-shadow: 0 0 5px grey;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 99;

  .v--modal-box {
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
