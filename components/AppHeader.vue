<template>
  <!--------------- Header -------------->
  <header id="top-header" class="top-header section-bg">
    <div class="verticle-center">
      <div class="container">
        <div class="row">
          <div class="display-flex">
            <div class="col-xs-12 col-md-9">
              <h1>
                <b>MedellínJS</b>
              </h1>
              <p>
                Somos una comunidad de apasionados cuyo fin es el de fortalecer
                y articular el ecosistema tecnológico de la ciudad de Medellín,
                Colombia.
              </p>
              <p>
                Cada mes nos reunimos en las instalaciones de Ruta N y
                realizamos dos charlas o conferencias relacionadas con
                JavaScript.
              </p>
              <p class="disclaimer">
                Todo el contenido del grupo es propuesto por los miembros de la
                comunidad, si tienes alguna charla, conferencia o experiencia
                que quieras compartir puedes enviar tu propuesta
                <a class="bold" href="#contact-area">aquí</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      values: {
        face1: '',
        face2: 'MED',
        face3: '.JS',
        face4: 'MED',
        face5: '.JS',
        face6: new Date().getFullYear()
      }
    }
  }
}
</script>
