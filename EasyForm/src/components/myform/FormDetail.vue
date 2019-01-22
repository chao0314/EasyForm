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
  import {mapActions} from 'vuex';

  export default {
    name: "FormDetail",
    created() {
      this.getInstanceInfoById({instanceId: this.$route.query.instanceId});
    },
    methods: {
      ...mapActions({
        "getInstanceInfoById": "getInstanceInfoById"
      })
    },
    components: {
      MyHeader,
      DetailNav
    }
  }
</script>

<style scoped>
  .form_detail {
    background: #F6F6F7;
    height: 100%;
    /*background:pink;*/
  }

</style>
