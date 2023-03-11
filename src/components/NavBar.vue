<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid gap-5">
      <a class="navbar-brand" href="#">Palletops</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav gap-3 me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" aria-current="page" class="text-decoration-none text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" aria-current="page" class="text-decoration-none text-white">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/forms" aria-current="page" class="text-decoration-none text-white">Forms</router-link>      
          </li>
          <li class="nav-item">
            <router-link to="/about" aria-current="page" class="text-decoration-none text-white">About us</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
