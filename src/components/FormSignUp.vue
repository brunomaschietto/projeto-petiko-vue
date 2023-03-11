<template>
  <div class="container min-vh-100 mt-5">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="cpf" class="form-label">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpf"
          aria-describedby="emailHelp"
          v-model="cpf"
        />
      </div>
      <div class="mb-3">
        <label for="telefone" class="form-label">Telefone</label>
        <input
          type="phone"
          class="form-control"
          id="telefone"
          v-model="telefone"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="imagem" class="picture" tabindex="0">Envie aqui sua imagem</label>
        <input
          type="text"
          class="form-control"
          id="imagem"
          v-model="imagem"
        />
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios';


export default {
  name: "FormSignUp",
  data() {
    return {
      cpf: '',
      telefone: '',
      email: '',
      imagem: ''
    }
  },
  methods: {
    handleSubmit() {
      axios.post('https://projeto-petiko-node.onrender.com/pallet', {
          cpf: this.cpf,
          telefone: this.telefone,
          email: this.email,
          imagem: this.imagem
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
