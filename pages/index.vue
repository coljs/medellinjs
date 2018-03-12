<template>
  <div>
    <!--------------- Main Body Area -------------->
    <div class="main-wrap">

      <!--------------- Header -------------->
      <appHeader />

      <!--------------- Team area -------------->
      <AppOrganizer />

      <!--------------- Team area -------------->
      <AppHeroes />

      <!--------------- Communities Area -------------->
      <AppCommunities />

      <!--------------- Contact -------------->
      <AppContact />

      <!--------------- Sponsors -------------->
      <AppSponsors />

    </div>
    <!--------------- Footer -------------->
    <app-footer />

    <a id="to-top" class="to-top" href="#top-header" data-spy="affix" data-offset-top="500">
      <i class="fa fa-chevron-up"></i>
    </a>

  </div>
</template>


<script>
import AppCommunities from '~/components/AppCommunities.vue'
import AppContact from '~/components/AppContact.vue'
import AppHeroes from '~/components/AppHeroes.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppOrganizer from '~/components/AppOrganizer.vue'
import AppSponsors from '~/components/AppSponsors.vue'
import AppNavBar from '~/components/AppNavBar.vue'
import AppPreLoader from '~/components/AppPreLoader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppCommunities,
    AppContact,
    AppHeroes,
    AppHeader,
    AppOrganizer,
    AppSponsors,
    AppNavBar,
    AppPreLoader,
    AppFooter
  }
}
</script>
