<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "APP",
    methods: {
      ...mapMutations({getLocalUserInfo: "getLocalUserInfo"})
    },
    created() {
      this.getLocalUserInfo();
    }
  }
</script>

<style scoped>
  .app {
    height: 100%;
  }
</style>
