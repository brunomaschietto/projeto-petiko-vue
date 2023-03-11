<template>
  <div class="signup">
    <NavBar />
    <FormSignUp />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import FormSignUp from "../components/FormSignUp.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "SignUpView",
  components: {
    NavBar,
    FormSignUp,
    Footer,
  },
};
</script>
