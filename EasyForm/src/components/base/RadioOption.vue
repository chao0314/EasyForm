<template>
  <div class="radio_option">
    <input type="radio" disabled>
    <span>{{option.value}}</span>
  </div>
</template>

<script>
  export default {
    name: "RadioOption",
    props: {
      option: {
        required: true
      }
    }
  }
</script>

<style scoped>
  .radio_option {
    margin-top: 5px;
    display: flex;
    justify-content: left;
  }

  .radio_option span {
    margin: -2px 0 0 5px;
  }

</style>
