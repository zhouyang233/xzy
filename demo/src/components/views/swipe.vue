<template>
  <div class="wrapper">
        <div class="box2">
        <mt-swipe :auto="4000" class="box">
        <mt-swipe-item v-for='(item,index) in arr' :key='index' >
            <div @touchend="toPlay2(item.id)"
             @touchstart="toInfoStart($event)"
             @touchmove="toInfoMove($event)"
            >
            <img class="img" :src="item.image">
            <h3 class="item1">{{item.title}}</h3>
            </div>
        </mt-swipe-item>
        
        </mt-swipe>
        </div>
       
        
        <div>
         <div class="tit" v-for="(item,index) in test" :key="index">
           <h4>今日热闻</h4>
        </div>
       <div class="news" @touchstart="toPlay(items.id)" v-for="(items,indexs) in list" :key="indexs">
       <p class="test">{{items.title}}</p>
       <img class="img1" :src="items.images" alt="">
        </div>

       </div>

  </div>
</template>

<script type="text/ecmascript-6">
import API from '../../common/js/api.js'
var endX=0;
export default {
  
  components: {},
  props: {},
  data () {
    return {
        arr:[],
        list:[],
        test:["今日热闻","今日热闻","今日热闻"],
        kk:20190426
    };
  },
  watch: {},
  computed: {},
  methods: {
     
    toPlay2(con) {
      if(!endX){
       this.$router.push(`/new/${con}`);
      }
    },
    toInfoStart(e){
      endX=0;
    },
    toInfoMove(e){
      endX=e.touches[0].clientX;
    },

    toPlay(con) {
       this.$router.push(`/new/${con}`);
    }

  },
  mounted () {
    var that =this;
     
      that.$http({
          url:API.con
      }).then(res=>{
          that.list=res.data.stories
          that.arr=res.data.top_stories
         console.log(res.data.stories);
          
      })
      ,
      window.onscroll = function(){
        var WH =document.documentElement.clientHeight;
        var DH =document.documentElement.offsetHeight;
        var ST =document.documentElement.scrollTop || document.body.scrollTop;
        console.log(WH,DH,ST)
        if(WH + ST +100 >= DH) {
          that.$http({
            url:API.before+that.kk
          }).then(res=>{
            that.list=that.list.concat(res.data.stories)
          })
          .catch(err =>{
            console.log(err);
          })
        }
      }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/index.styl';
.wrapper {
    background: #f3f3f3;
    width: 100vw;

    margin-top:0.7rem;
}
    .box2 {
            width:100vw
            height:4rem
    }
    .box {
       height: 4rem
         width: 100vw
        position :relative
    }
    .item1 {
      position: absolute
      color: red
      font-size: 0.32rem
      bottom :0.40rem
      left: 0
      }
               
       .img {
       width :7.2rem
       height :4rem
     }
     .tit{
      width :100vw;
      height :0.7rem;
      background :#f3f3f3;
      }
      .tit h4{
          color:#333;
          padding-left:0.2rem
          line-height:0.7rem
      }
.news {
      width 95vw;
      height 2rem;
      background #fff;
      position relative
      border .01rem solid #f3f3f3
      box-shadow 0 0.01rem 
      margin 0 0.17rem
      margin-bottom 0.2rem
      }
      .test{
        padding-left 0.2rem
        padding-top 0.25rem
        font-size 0.3rem
        width 70%
        }
        .img1{
          width 1.5rem;
          height 1.5rem;
          background red;
          position absolute;
          right 0.25rem;
          top 0.25rem
          }
          

           
     

</style>
