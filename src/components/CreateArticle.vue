<template src="./CreateArticle.html"></template>

<script>
    
import Sidebar from './Sidebar';
import Article from '../models/Article.js';
import Global from '../Global';
import axios from 'axios';
import { required, minLength } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

export default {
    name: 'CreateArticle',
    components: {
        Sidebar
    },
    data() {
        return {
            url: Global.url,
            article: new Article('', '', null, ''),
            submitted: false,
            file: ''
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
        // console.log(this.article)
    },
    methods: {
        fileChange() {
            this.file = this.$refs.file.files[0];
        },
        save() {
            this.submitted = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            } else {
                axios.post(this.url + '/save', this.article)
                    .then(res => {
                        if (res.data.status === 'success') {

                            if (this.file != null && this.file != undefined && this.file != '') {

                                const formData = new FormData();
                                formData.append('file0', this.file, this.file.name);

                                var articleId = res.data.article._id;

                                axios.post(this.url + '/upload-image/' + articleId, formData)
                                    .then(res => {
                                        if (res.data.article) {

                                            swal(
                                                "Articulo creado",
                                                "El articulo se a creado correctamente",
                                                "success"
                                            );

                                            this.article = res.data.article;
                                            this.$router.push('/blog');
                                        } else {
                                            // Mostrar mensage de error
                                             swal(
                                                "Articulo no creado",
                                                "El articulo no se a creado correctamente",
                                                "error"
                                            );
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    })
                            }else{
                                 this.article = res.data.article;
                                 this.$router.push('/blog');
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