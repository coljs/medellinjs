<template>
  <div id="wrapper">
    <app-navbar-page />
    <app-heroes />
    <app-footer />
  </div>
</template>

<script>
import AppNavbarPage from '~/components/AppNavbarPage'
import AppHeroes from '~/components/AppHeroes'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppNavbarPage,
    AppHeroes,
    AppFooter
  }
}
</script>
