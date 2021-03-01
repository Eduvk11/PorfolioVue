<template>
    <section id="content">
        <h2 class="subheader">Peliculas</h2>

        <!--Listado de articulos-->
        <div id="articles">
            <article class="article-item" v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                <div class="image-wrap">
                    <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title">
                </div>
                <h2>{{pelicula.title}}</h2>
                <span class="date">
                    {{pelicula.year}}
                </span>
                <a href="article.html">Leer más</a>

                <div class="clearfix"></div>
            </article>
           
        </div>
    </section>

</template>

<script>
export default {
    name: 'Peliculas',
    data(){
        return {
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