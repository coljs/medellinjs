<template>
  <div>
    <!--------------- Main Body Area -------------->
    <div class="main-wrap">
        
      <!--------------- Fundacion -------------->
      <AppFundacion />

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
import AppFundacion from '~/components/organization/index.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppPreLoader,
    AppFundacion,
    AppFooter
  }
}
</script>
