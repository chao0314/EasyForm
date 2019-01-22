<template>
  <div class="detail_nav">
    <p>表单详情</p>
    <div class="nav">
      <router-link to="/formdetail/publish/mode" class="link" active-class="active">发布
      </router-link>
      <router-link to="/formdetail/data" class="link" active-class="active">数据</router-link>
      <router-link to="/formdetail/edit" class="link" active-class="active">编辑</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailNav"
  }
</script>

<style scoped>
  .detail_nav {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75px;
  }

  .detail_nav > p {
    font-size: 16px;
  }

  .link {
    display: inline-block;
    width: 70px;
    height: 30px;
    line-height: 30px;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: gray;
    font-size: 14px;
  }

  .active {
    border-bottom: 2px solid #5990CF;
    color: #5990CF;
  }


</style>
