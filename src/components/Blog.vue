<template>
    <div class="general">
        <Slider texto="Blog"></Slider>
        <div class="center">
            <section id="content">
                <h1 class="subheader">Blog</h1>
                <div id="articles" v-if="articles">
                    <Articles :articles="articles"></Articles>
                </div>
            </section>
            <Sidebar blog="true"></Sidebar>
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
    // import moment from 'moment';
    // import 'moment/locale/es';
export default {
    name: 'Blog',

    components: {
        Slider,
        Sidebar,
        Articles
    },

    mounted(){
        this.getArticles();
    },
    data(){
        return{
            url: Global.url,
            articles: []
        }
    },

    methods:{
        getArticles(){
            axios.get(this.url + 'articles')
            .then(res => {
                if(res.data.status === 'success'){
                    this.articles = res.data.articles;

                    // console.log(this.articles);
                }
               
            });
        }
    }
} </script>