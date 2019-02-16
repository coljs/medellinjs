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
                  class="reviewer-mock"
                  :style="{ backgroundImage: `url(${sponsor.logo})`, backgroundSize: 'contain' }"
                />
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
export default {
  data() {
    return {
      sponsors: {
        HUGE: {
          name: "HUGE",
          logo:
            "https://en.gravatar.com/userimage/46333208/108cf2fa50119a1781427d15fe29f64b.jpg?size=200",
          website: "https://www.hugeinc.com"
        },
        RutaN: {
          name: 'RutaN',
          logo:
            '//i.imgur.com/jLWnMk9.jpg',
          website: 'https://www.rutanmedellin.org'
        },
        TeamInternational: {
          name: "Team International",
          logo:
            "https://pbs.twimg.com/profile_images/963875088591409152/krlRSDkp_200x200.jpg",
          website: "https://teaminternational.com"
        },
        ColombiaDev: {
          name: "Colombia Dev",
          logo: "https://colombia-dev.org/public/assets/images/condor-logo.svg",
          website: "https://colombia-dev.org/"
        },
        MatterSupplyCo: {
          name: "Matter Supply Co",
          logo:
            "https://s3.amazonaws.com/media-p.slid.es/uploads/245238/images/5118287/wordmark-cropped.png",
          website: "https://mattersupply.co/"
        },
        Almundo: {
          name: "Almundo",
          logo:
            "https://drive.google.com/file/d/1fM0arrzrxbfHkEqSFQb1JFmPxZFX0ltG/view",
          website: "https://almundo.com.co/"
        },
        NodeSource: {
          name: "NODESOURCE",
          logo: "https://nodesource.com/assets/icons/nodesource-512x512.png",
          website: "https://nodesource.com/"
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
