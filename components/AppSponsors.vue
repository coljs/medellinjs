<template>
  <div
    id="sponsors-area"
    class="section section-padding-extra section-bg section-bg-red"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="section-heading">
            <h2 class="section-title">Sponsors</h2>
            <p class="section-subtitle">Nuestros patrocinadores</p>
            <router-link to="sponsor" target="_blank" class="linkSponsor"
              >¿Quieres ser patrocinador?</router-link
            >
            <router-link to="sponsor-en" target="_blank" class="linkSponsor"
              >Do you want to be a sponsor?</router-link
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="fun-facts">
          <div
            v-for="(sponsor, key) in sponsors"
            :key="key"
            class="col-md-4 text-center wow animated fadeInUp"
            data-wow-duration="1.5s"
          >
            <div class="fun-fact">
              <a :href="sponsor.website" target="_blank">
                <div
                  role="img"
                  :aria-label="sponsor.name"
                  class="sponsor-img-container"
                >
                  <img :src="sponsor.logo" />
                </div>
                <p class="sponsor-name">{{ sponsor.name }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rutaNLogo from '../assets/img/logos/logo_ruta.svg'
import softserveLogo from '../assets/img/logos/softserve_logo.png'

export default {
  data() {
    return {
      sponsors: {
        RutaN: {
          name: 'Ruta N',
          logo: rutaNLogo,
          website: 'https://www.rutanmedellin.org',
        },
        ColombiaDev: {
          name: 'Colombia Dev',
          logo: '//colombia-dev.org/public/assets/images/condor-logo.svg',
          website: '//colombia-dev.org/',
        },
        NodeSource: {
          name: 'NodeSource',
          logo: '//nodesource.com/assets/icons/nodesource-512x512.png',
          website: '//nodesource.com/',
        },
        softserve: {
          name: 'Softserve',
          logo: softserveLogo,
          website: '//https://www.softserveinc.com/en-us',
        },
      },
    }
  },
}
</script>

<style scoped>
.sponsor-logo {
  background-size: contain;
}
.linkSponsor {
  color: #fff;
  font-weight: bold;
  margin: 0 30px;
}
@media screen and (max-width: 768px) {
  .linkSponsor {
    display: block;
  }
}
</style>
