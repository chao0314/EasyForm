<template>
  <div class="formins">
    <div class="form_title" :style="theme" @click.stop="toInstance">
      <img src="../../../static/images/delete.png" alt="delte" @click.stop="showDialog = true">
      <img src="../../../static/images/form.png" alt="img">
      <p>{{title}}</p>
    </div>
    <Dialog :showDialog.sync="showDialog" @confirm="del">
      {{dialogMsg}}
    </Dialog>
  </div>
</template>

<script>
  import Dialog from '@/components/base/Dialog';

  export default {
    name: "FormIns",
    data() {
      return {
        background: ["#5990CF", "#8A84C9", "#84C9AB", "#E9CA48", "#E07365"],
        showDialog: false,
        dialogMsg: "确定删除表单？"
      }
    },
    computed: {
      theme() {
        return {background: this.background[Math.floor(Math.random() * 10 % 5)]}
      }
    },
    props: {
      title: {
        default: "新的表单",
        type: String,
      },
      formId: {
        // required: true
      }
    },
    methods: {
      del() {
        console.log("del instance")

      },
      toInstance() {
        console.log("to instance")
        this.$router.push({path: "/formdetail/publish/mode"})
      }
    },
    components: {
      Dialog
    }
  }
</script>

<style scoped>
  .formins {
    padding: 15px;
    width: 20%;
    height: 180px;
    color: white;
  }

  .form_title {
    background: #5990CF;
    height: 100%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .form_title > img:first-child {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 2px;
    right: 2px;
    display: none;
  }

  .form_title > img:nth-child(2) {
    width: 32px;
    height: 32px;
    margin-bottom: 10px
  }

  .form_title:hover {
    /*box-shadow: 0 0 4px silver;*/
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }

  .form_title:hover > img:first-child {
    display: block;
  }

</style>
