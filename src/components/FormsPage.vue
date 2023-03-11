<template>
  <div class="container">
    <div
      class="d-flex gap-3 justify-content-center align-items-center flex-wrap min-vh-100"
    >
      <div class="row d-flex gap-3 justify-content-center align-items-center flex-wrap">
        <div
          class="card"
          v-for="objeto in responseData"
          :key="objeto.cpf"
          style="width: 18rem"
        >
          <img src="https://picsum.photos/200/300" height="220" />
          <div class="card-body">
            <p class="card-text">{{ objeto.cpf }}</p>
            <p class="card-text">{{ objeto.telefone }}</p>
            <p class="card-text">{{ objeto.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";
import axios from "axios";

export default {
  name: "FormsPage",
  data() {
    return {
      responseData: null,
    };
  },
  mounted() {
    axios
      .get("https://projeto-petiko-node.onrender.com/pallet")
      .then((response) => {
        this.responseData = response.data;
        console.log(this.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    postUser() {
      api
        .post("/pallet", {
          cpf: "10293892132",
          telefone: "12344209212",
          email: "joaozinho@email.com",
          imagem: "image.jpg",
        })
        .then(() => {
          console.log("Cadastrado com sucesso");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
