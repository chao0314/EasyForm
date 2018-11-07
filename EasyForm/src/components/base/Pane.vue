<template>
  <div class="pane" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Pane",
    data: function () {
      return {
        show: false
      }
    },
    props: {
      label: {
        type: String,
        default: "label"
      },
      special: {
        default: "block"
      }
    }
  }
</script>

<style scoped>

</style>
