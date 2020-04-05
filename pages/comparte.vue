<template>
  <div>
    <!--------------- Main Body Area -------------->
    <div class="main-wrap">
      <app-navbar-page />

      <!--------------- Contact -------------->
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
import AppNavbarPage from '~/components/AppNavbarPage'
import AppPreLoader from '~/components/AppPreLoader.vue'
import AppContact from '~/components/AppContact.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavbarPage,
    AppPreLoader,
    AppContact,
    AppFooter
  }
}
</script>
