<template>
  <div class="app">
    <NavBar />
    <PresentationProfile />
    <AboutMe />
    <ProjectsComponent />
    <SocialMedia />
    <ContactMe />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import PresentationProfile from './components/PresentationProfile.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ContactMe from './components/ContactMe.vue'
import SocialMedia from './components/SocialMedia.vue'
</script>

<style scoped>
*{
  margin: 0px!important;
  padding: 0px!important;
}
.app{
/* background-color: rgb(107, 106, 106); */
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
</style>
