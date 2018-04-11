<template>
  <div id="community-area" class="section section-padding-extra section-bg">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 text-center">
        <div class="section-heading">
          <h2 class="section-title">Somos MedellínJS</h2>
          <p class="section-subtitle">Hacemos parte de una gran familia, la Comunidad JavaScript Colombiana</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-sm-12">
            <a href="http://www.coljs.org/">
              <div class="text-center wow animated fadeInUp" data-wow-duration="1.5s">
                <span class="intro-icon">
                  <i class="fa fa-angellist"></i>
                </span>
                <h4 class="intro-heading">COLJS</h4>
                <img class='rounded-img' src="https://i.imgur.com/azFflhQ.jpg" alt="ColJS">
              </div>
            </a>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-3" v-for="community in communities">
            <a v-bind:href="community.website">
              <div class="text-center wow animated fadeInUp" data-wow-duration="1.5s">
                <h4 class="intro-heading">{{community.name}}</h4>
                <img class='rounded-img' v-bind:src="community.avatar" alt="MedellinJS" width="160" height="160">
              </div>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      communities: {
        bogotajs: {
          name: 'BogotáJS',
          bio:
            'Comunidad JS Bogotá',
          twitter: '@bogotajs',
          github: 'bogotajs',
          avatar:
            'http://imgur.com/0VE7Df0.png',
          website: 'http://www.bogotajs.com/'
        },
        calijs: {
          name: 'CaliJS',
          bio:
            'Comunidad JS Cali',
          twitter: '@calijs',
          github: 'calijs',
          avatar:
            'https://i.imgur.com/sBZF10C.png',
          website: 'http://www.meetup.com/CaliJS/'
        },
        villavicenciojs: {
          name: 'VillavicencioJS',
          bio:
            'Comunidad JS Villavicencio',
          twitter: '@villavicenciojs',
          github: 'villavicenciojs',
          avatar:
            'https://i.imgur.com/6RKQMj1.png',
          website: 'http://www.meetup.com/es-ES/Villavicencio-JS/'
        },
        quibdojs: {
          name: 'QuibdóJS',
          bio:
            'Comunidad JS Quibdó',
          twitter: '@quibdojs',
          github: 'quibdojs',
          avatar:
            'http://i.imgur.com/MQwQ9Kt.png',
          website: 'https://twitter.com/QuibdoJs'
        },
        pereirajs: {
          name: 'PereiraJS',
          bio: 'Comunidad JS Pereira',
          twitter: '@pereirajs',
          github: 'pereirajs',
          avatar:
            'https://i.imgur.com/K74Qa1f.png',
          website: 'http://www.pereirajs.org/'
        },
        monteriajs: {
          name: 'MonteríaJS',
          bio: 'Comunidad JS Monteria',
          twitter: '@monteriajs',
          github: 'monteriajs',
          avatar:
            'http://i.imgur.com/e35RPp3.png',
          website: 'http://www.meetup.com/monteriajs/'
        },
        popayanjs: {
          name: 'PopayánJS',
          bio: 'Comunidad JS Popayan',
          twitter: '@popayanjs',
          github: 'popayanjs',
          avatar:
            'http://i.imgur.com/CSM3nCr.png',
          website: 'http://www.meetup.com/PopayanJS/'
        },
        manizalesjs: {
          name: 'manizalesJS',
          bio: 'Comunidad JS Manizales',
          twitter: '@manizalesjs',
          github: 'manizalesjs',
          avatar:
            'https://secure.meetupstatic.com/photos/event/d/f/b/c/highres_433977276.jpeg',
          website: 'https://www.meetup.com/ManizalesJS/'
        },
        barranquillajs: {
          name: 'BarranquillaJS',
          bio: 'Comunidad JS Barranquilla',
          twitter: '@barranquillajs',
          github: 'barranquillajs',
          avatar:
            'https://secure.meetupstatic.com/photos/member/5/8/5/c/highres_259462620.jpeg',
          website: 'https://www.meetup.com/BarranquillaJS/'
        },
        bucaramangajs: {
          name: 'BucaramangaJS',
          bio: 'Comunidad JS Bucaramanga',
          twitter: '@bucaramangajs',
          github: 'bucaramangajs',
          avatar:
            'https://secure.meetupstatic.com/photos/event/a/9/1/2/highres_444343282.jpeg',
          website: 'https://www.meetup.com/BucaramangaJS/'
        }
      }
    }
  }
}
</script>
