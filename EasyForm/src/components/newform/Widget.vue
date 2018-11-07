<template>
  <div class="widget">
    <div class="widget-container">
      <WidgetItem v-for="item in srcs" :key="item.type" :item="item"></WidgetItem>
    </div>

  </div>
</template>

<script>
  import WidgetItem from "@/components/newform/WidgetItem";
  import {mapState} from 'vuex';

  export default {
    name: "Widget",
    data: function () {
      return {
        imgSrc: {
          baseUrl: "../../static/images/"
        }
      }

    },
    computed: {
      ...mapState({
        widgets: state => state.widgets.slice(1)
  }
  ),
  srcs: function () {
    return this.widgets.map(v => {
      let value = Object.assign({}, v);
      value.img = `${this.imgSrc.baseUrl}${v.img}`;
      return value;
    });
  }
  },
  components: {
    WidgetItem
  }
  ,
  created: function () {
    // this.widgets = this.$store.state.widgets;
  }
  }
</script>

<style scoped>
  .widget {
    /*flex: 1 1 auto;*/
    /*max-width: 25%;*/
    float: left;
    width: 25%;
    overflow-y: auto;
    /*height: 90vh;*/
  }

  .widget-container {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
  }

</style>
