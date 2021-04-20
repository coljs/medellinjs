<template>
  <div>
    <!--------------- Navbar -------------->
    <appNavBar />

    <!--------------- Header -------------->
    <appHeader />

    <!--------------- Main Body Area -------------->
    <div class="main-wrap">
      <!--------------- Next Meetups area -------------->
      <!-- <AppNextMeetups /> -->

      <!--------------- Heroes area -------------->
      <AppShortHeroes />

      <!--------------- Communities Area -------------->
      <AppCommunities />

      <!--------------- Contact -------------->
      <AppContact />

      <!--------------- Sponsors -------------->
      <AppSponsors />

      <!--------------- Team area -------------->
      <AppOrganizer />

      <!--------------- Community Partners area -------------->
      <AppCommunityPartners />
    </div>
    <!--------------- Footer -------------->
    <app-footer />

    <a
      id="to-top"
      class="to-top"
      href="#top-header"
      data-spy="affix"
      data-offset-top="500"
    >
      <fa icon="chevron-up" />
    </a>
  </div>
</template>

<script>
import AppNavBar from '~/components/AppNavBar.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppShortHeroes from '~/components/AppShortHeroes.vue'
import AppCommunities from '~/components/AppCommunities.vue'
import AppOrganizer from '~/components/AppOrganizer.vue'
import AppCommunityPartners from '~/components/AppCommunityPartners.vue'
import AppContact from '~/components/AppContact.vue'
import AppSponsors from '~/components/AppSponsors.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavBar,
    AppHeader,
    AppShortHeroes,
    AppCommunities,
    AppOrganizer,
    AppCommunityPartners,
    AppContact,
    AppSponsors,
    AppFooter,
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const WOW = require('wow.js/dist/wow.min')
      new WOW().init()
    }
  },
}
</script>
