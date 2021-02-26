<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <div class="center">
      <LastArticles></LastArticles>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'
  import Slider from './components/Slider.vue'
  import Sidebar from './components/Sidebar.vue'
  import LastArticles from './components/LastArticles.vue'
  import FooterComponent from './components/FooterComponent.vue'

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      Slider,
      Sidebar,
      LastArticles,
      FooterComponent
    }
  }
</script>

<style>

@import './assets/css/styles.css';

</style>
