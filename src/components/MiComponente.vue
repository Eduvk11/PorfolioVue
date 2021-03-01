<template>
    <section id="content">
        <h2 class="subheader">{{titulo}}</h2>
        <hr/>
        <h1>Este es MI COMPONENTE</h1>
        <h2>{{subtitulo}}</h2>
        <hr/>

        <h2>Reactividad</h2>
        <input type="text" v-model="nombre"/>
          Mi nombre es: <strong>{{nombre}}</strong> 

          <h2>Directivas Condicionales</h2>
          <input type="number" v-model="edad" />
          Mi edad es: <strong>{{edad}}</strong>

          <p class="alert-success-prov" v-if="edad && edad >= 18 && edad < 65">
            ¡¡Eres mayor de edad!!
          </p>

           <p class="alert-old-prov" v-else-if="edad && edad >= 65 ">
            ¡¡Eres de la tercera edad!!
          </p>

            <p class="alert-danger-prov" v-else>
            ¡¡Eres menor de edad!!
          </p>

          <h2>Directiva iterativa</h2>
          <ol>
            <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
          </ol>
          
       <pre>
         {{$data}}
       </pre>

    </section>
</template>


<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: 'Mi Componente',
      subtitulo: "Soy el subtitulo de mi componente",
      nombre:'',
      edad: 18,
      peliculas: ['Batman','Superman','Spiderman','Wonderwoman'],
   
    };
  },
 
};
</script>