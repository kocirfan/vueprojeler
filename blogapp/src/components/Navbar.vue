<template>
    <nav class="main-nav">
        <router-link to="/">Blog</router-link> |
    <router-link to="/add">Add New Blog</router-link>
    </nav>
  
</template>

<script>
export default {

}
</script>

<style>
.main-nav {
  padding: 20px;
  background-color: #2c3e50;
   text-align: center;
}

.main-nav a {
  font-weight: bold;
  color: #8e8f91;
  text-decoration: none;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}
</style>