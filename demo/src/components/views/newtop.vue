<template>
  <div class="wrapper">
    <div class="box1">
         <mt-header fixed :title="a">
        <router-link to="/" slot="left">
            <span class="iconfont">&#xe62f;</span> 
        </router-link>
         <mt-button slot="right">
             <span class="iconfont">&#xe6f1;</span>
         </mt-button>
         <mt-button slot="right">
              <span class="iconfont bt">&#xe76a;</span>
         </mt-button>
         </mt-header>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data () {
    return {
         a:"首页"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted () {}
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/index.styl';
.wrapper{
  
 .mint-header {
       text-align left 
       .bt {
           margin-left 0.2rem !important;
       }

       }
}
</style>
