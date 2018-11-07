<template>
  <div class="myform">
    <MyHeader></MyHeader>
    <Padding></Padding>
    <CreateForm></CreateForm>
    <!--<MyFooter></MyFooter>-->
  </div>
</template>

<script>
  import MyHeader from '@/components/base/MyHeader';
  import CreateForm from '@/components/newform/CreateForm';
  import Padding from '@/components/base/Padding';
  // import MyFooter from '@/components/newform/MyFooter';

  export default {
    name: "NewForm",
    components: {
      MyHeader,
      Padding,
      CreateForm
    }
  }
</script>

<style scoped>
  .myform {
    height: 100%;
  }

</style>
