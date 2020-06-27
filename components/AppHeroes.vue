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
    </div>
  </div>
</template>

<script>
import heroesData from '@/assets/data/heroes.js'
import BaseHeroes from '~/components/BaseHeroes'

const heroes = Object.keys(heroesData).map((h) => heroesData[h])

export default {
  components: {
    BaseHeroes,
  },
  data() {
    return {
      heroes,
      showModal: false,
    }
  },
}
</script>
