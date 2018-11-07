<template>
  <div class="footer">
    <a @click="save">保存</a>
    <a>发布</a>
    <router-link to="/preview/computer">预览</router-link>
    <Shade v-show="loading"></Shade>
    <Dialog :showDialog="showDialog" :showCancel="false" :showConfirm="true" :timeout="3" @confirm="dialogConfirm">
      {{dialogMsg}}
    </Dialog>
  </div>
</template>

<script>
  import Shade from '@/components/base/Shade';
  import Dialog from '@/components/base/Dialog';
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: "MyFooter",
    data() {
      return {
        loading: false,
        showDialog: false,
        dialogMsg: "",
        showConfirm: false
      }
    },
    computed: {
      ...mapState({components: "components", formSettings: "formSettings"}),
      ...mapGetters({getRawPage: "getRawPage"})
    },
    methods: {
      ...mapActions({saveRawPage: "saveRawPage"}),
      save() {
        if (this.components.length >= 0) {
            // this.loading = true;
            // let rawPage = this.getRawPage({components: this.components, formSettings: this.formSettings});
            // this.saveRawPage({rawPage, components: this.components, formSettings: this.formSettings}).then((result) => {
            // console.log(result)
            //   this.loading = false;
            // this.dialogMsg = result.message;
            // this.dialog = true;
            // });
          this.showDialog = true;
        }
      },
      dialogConfirm() {
        this.showDialog = false
      },
      dialogTimeOut() {
      }
    },
    components: {
      Shade,
      Dialog
    }
  }
</script>

<style scoped>
  .footer {
    /*position: fixed;*/
    /*bottom: 0;*/
    left: 25%;
    right: 25%;
    height: 48px;
    background: #515151;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer > a {
    display: inline-block;
    width: 100px;
    height: 30px;
    background: #5990CF;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
    color: white;
  }

  .footer > a:active {
    box-shadow: 2px 2px 2px black inset;
  }
</style>
