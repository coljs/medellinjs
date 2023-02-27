<template>
  <div id="heroes" class="heroes-list">
    <div
      v-for="(hero, key) in heroes"
      :key="key"
      class="
        col-lg-3 col-md-3 col-sm-4 col-xs-12
        heroes-profile
        wow
        animated
        fadeInUp
      "
      data-wow-duration="1.5s"
    >
      <div
        class="img-box reviewer-mock"
        :style="{ backgroundImage: `url(${hero.avatar})` }"
      >
        <ul class="text-center hidden-sm hidden-xs rs-links">
          <a target="_blank" :href="hero.github">
            <fa :icon="['fab', 'github']" />
          </a>
          <a target="_blank" :href="hero.twitter">
            <fa :icon="['fab', 'twitter']" />
          </a>
          <a @click="$modal.show(hero.username)">
            <fa icon="comment" />
          </a>
        </ul>
      </div>
      <div class="text-center">
        <h1>{{ hero.name }}</h1>
        <div class="member-connections hidden-lg hidden-md rs-links">
          <a target="_blank" :href="hero.github">
            <fa :icon="['fab', 'github']" />
          </a>
          <a target="_blank" :href="hero.twitter">
            <fa :icon="['fab', 'twitter']" />
          </a>
          <a @click="$modal.show(hero.username)">
            <fa icon="comment" />
          </a>
        </div>
      </div>
      <modal :name="hero.username" :scrollable="true">
        <a
          class="heroes-modal__close pull-right close"
          @click="$modal.hide(hero.username)"
        >
          <fa icon="times" />
        </a>
        <ul v-if="hero" class="timeline">
          <li v-for="(slide, index) in hero.slides" :key="index">
            <div :class="'direction-' + slide.direction">
              <div class="flag-wrapper">
                <span class="flag">{{ slide.title }}</span>
              </div>
              <div class="desc">
                <a :href="slide.url">{{ slide.url }}</a>
              </div>
            </div>
          </li>
        </ul>
      </modal>
    </div>
  </div>
</template>

<script>
import { faJs } from '@fortawesome/free-brands-svg-icons'
export default {
  props: {
    heroes: {
      type: Array,
      required: true,
    },
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

<style lang="scss">
.heroes-list {
  position: relative;
}

/* .heroes-modal {
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
    padding: 20px;
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
  bottom: 30%;
}

ul.rs-links a {
  cursor: pointer;
  margin: 0 5px;
}

ul.rs-links i {
  letter-spacing: 0;
} */
</style>
