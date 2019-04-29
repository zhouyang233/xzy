<template>

  <div class="wrapper" style="padding-top:0.7rem">
    <v-n></v-n>
    <link rel="stylesheet" :href="cssa">
    
    <div v-html="json"></div>
    <div class="asd" :style="{background: 'url('+img+')'
     +' 50%/8.24rem 8.04rem no-repeat'}"> 
     <span class="title">{{title}}</span>
     <span class="title2">{{title2}}</span>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/api.js"
import t from '../views/top.vue';
import tn from '../views/newtop.vue';
export default {
  components: {
    'v-top':t,
    'v-n':tn
  },
  props: {},
  data () {
    return {
       json:'',
       cssa:'',
       img:'',
       title:'',
       title2:''
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted () {
    // console.log(this.$route.params.id) 
    this.$http({
      url:API.n+this.$route.params.id
    }).then(res=>{
      this.json=res.data.body;
      this.cssa=res.data.css;
      this.img=res.data.image;
      this.title=res.data.title;
      this.title2=res.data.image_source;


      console.log(res.data)
    })
      
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/index.styl';
.wrapper{
  position relative
  
}
.headline{
  margin-top 10px
}
.asd {
    width 100vw
    height 3.5rem
    position absolute
    top 0.7rem
  }
  .title {
    color:#fff
    width 90%
    font-size:0.38rem
    background:rgba(0,0,0,0.1);
    position absolute
    bottom 0.40rem
    left 0.4rem
    letter-spacing:0.04rem
  }
  .title2{
    position absolute
    bottom 0.1rem
    color:#fff
    right :0.3rem;
     background:rgba(0,0,0,0.1);
     letter-spacing:0.04rem
  }
</style>
