<template>
    <div class="instance-data">
      <check-box-list :list ="[-1,1,2,3,4]"></check-box-list>
      <!--<header>-->
        <!--<instance-data-item id="all" :message="getInstanceResultTile"></instance-data-item>-->
      <!--</header>-->
      <!--<section>-->

      <!--</section>-->
    </div>


</template>

<script>
  import InstanceDataItem from '@/components/myform/InstanceDataItem';
  import CheckBoxList from '@/components/myform/CheckBoxList';
  import {mapGetters} from 'vuex';

  export default {
    name: "InstanceData",
    computed: {
      ...mapGetters({
        getInstanceResultTile:"getInstanceResultTile"
      })
    },
    components: {
     InstanceDataItem,
      CheckBoxList
    }
  }
</script>

<style scoped>
  .instance-data{
    margin: 20px;
    padding: 20px;
    background: white;
  }

</style>
