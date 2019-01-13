<template>
  <div class="myform">
    <MyHeader defActive="activeMy"></MyHeader>
    <FormNav></FormNav>
    <!--<router-view></router-view>-->
  </div>

</template>

<script>
  import MyHeader from '@/components/base/MyHeader';
  import FormNav from './FormNav';

  export default {
    name: "MyForm",
    components: {
      MyHeader,
      FormNav
    }
  }
</script>

<style scoped>
  .myform {
    background: #F6F6F7;
    height: 100%;
  }

</style>
