<template>
    <div id="team-area" class="section section-padding-extra">
    <div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
        <div class="section-heading">
            <h2 class="section-title">Medellín JS</h2>
            <p class="section-subtitle">Somos una comunidad de apasionados cuyo fin es el de fortalecer y articular el ecosistema tecnológico de la ciudad de Medellín, Colombia.
            <p class="section-subtitle">Cada mes nos reunimos en las instalaciones de Ruta N y realizamos dos charlas o conferencias relacionadas con JavaScript.</p>
            <p class="section-subtitle">Todo el contenido del grupo es propuesto por los miembros de la comunidad, si tienes alguna charla, conferencia o experiencia que quieras compartir puedes enviar la propuesta en el siguiente formulario: http://medellinjs.org/comparte.</p>
            <h3 class="section-title">Equipo organizador</h3>
        </div>
        </div>
    </div>
    <div class="row">
        <div class="team-members">
        <div class="col-md-3 col-sm-6" v-for="organizer in organizers">
            <div class="team-member text-center wow animated fadeInUp" data-wow-duration="1.5s">
            <div class="member-mock">
                <img v-bind:src="organizer.avatar" alt="organizer.name">
            </div>
            <h4 class="member-name">{{ organizer.name }}</h4>
            <span class="member-work">Co - Organizador</span>
            <p>{{ organizer.bio }}</p>
            <div class="member-connections">
                <a v-bind:href="'http://twitter.com/' + organizer.twitter">
                <i class="fa fa-twitter"></i>
                </a>
                <a v-bind:href="'http://github.com/'  + organizer.github">
                <i class="fa fa-github"></i>
                </a>
                <a v-bind:href="organizer.website">
                <i class="fa fa-home"></i>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>


<script>
export default {
  data () {
    return {
      organizers: {
        julianduque: {
          name: 'Julián Duque',
          bio:
            'Developer and Educator - Engineer at @NodeSource - Co-Organizer at @Suncoastjs @MedellinJS @JSConfCo - Satán es la Cumbia',
          twitter: 'julian_duque',
          github: 'julianduque',
          avatar:
            'https://secure.gravatar.com/avatar/c2d1139b787a469e13229070d6be918c.png?size=200',
          website: 'https://about.me/julianduque'
        },
        edsadr: {
          name: 'Adrián Estrada',
          bio:
            'Developer in love with NodeJS, thirsty for new technologies, working at @NodeSource - organizer @MedellinJS and @JSConfCO',
          twitter: 'edsadr',
          github: 'edsadr',
          avatar:
            'https://secure.gravatar.com/userimage/28946174/8747a95cd541d80ffa63929a4856637d.jpg?size=200',
          website: 'http://twitter.com/edsadr'
        },
        codemaxter: {
          name: 'Alvaro Agámez',
          bio:
            'Ingeniero en Informática, desarrollador por pasión, co-organizador de MedellinJS.',
          twitter: 'CodeMaxter',
          github: 'CodeMaxter',
          avatar:
            'https://secure.gravatar.com/avatar/2bb905c4128af50f2fde8fe1dc37f931.png?size=200',
          website: 'https://twitter.com/CodeMaxter'
        },
        ramirezalex: {
          name: 'Alex Ramírez',
          bio:
            'Software Developer & Blockchain Padawan. I like it better if JavaScript == true. CTO at @INplazainc and co-organizer of @MedellinJS',
          twitter: 'RamirezAlex_',
          github: 'RamirezAlex',
          avatar:
            'https://secure.gravatar.com/avatar/e8279b670ce5a7f7b0bd938fc36f1af4.png?size=200',
          website: 'https://twitter.com/RamirezAlex_'
        },
        jessecogollo: {
          name: 'Jesse Cogollo',
          bio: 'I am libertarian',
          twitter: 'jessecogollo',
          github: 'jessecogollo',
          avatar:
            'https://s.gravatar.com/avatar/217ef78caa565c28fa5fd3d2153ee4eb?s=250',
          website: 'https://jessecogollo.github.io/'
        },
        khriztianmoreno: {
          name: 'Cristian Moreno',
          bio: 'FullStack Javascript Developer and Community builder. Javascript Lover 👨🏻‍💻♥️👨🏻‍🏫 Co-Organize of @MedellinJS @avanet',
          twitter: 'khriztianmoreno',
          github: 'khriztianmoreno',
          avatar:
            'https://secure.gravatar.com/avatar/267898824a5115781fad35abba0130d0?s=250',
          website: 'http://khriztianmoreno.com/'
        },
        jenymazo: {
          name: 'Jeny Mazo',
          bio: 'Developer in love with NodeJS, Co-organizer at @MedellinJS and Mentor at @Coderiseorg',
          twitter: 'JenyMzo',
          github: 'JenyMzo',
          avatar:
            'https://avatars3.githubusercontent.com/u/2567952?v=3&u=93af511467354af56abba97d969cccca6fdffbef&s=250',
          website: 'https://twitter.com/JenyMzo'
        },
        mariaserna: {
          name: 'Maria Serna',
          bio: 'Software developer with +5 years in software construction, speaker and active participant of the communities. Co-organizer @medellinjs - @node_co',
          twitter: 'mafesernaarbole',
          github: 'mafesernaarboleda',
          avatar:
            'https://avatars3.githubusercontent.com/u/14205513?s=250',
          website: 'http://mafesernaarboleda.co'
        }
      }
    }
  }
}
</script>
