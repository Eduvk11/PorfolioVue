<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>
                <form class="mid-form" @submit.prevent="mostrarUsuario()">
                    <div class="form-grup">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" v-model="user.nombre">
                        <span v-if="submitted && !$v.user.nombre.required">Este campo es requerido</span>
                        <span v-if="submitted && !$v.user.nombre.minLength">Minimo dos caracteres</span>
                    </div>
                    <div class="form-grup">
                        <label for="nombre">Apellidos</label>
                        <input type="text" name="Apellidos" v-model="user.apellidos">
                        <span v-if="submitted && !$v.user.apellidos.required">Este campo es requerido</span>
                        <span v-if="submitted && !$v.user.apellidos.minLength">Minimo dos caracteres</span>
                    </div>
                    <div class="form-grup">
                        <label for="nombre">Biografia</label>
                        <textarea name="bio" v-model="user.bio"></textarea>
                        <span v-if="submitted && !$v.user.bio.required">Este campo es requerido</span>
                        <span v-if="submitted && !$v.user.bio.minLength">Minimo diez caracteres</span>
                    </div>
                    <div class="form-grup radiobuttons">
                        <input type="radio" name="genero" value="Hombre" v-model="user.genero">Hombre
                        <input type="radio" name="genero" value="Mujer" v-model="user.genero">Mujer
                        <input type="radio" name="genero" value="Otro" v-model="user.genero">Otro
                    </div>
                    <div class="clearfix"></div>
                    <input type="submit" value="Enviar" class="btn btn-success">
                </form>
                <div class="datos" v-if="user">
                    {{user.nombre + ' ' + user.apellidos + ' ' + user.genero + ' ' + user.bio}}
                </div>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import {required, minLength, alphaNum} from 'vuelidate';
import Sidebar from './Sidebar.vue';

export default {
    name: 'Formulario',
    components: {
        Sidebar,
    },
    validations: {
        user: {
             nombre:{
            required,
            alphaNum,
            minLength: 'minLength(2)'
        },
         apellidos:{
            required,
            alphaNum,
            minLength: 'minLength(2)'
        },
        bio:{
            required,
            alphaNum,
            minLength: 'minLength(10)'
        },
        }
       
        
    },

    data() {
        return {
            submitted: false,
            user: {
                nombre: '',
                apellidos: '',
                bio: '',
                genero: ''
            }
        }
    },
    methods: {
        mostrarUsuario(){
           console.log(this.user);
           this.submitted = true;

           this.$v.$touch();
           if(this.$v.$invalid){
               return false;
           }
           alert('Validacion pasada')
        }
    }
} </script>