<template src="./CreateArticle.html"></template>

<script>
    
import Sidebar from './Sidebar';
import Article from '../models/Article.js';
import Global from '../Global';
import axios from 'axios';
import { required, minLength } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

export default {
    name: 'EditArticle',
    components: {
        Sidebar
    },
    data() {
        return {
            url: Global.url,
            article: new Article('', '', null, ''),
            submitted: false,
            file: '',
            isEdit: true
        }
    },
    validations: {
        article: {
            title: {
                required,
                minLength: minLength(2)
            },
            content: {
                required,
                minLength: minLength(10)
            }
        }
    },
    mounted() {
        
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
         console.log(this.article)
    },
    methods: {

        getArticle(articleId){
            axios.get(this.url + 'article/' + articleId).then(res => {
                if(res.data.status == 'success'){
                    this.article = res.data.article;
                }
            })
        },

        fileChange() {
            this.file = this.$refs.file.files[0];
        },
        save() {
            var articleId = this.$route.params.id;
            this.submitted = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            } else {
                axios.put(this.url + '/article/' + articleId , this.article)
                    .then(res => {
                    if (res.data.status === 'success') {
                        // Subida de archivo
                    if (this.file != null && this.file != undefined && this.file != '') {

                    const formData = new FormData();
                    formData.append('file0', this.file, this.file.name);

                    var articleId = res.data.article._id;

                    axios.post(this.url + '/upload-image/' + articleId, formData)
                    .then(res => {
                    if (res.data.article) {

                        swal(
                            "Articulo editado",
                            "El articulo se a editado correctamente",
                            "success"
                        );

                        this.article = res.data.article;
                        this.$router.push('/articulo/' + this.article._id);
                    } else {
                        // Mostrar mensage de error
                         swal(
                            "Articulo no editado",
                            "El articulo no se a editado correctamente",
                            "error"
                        );
                    }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    }else{
                           swal(
                            "Articulo editado",
                            "El articulo se a editado correctamente",
                            "success"
                            );

                         this.article = res.data.article;
                         this.$router.push('/articulo/' + this.article._id);
                    }
                     }
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    }
}
</script>