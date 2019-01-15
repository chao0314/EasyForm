<template>
  <div class="mycreated">
    <div class="list">
      <FormIns v-for="v in instances" :key="v.instanceId" :title="v.instanceName" :formId="v.instanceId"></FormIns>
    </div>

  </div>
</template>

<script>
  import FormIns from './FormIns';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: "MyCreated",
    data: function () {
      return {
        instances: []
      }
    },
    methods: {
      ...mapActions({
        "getInstances": "getFromInstances"
      })
    },
    components: {
      FormIns
    },
    created() {
      console.log("mycreated created");
      this.getInstances().then((res) => {
        this.instances = res;
      });

    }
  }
</script>

<style scoped>
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 10px 40px;
  }

</style>
