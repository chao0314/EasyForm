<template>
  <div class="formnav">
    <router-link to="/myform/mycreated" class="link active">我创建的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "FormNav",
  }
</script>

<style scoped>
  .formnav {
    background: white;
    margin: 76px 70px 0;
    text-align: center;
  }

  .link {
    text-decoration: none;
    display: inline-block;
    padding :1px;
    border-bottom: 2px solid transparent;
    color: gray;
  }

   .active{
     color: #6799D3;
    border-bottom: 2px solid #6799D3;
  }
</style>
