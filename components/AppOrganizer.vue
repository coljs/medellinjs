<template>
  <div id="team-area" class="section section-padding-extra section_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="section-heading">
            <h2 class="section-title">Equipo Organizador</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="team-members">
          <div
            v-for="(organizer, idx) in organizers"
            :key="idx"
            class="col-md-4 col-sm-6"
          >
            <div
              class="team-member text-center wow animated fadeInUp"
              data-wow-duration="1.5s"
            >
              <div class="member-mock">
                <img :src="organizer.avatar" :alt="organizer.name" />
              </div>
              <h4 class="member-name">{{ organizer.name }}</h4>
              <span class="member-work">Co - Organizador</span>
              <p>{{ organizer.bio }}</p>
              <div class="member-connections">
                <a
                  target="_blank"
                  :href="'//twitter.com/' + organizer.twitter"
                >
                  <fa :icon="['fab', 'twitter']" />
                </a>
                <a
                  target="_blank"
                  :href="'//github.com/' + organizer.github"
                >
                  <fa :icon="['fab', 'github']" />
                </a>
                <a target="_blank" :href="organizer.website">
                  <fa icon="home" />
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
import organizers from '@/assets/data/organizadores.js'
export default {
  data() {
    return {
      organizers,
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
