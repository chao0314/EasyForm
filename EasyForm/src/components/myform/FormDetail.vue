<template>
  <div class="form_detail">
    <MyHeader defActive="activeMy"></MyHeader>
    <DetailNav></DetailNav>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '@/components/base/MyHeader';
  import DetailNav from './DetailNav';

  export default {
    name: "FormDetail",
    components: {
      MyHeader,
      DetailNav
    }
  }
</script>

<style scoped>
  .form_detail{
    background: #F6F6F7;
    height: 100%;
    /*background:pink;*/
  }

</style>
