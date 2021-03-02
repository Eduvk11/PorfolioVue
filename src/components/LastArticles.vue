<template>
<div class="general">
    <Slider
     texto="Bienvenido al porfolio de Eduardo Torres con Vue"
     home="true"
     >
     </Slider>
    <div class="center">

        <section id="content">
            <h2 class="subheader">Últimos articulos</h2>

            <!--Listado de articulos-->
            <div id="articles">
                <article class="article-item" id="article-template">
                    <div class="image-wrap">
                        <img src="https://www.paxinasgalegas.es/imagenes/camelle_img244245t0m0w800h400.jpg"
                            alt="Camelle">
                    </div>
                    <h2>Articulo de prueba</h2>
                    <span class="date">
                        Hace 5 minutos
                    </span>
                    <a href="article.html">Leer más</a>

                    <div class="clearfix"></div>
                </article>
            </div>
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
    </div>
</div>
</template>

<script>
  import Slider from './Slider'
  import Sidebar from './Sidebar.vue'

export default {
    name: 'LastArticles',
    components: {
      Slider,
      Sidebar,
    }
}
</script>