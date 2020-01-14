<template>
  <div class="container>">
    <div class="navigate">
      <div class="navigate_links">
        <router-link class="navbar_element" to="/">О нас</router-link>
        <router-link class="navbar_element" :to="'/registration'">Регистрация</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>