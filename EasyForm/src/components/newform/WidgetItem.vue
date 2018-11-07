<template>
  <div class="item" @click="click">
    <img :src="item.img" alt="image">
    <span>{{item.name}}</span>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    name: "WidgetItem",
    props: ["item"],
    data: function () {
      return {}
    },
    methods: {
      ...mapMutations({increment: 'increment'}),
      click: function () {
        this.increment({component: Object.assign({}, JSON.parse(JSON.stringify(this.item)), {isCurrent: true})});
      }
    }
  }
</script>

<style scoped>
  .item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*width: 110px;*/
    width: 100%;
    height: 50px;
    margin: 0 10px 10px;
    border: dashed 1px silver;
  }

  .item img {
    width: 32px;
    height: 32px;
  }

  /*.item:active {*/
  /*box-shadow: 1px 1px 1px black inset;*/
  /*}*/
  .item:hover {
    border: 1px solid #5B90CF;
    box-shadow: 0 0 10px #5B90CF;
  }

</style>
