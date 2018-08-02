<template>
  <div id="contact-area" class="section section-padding-extra contact-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="section-heading">
            <h2 class="section-title">Por qué una fundación?</h2>
            <p class="section-subtitle text-justify">Hemos creado este grupo con el fin de reunir, compartir y aprender de los desarrolladores JavaScript de la ciudad de Medellín, Colombia.</p>
            <p class="section-subtitle text-justify">
              Nuestra filosofía será siempre la de mantener un ambiente informal, nada estricto en ningún sentido. Así que cualquier colaboración, en cualquier sentido, será muy bien recibida.</p>
              <p class="section-subtitle text-justify">
    Contribuir al mejoramiento de la calidad de vida de los colombianos, mediante promoción de programas de desarrollo a poblaciones de personas vulnerables. La prestación de servicios y ejecución de proyectos sociales orientados a la promoción de nuevas tecnologías de la comunicación e información (TIC).
  </p>
          </div>
        </div>
      </div>
      <div class="row">
        <AppFundationDocuments />
      </div>
      <div class="row">
        <div class="contact-infos">
          <div class="col-sm-4 text-center">
            <div class="contact-item wow animated fadeInUp" data-wow-duration="1.5s">
              <span class="contact-icon">
                <i class="fa fa-map-marker"></i>
              </span>
              <p class="contact-detail">Complejo Ruta N Calle 67 Nº 52-20
                <br/>Medellín - Colombia</p>
            </div>
          </div>
          <div class="col-sm-4 text-center">
          </div>
          <div class="col-sm-4 text-center">
            <div class="contact-item wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s">
              <span class="contact-icon">
                <i class="fa fa-envelope"></i>
              </span>
              <p class="contact-detail">medellinjs@gmail.com
                <br/>https:// github.com/coljs/medellinjs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppFundationDocuments from '~/components/organization/documents.vue'

export default {
  components: {
    AppFundationDocuments
  }
}
</script>
