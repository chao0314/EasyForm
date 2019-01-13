<template>
  <div class="mycreated">
    <div class="list">
      <FormIns v-for="v in instances"></FormIns>
    </div>

  </div>
</template>

<script>
  import FormIns from './FormIns';

  export default {
    name: "MyCreated",
    computed: {
      instances() {
        return [{}, {}, {},{},{},{},{}]
      }
    },
    components: {
      FormIns
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
