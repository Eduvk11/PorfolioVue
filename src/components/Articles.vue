<template>
<section>
    <div id="articles-list" v-if="articles && articles.length >= 1">
        <article class="article-item" v-for="article in articles" :key="article._id">
            <div class="image-wrap">
                <img :src="url + 'get-image/' + article.image" :alt="article.title" :title="article.title"
                    v-if="article.image">
                <img src='../assets/defaul.png' :alt="article.title" :title="article.title" v-if="!article.image">
            </div>
            <h2>{{article.title}} </h2>
            <span class="date">
                {{article.date | moment('from', 'now')}}
            </span>
            <a href="article.html">Leer más</a>
            <div class="clearfix"></div>
        </article>
    </div>
    <div class="subhaeder" v-else-if="articles && articles.length < 1">
        No hay articulos para mostrar
    </div>
    <div  class="subhaeder" v-else>
        Cargando...
    </div>
</section>
</template>

<script>
import Global from '../Global';

export default {
    name: "Articles",
    props:['articles'],

     data(){
        return{
            url: Global.url,
        }
    },
}
</script>