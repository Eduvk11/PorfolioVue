<template>
  <div id="mi-componente">
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Mi-Componente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente"
    };
  }
};
</script>