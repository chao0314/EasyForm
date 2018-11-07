<template>
  <div class="computer">
    <Container></Container>
  </div>
</template>

<script>
  import Container from "@/components/preview/Container";

  export default {
    name: "Computer",
    components: {
      Container
    }
  }
</script>

<style scoped>
  .computer {
    min-height: calc(100% - 60px);
    background: #364760;
    position: relative;
    padding: 0 25%;
  }

</style>
