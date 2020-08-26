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
import teamInternationalLogo from '../assets/img/logos/teaminternational.png'
import yungolLogo from '../assets/img/logos/yungol.png'
import terminal from '../assets/img/logos/terminal.png'
export default {
  data() {
    return {
      sponsors: {
        RutaN: {
          name: 'Ruta N',
          logo: '//www.rutanmedellin.org/images/logo.svg',
          website: 'https://www.rutanmedellin.org',
        },
        MatterSupplyCo: {
          name: 'Matter Supply Co',
          logo:
            '//s3.amazonaws.com/media-p.slid.es/uploads/245238/images/5118287/wordmark-cropped.png',
          website: '//mattersupply.co/',
        },
        Endava: {
          name: 'Endava',
          logo:
            'https://user-images.githubusercontent.com/2567952/66471043-ff3bb400-ea8a-11e9-8c57-023a88b38d48.png',
          website: 'https://www.endava.com/',
        },
        NodeSource: {
          name: 'NodeSource',
          logo: '//nodesource.com/assets/icons/nodesource-512x512.png',
          website: '//nodesource.com/',
        },
        yungol: {
          name: 'yungol',
          logo: yungolLogo,
          website: '//yungol.com/',
        },
        TeamInternational: {
          name: 'Team International',
          logo: teamInternationalLogo,
          website: '//teaminternational.com',
        },
        ColombiaDev: {
          name: 'Colombia Dev',
          logo: '//colombia-dev.org/public/assets/images/condor-logo.svg',
          website: '//colombia-dev.org/',
        },
        Terminal: {
          name: 'Terminal',
          logo: terminal,
          website: '//terminal.io/',
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
