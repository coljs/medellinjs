<template>
  <div>
    <!-- Pre loader -->

    <!--------------- Navbar -------------->
    <appNavbar />
    <!--------------- Header -------------->
    <appHeader />
    <!--------------- Main Body Area -------------->
    <div class="main-wrap">

      <!--------------- Team area -------------->
      <AppOrganizer />

      <!--------------- Sponsors -------------->
      <AppSponsors />

      <!--------------- Communities Area -------------->
      <AppCommunities />

      <AppContact />

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
    AppHeader,
    AppOrganizer,
    AppSponsors,
    AppNavBar,
    AppPreLoader,
    AppFooter
  }
}
</script>
