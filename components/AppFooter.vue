<template>
  <footer class="section-bg section-bg-green-dark">
    <div class="container text-center">
      <a
        class="logo-footer wow animated fadeInDown"
        data-wow-duration="1.5s"
        href="#"
      >
        <!--update image with medellinjs logo-->
        <!--<img src="img/template/logo-footer.png" alt="...">-->
      </a>
      <div class="socials wow animated fadeIn" data-wow-duration="1.5s">
        <a href="//www.facebook.com/medellinjs" class="social">
          <fa :icon="['fab', 'facebook-square']" />
        </a>
        <a href="//twitter.com/medellinjs" class="social">
          <fa :icon="['fab', 'twitter']" />
        </a>
        <a href="//github.com/coljs/medellinjs/" class="social">
          <fa :icon="['fab', 'github']" />
        </a>
        <a
          href="//www.youtube.com/channel/UCSHfIXcoEVFb9e4gZWoqsWA"
          class="social"
        >
          <fa :icon="['fab', 'youtube']" />
        </a>
        <a href="//www.instagram.com/medellinjs/" class="social">
          <fa :icon="['fab', 'instagram']" />
        </a>
        <a href="//www.twitch.com/medellinjs/" class="social">
          <fa :icon="['fab', 'twitch']" />
        </a>
        <a href="//www.meetup.com/medellinjs" class="social">
          <fa :icon="['fab', 'meetup']" />
        </a>
        <a href="//www.linkedin.com/company/medellinjs/" class="social">
          <fa :icon="['fab', 'linkedin']" />
        </a>
        <a href="//gitter.im/coljs/medellinjs" class="social">
          <fa :icon="['fab', 'gitter']" />
        </a>
      </div>
      <p class="copyright wow animated fadeInUp" data-wow-duration="1.5s">
        &copy; Corporación MedellínJS {{ new Date().getFullYear() }}. All Rights
        Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { faJs } from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
    fab() {
      return {
        faJs,
      }
    },
  },
}
</script>
