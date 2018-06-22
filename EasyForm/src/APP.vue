<template>
  <div>
      <MyHeader></MyHeader>
      <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '@/components/base/MyHeader';

  export default {
    name: "APP",
    data:function(){
      return{

      }
    },
    components: {
      MyHeader: MyHeader
    }
  }
</script>

<style scoped>

</style>
