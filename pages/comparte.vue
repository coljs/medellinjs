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
import AppNavbarPage from '~/components/AppNavbarPage'
import AppContact from '~/components/AppContact.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavbarPage,
    AppContact,
    AppFooter,
  },
}
</script>
