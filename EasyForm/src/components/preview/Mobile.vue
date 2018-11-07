<template>
  <div class="mobile">
    <div class="outline">
      <Container class="inner"></Container>
    </div>
  </div>
</template>

<script>
  import Container from "./Container";

  export default {
    name: "Mobile",
    components: {
      Container
    }
  }
</script>

<style scoped>
  .mobile {
    width: 100%;
    min-height: calc(100% - 60px);
    background: #364760;
    position: relative;
  }

  .outline {
    width: 280px;
    height: 460px;
    background: url(../../../static/images/mobileX.png) no-repeat;
    background-size: 100% 100%;
    margin-left: 50%;
    transform: translate(-50%, 5px);
    padding: 40px 30px 32px;
  }

  .inner {
    overflow-y: auto;
    height: 100%;
  }

  .inner::-webkit-scrollbar {
    width: 2px;
  }
  .inner::-webkit-scrollbar-button {
    display: none;
  }

  .inner::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #F5F5F5;
  }
  .inner::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #A0A0A0;


  }
</style>
