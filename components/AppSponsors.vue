<template>
  <div id="sponsors-area" class="section section-padding-extra section-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="section-heading">
            <h2 class="section-title">Sponsors</h2>
            <p class="section-subtitle">Nuestros patrocinadores</p>
            <router-link to="sponsor" target="_blank" class="linkSponsor">¿Quieres ser patrocinador?</router-link>
            <router-link
              to="sponsor-en"
              target="_blank"
              class="linkSponsor"
            >Do you want to be a sponsor?</router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="fun-facts">
          <div class="col-md-4 text-center" v-for="(sponsor, key) in sponsors" :key="key">
            <div class="fun-fact">
              <a v-bind:href="sponsor.website">
                <div
                  role="img"
                  :aria-label="sponsor.name"
                  class="sponsor-img-container"
                >
                  <img v-bind:src="sponsor.logo"/>
                </div>
                <p class="fact-name">{{ sponsor.name }}</p>
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
export default {
  data() {
    return {
      sponsors: {
        HUGE: {
          name: "HUGE",
          logo:
            "//en.gravatar.com/userimage/46333208/108cf2fa50119a1781427d15fe29f64b.jpg?size=200",
          website: "//www.hugeinc.com"
        },
        yungol :{
          name :'yungol',
          logo: yungolLogo,
          website: '//yungol.com/'
        },
        RutaN: {
          name: "RutaN",
          logo: "//www.rutanmedellin.org/images/logo.svg",
          website: "https://www.rutanmedellin.org"
        },
        TeamInternational: {
          name: "Team International",
          logo: teamInternationalLogo,
          website: "//teaminternational.com"
        },
        ColombiaDev: {
          name: "Colombia Dev",
          logo: "//colombia-dev.org/public/assets/images/condor-logo.svg",
          website: "//colombia-dev.org/"
        },
        MatterSupplyCo: {
          name: "Matter Supply Co",
          logo:
            "//s3.amazonaws.com/media-p.slid.es/uploads/245238/images/5118287/wordmark-cropped.png",
          website: "//mattersupply.co/"
        },
        Almundo: {
          name: "Almundo",
          logo: "https://apprecs.org/ios/images/app-icons/256/56/1182079574.jpg",
          website: "//almundo.com.co/"
        },
        NodeSource: {
          name: "NODESOURCE",
          logo: "//nodesource.com/assets/icons/nodesource-512x512.png",
          website: "//nodesource.com/"
        },
        Endava: {
          name: "NODESOURCE",
          logo: "https://user-images.githubusercontent.com/2567952/66471043-ff3bb400-ea8a-11e9-8c57-023a88b38d48.png",
          website: "https://www.endava.com/"
        }
      }
    };
  }
};
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
