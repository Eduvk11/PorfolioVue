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
                <Articles v-bind:articles="articles"></Articles>

            </div>
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
    </div>
</div>
</template>

<script>
import Slider from './Slider';
import Sidebar from './Sidebar.vue';
import Articles from './Articles';
import axios from 'axios';
import Global from '../Global';

export default {
    name: 'LastArticles',
    components: {
        Slider,
        Sidebar,
        Articles
  
    },
    mounted() {
        this.getLastArticles();
    },
    data() {
        return {
            url: Global.url,
            articles:[],
        }
    },
    methods:{
        getLastArticles(){
            axios.get(this.url + 'articles/true')
            .then(res => {
                if(res.data.status === 'success'){
                    this.articles = res.data.articles;

                     console.log(this.articles);
                }
               
            });
        }
    }
    
}
        

</script>