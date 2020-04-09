<template>
  <nav class="navbar navbar-default affix">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#main-nav-collapse"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <nuxt-link to="/" class="navbar-brand">MedellínJS</nuxt-link>
      </div>
      <div id="main-nav-collapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a
              href="//docs.google.com/spreadsheets/d/1S5wKPlgxg-sDEyOQQr0NaxXwE4g3zg2oEUgxn_ylSmA/edit#gid=0"
              target="_blank"
            >
              Cuentas
            </a>
          </li>
          <li><nuxt-link to="/fundacion"> Fundación </nuxt-link></li>
          <li class="nav-download">
            <nuxt-link to="/comparte">Inscribe tu charla</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbarPage'
}
</script>
