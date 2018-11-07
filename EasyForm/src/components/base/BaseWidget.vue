<template>
  <div class="base-widget" :class="{baseActive:isActive}">
    <div class="base-widget-img" :style="{display:display}">
      <img src="../../../static/images/add.png" alt="add" @click.stop="insertComp">
      <img src="../../../static/images/del.png" alt="del" @click.stop="removeComp">
    </div>
    <p class="base-widget-p">
      <span>{{name}}</span>
    </p>
    <p class="desc">{{compDes.description}}</p>
    <slot></slot>
  </div>

</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex';

  export default {
    name: "BaseWidget",
    data: function () {
      return {}
    },
    props: {
      compDes: {
        required: true,
        type: Object
      },
      preview: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      ...mapMutations({
        insert: "insert",
        remove: "remove"
      }),
      removeComp() {
        this.remove({
          component: this.compDes
        })
      },
      insertComp() {
        this.insert({
          component: this.component(this.compDes.type),
          prev: this.compDes
        })

      }
    },
    computed: {
      ...mapGetters({
        component: "getWidget"
      }),
      ...mapState({
        formSettings: "formSettings"
      }),
      name: function () {
        if (this.formSettings.serialNumber) {
          return `${this.compDes.number + 1}.${this.compDes.name}`
        }
        return this.compDes.name;
      },
      isActive: function () {
        return this.compDes.isCurrent || false;
      },
      display: function () {
        return this.preview ? 'none' : '';
      }
    }
  }
</script>

<style scoped>
  .base-widget {
    padding: 0 5px 10px;
  }

  .base-widget-p {
    height: 24px;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    text-align: left;
  }

  .base-widget-img {
    float: right;
    margin-top: -10px;
  }

  .base-widget-img img {
    width: 16px;
    height: 16px;
    margin: 0 10px 0 0;
    display: none;
  }

  .base-widget:hover {
    border: 1px dashed #5A90CF;
    background: #EBF6FF;
  }

  .base-widget:hover img {
    display: inline;
  }

  .desc {
    width: 100%;
    overflow: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    text-align: left;
  }

  .baseActive {
    border: 1px dashed #5A90CF;
    background: #EBF6FF;
  }
</style>
