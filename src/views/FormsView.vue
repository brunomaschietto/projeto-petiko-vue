<template>
  <div class="forms">
    <NavBar />
    <FormsPage />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import FormsPage from "../components/FormsPage.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "FormsView",
  components: {
    NavBar,
    FormsPage,
    Footer,
  },
};
</script>
