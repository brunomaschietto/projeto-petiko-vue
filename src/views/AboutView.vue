<template>
  <div class="about">
    <NavBar />
    <Main />
    <AboutPage />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Main from '../components/Main.vue'
import AboutPage from '../components/AboutPage.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'AboutView',
  components: {
    NavBar,
    Main,
    AboutPage,
    Footer
  }
}
</script>
