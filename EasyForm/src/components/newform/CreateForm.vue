<template>
  <div class="newform">
    <Widget></Widget>
    <Container></Container>
    <Setting></Setting>

  </div>
</template>

<script>
  import Widget from '@/components/newform/Widget';
  import Container from '@/components/newform/Container';
  import Setting from '@/components/newform/Setting';

  export default {
    name: "CreateForm",
    components:{
      Widget,
      Container,
      Setting
    }
  }
</script>

<style scoped>
  .newform{
    /*display: flex;*/
    height: 85%;
  }

</style>
