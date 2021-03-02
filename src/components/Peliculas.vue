<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Peliculas</h2>
                <div class="mis-datos" v-if="misDatos">
                   <p v-html="misDatos"></p>
                   <br/>
                   {{ email | mayusculas | concatenaYear('Este es mi año :) ¡¡¡ ') }}
                </div>
                <div class="favorita" v-if="favorita">
                    La pelicula fovorita es:
                    <h3>{{favorita.title}} </h3>
                </div>

                <!--Listado de articulos-->
                <div id="articles">
                    <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
                        <Pelicula
                         :pelicula="pelicula"
                         @favorita="haLlegadoLaPeliculaFavorita"
                         ></Pelicula>
                    </div>
                </div>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    import Pelicula from './Pelicula.vue';
    import Sidebar from './Sidebar.vue';

export default {
    name: 'Peliculas',
    components: {
        Pelicula,
        Sidebar,
    },
    methods: {
        haLlegadoLaPeliculaFavorita(favorita){
           this.favorita = favorita; 
        }
    },
    filters: {
        mayusculas(value){
            return value.toUpperCase();
        },
        concatenaYear(value, message){
            var date = new Date();
            return value + ' ' + date.getFullYear() + ' ' + message ;
        }
    },
    computed: {
        peliculasMayuscula(){
             var peliculasMod = this.peliculas;

            for(var i = 0; i < this.peliculas.length; i++){
                peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
            }
            return peliculasMod;
        },
       misDatos(){
            return this.nombre + ' ' + this.apellido + '<br/> ' +  '<strong>Email: </strong>' + this.email;
        }
    },

    data(){
        return {
            nombre: 'Eduardo',
            apellido: 'Torres',
            email: 'eduvk11@hotmail.com',
            favorita: null,
            peliculas: [
                { title: 'Batman vs Superman', year: 2017, image: "https://hipertextual.com/files/2014/05/batman-vs-superman-dawn-of-justice.jpg?width=1200&enable=upscale" },
                { title: 'Spiderman', year: 2015, image: 'https://i.pinimg.com/originals/42/8c/7d/428c7dc836c7284f94e5cebc31c18574.jpg' },
                { title: 'Los vengadores', year: 2016, image: 'https://lamanodelextranjero.files.wordpress.com/2019/05/los-vengadores-contra-thanos-en-infinity-war.jpg' },
                { title: 'WonderWoman', year: 2020, image: 'http://es.web.img3.acsta.net/pictures/20/12/23/12/39/0017180.jpg' }
            ]
        }
    }
}
</script>