import { Params } from '@angular/router';
<template>
    <div class="general">
        <Slider texto="Página de pruebas"></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Pagina de pruebas</h2>
                <h3>{{id_desde_url}} </h3>
                <button @click="actualizarNombre()">Actualizar nombre</button>
                <button @click="redirigirAlBlog()">ir al Blog</button>
                <h4>{{nombre}}</h4>

                <!--Listado de articulos-->

            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>

</template>

<script>
    import Slider from './Slider';
    import Sidebar from './Sidebar.vue';

export default {
    name: 'Pagina',

    components: {
        Slider,
        Sidebar,
    },

    // Cilclos de vida del componente 'created'= Componente cargando
    created(){
        console.log('el componente se esta cargando');
    },
    // Cilclos de vida del componente 'mounted'= Componente montado
    mounted(){
        console.log('Componente montado');
        this.id_desde_url = this.$route.params.id ;
    },
    // Cilclos de vida del componente 'updated'= Componente actualizandose
    updated(){
        console.log('Componente actualizandose');

    },
    // Cilclos de vida del componente 'destroyed'= Componente destruido
    destroyed(){
        console.log('Componente finalizado');
    },
    data(){
        return{
            id_desde_url: null,
            nombre: 'Eduardo Torres'
        };
    },
    methods: {
        actualizarNombre() {
            this.nombre = 'EDUARDO TORRES';
            console.log(this.nombre)
        },
        redirigirAlBlog(){
            this.$router.push('/blog');

        }
    }
  
};
</script>