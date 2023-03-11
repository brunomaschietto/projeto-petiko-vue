<template>
  <div class="home">
    <NavBar />
    <Main />
    <MiddlePage />
    <Cards />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Main from '../components/Main.vue'
import MiddlePage from '../components/MiddlePage.vue'
import Cards from '../components/Cards.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Main,
    MiddlePage,
    Cards,
    Footer
  }
}
</script>
