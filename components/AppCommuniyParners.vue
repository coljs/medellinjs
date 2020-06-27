<template>
  <div
    id="communityParners-area"
    class="section section-padding-extra section-bg section-bg-green"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="section-heading">
            <h2 class="section-title">Community Parners</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="fun-facts">
          <div
            v-for="(community, index) in communityParners"
            :key="index"
            class="col-md-3 text-center"
          >
            <div class="fun-fact">
              <h4 class="member-name">{{ community.name }}</h4>
              <a :href="community.website">
                <div
                  role="img"
                  :aria-label="community.name"
                  class="sponsor-img-container"
                >
                  <img :src="community.logo" />
                </div>
              </a>
              <br /><br />
              <div class="member-connections__alternative">
                <a target="_blank" :href="community.website">
                  <fa icon="home" />
                </a>
                <a
                  target="_blank"
                  :href="'https://twitter.com/' + community.twitter"
                >
                  <fa :icon="['fab', 'twitter']" />
                </a>
                <a
                  target="_blank"
                  :href="'https://www.instagram.com/' + community.instagram"
                >
                  <fa :icon="['fab', 'instagram']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faJs } from '@fortawesome/free-brands-svg-icons'

import reactLaConfLogo from '@/assets/img/communityParners/logo-reactlaconf.svg'
import cssConfCoLogo from '@/assets/img/communityParners/logo-cssconfco.svg'
import ngConfCoLogo from '@/assets/img/communityParners/logo-ngConfCo.svg'
import nodeConfCoLogo from '@/assets/img/communityParners/logo-nodeConfCo.jpg'

export default {
  data() {
    return {
      communityParners: {
        reactLaConf: {
          name: 'ReactLaConf',
          website: 'https://reactlaconf.co/',
          twitter: 'reactlaconf',
          instagram: 'reactlaconf/',
          logo: reactLaConfLogo,
        },
        cssconf: {
          name: 'CssConfCo',
          website: 'https://cssconf.co/',
          twitter: 'cssconfco',
          instagram: 'cssconfco/',
          logo: cssConfCoLogo,
        },
        NgColombia: {
          name: 'NgColombia',
          website: 'https://ngconf.co/',
          twitter: 'NgConfCo',
          instagram: 'https://www.instagram.com/explore/tags/ngconfcolombia/',
          logo: ngConfCoLogo,
        },
        nodeConfCo: {
          name: 'NodeConfCo',
          website: 'https://colombia.nodeconf.com/',
          twitter: 'NodeConfCo',
          instagram: 'nodeconf_co/',
          logo: nodeConfCoLogo,
        },
      },
    }
  },
  computed: {
    fab() {
      return {
        faJs,
      }
    },
  },
}
</script>
