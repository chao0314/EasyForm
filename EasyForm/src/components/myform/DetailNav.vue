<template>
  <div class="detail_nav">
    <p>表单详情</p>
    <div class="nav">
      <router-link to="/formdetail/publish/mode" :class="['link',{active:active.isPublish}]" @click.native="switchStyle('isPublish')">发布
      </router-link>
      <router-link to="" :class="['link',{active:active.isData}]" @click.native="switchStyle('isData')">数据</router-link>
      <router-link to="" :class="['link',{active:active.isEdit}]" @click.native="switchStyle('isEdit')">编辑</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailNav",
    data() {
      return {
        active: {
          isPublish: true,
          isData: false,
          isEdit: false
        }
      }
    },
    methods: {
      switchStyle(prop) {
        if (!this.active[prop]) {
          for (let p in this.active) {
            if (this.active.hasOwnProperty(p)) {
              this.active[p] = false;
            }
          }
          this.active[prop] = true;
        }
      }
    }
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
