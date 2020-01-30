<template>
  <div class="container>">
    <div class="navigate">
      <div class="navigate_links">
        <router-link tag="li" class="navbar_element" exact to="/" active-class="active">
          <a>О нас</a>
        </router-link>
        <router-link tag="li" class="navbar_element" :to="'/registration'" active-class="active">
          <a>Регистрация</a>
        </router-link>
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

<style lang="scss">
  @import "assets/scss/normalize";
</style>
