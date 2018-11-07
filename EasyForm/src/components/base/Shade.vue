<template>
  <div class="shade">
    <img src="../../../static/images/loading.gif" alt="loading...">
    <span>
      <slot>{{message}}</slot>
    </span>

  </div>
</template>

<script>
  export default {
    name: "Shade",
    props: {
      message: {
        default: "稍等哒..."
      }
    }
  }
</script>

<style scoped>
  .shade {
    background: white;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /*opacity: 0.5;*/
    /*filter: Alpha(opacity=50);*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
  }

</style>
