<template>
  <div id='heroes-area' class='section section-padding-extra heroes-area'>
    <div class='container'>
      <div class='row'>
        <div class='col-md-12 text-center'>
          <div class='section-heading'>
            <h2 class='section-title'>Héroes</h2>
            <p class="section-subtitle">Personas que han contribuido con su conocimiento en nuestra comunidad.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div id="heroes" class="heroes">
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profileHero" v-for="(hero, key) in heroes" :key="key">
              <div class="img-box reviewer-mock" :style="{backgroundImage:`url(${hero.avatar})`}" >
                <ul class="text-center hidden-sm hidden-xs rs-links">
                   <a target="_blank" :href="hero.github"><i class="fab fa-github"></i></a>
                   <a target="_blank" :href="hero.twitter"><i class="fab fa-twitter"></i></a>
                   <a @click="$modal.show(hero.username)"><i class="fa fa-comment"></i></a>
                </ul>
              </div>
              <div class="text-center ">
                <h1>{{hero.name}}</h1>
                <div class="member-connections hidden-lg hidden-md rs-links">
                  <a target="_blank" :href="hero.github"><i class="fab fa-github"></i></a>
                  <a target="_blank" :href="hero.twitter"><i class="fab fa-twitter"></i></a>
                  <a @click="$modal.show(hero.username)"><i class="fa fa-comment"></i></a>
                </div>
              </div>
              <modal :name="hero.username" height="auto" width="800px" :adaptive="true" :scrollable="true">
                <a class="pull-right close" @click="$modal.hide(hero.username)"><i class="fa fa-times"></i></a>
                <ul class="timeline" v-if="hero">
                  <li v-for="(slide, index) in hero.slides" :key="index">
                    <div :class="'direction-'+slide.direction">
                      <div class="flag-wrapper">
                        <span class="flag">{{slide.title}}</span>
                      </div>
                      <div class="desc"><a :href="slide.url">{{slide.url}}</a></div>
                    </div>
                  </li>
                </ul>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import heroes from '@/assets/data/heroes.js'
  export default {
    data () {
      return {
        heroes,
        showModal: false
      }
    }
  }
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

ul.rs-links {
  bottom: 30%; /* Reset style */
  letter-spacing: 0; /* Reset style */
}

ul.rs-links a {
  cursor: pointer;
  margin: 0 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.member-connections{
   bottom: 10px;
}


</style>
