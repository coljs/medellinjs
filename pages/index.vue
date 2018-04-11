<template>
  <div>
    <!--------------- Navbar -------------->
    <appNavBar />

    <!--------------- Header -------------->
    <appHeader />

    <!--------------- Main Body Area -------------->
    <div class="main-wrap">

      <!--------------- Heroes area -------------->
      <AppHeroes />

      <!--------------- Communities Area -------------->
      <AppCommunities />

      <!--------------- Contact -------------->
      <AppContact />

      <!--------------- Sponsors -------------->
      <AppSponsors />

      <!--------------- Team area -------------->
      <AppOrganizer />

    </div>
    <!--------------- Footer -------------->
    <app-footer />

    <a id="to-top" class="to-top" href="#top-header" data-spy="affix" data-offset-top="500">
      <i class="fa fa-chevron-up"></i>
    </a>

  </div>
</template>


<script>
import AppPreLoader from '~/components/AppPreLoader.vue'
import AppNavBar from '~/components/AppNavBar.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppHeroes from '~/components/AppHeroes.vue'
import AppCommunities from '~/components/AppCommunities.vue'
import AppOrganizer from '~/components/AppOrganizer.vue'
import AppContact from '~/components/AppContact.vue'
import AppSponsors from '~/components/AppSponsors.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppPreLoader,
    AppNavBar,
    AppHeader,
    AppHeroes,
    AppCommunities,
    AppOrganizer,
    AppContact,
    AppSponsors,
    AppFooter
  }
}
</script>
