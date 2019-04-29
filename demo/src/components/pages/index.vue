<template>
  <div class="wrapper">
          <v-top></v-top>
          <v-swipe></v-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
import { Swipe, SwipeItem } from 'mint-ui';
import t from '../views/top.vue';
import swipe from '../views/swipe.vue'
export default {
  components: {
      'v-top':t,
      'v-swipe':swipe
  },
  props: {},
  data () {
    return {
       
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
       
    }
    

</style>
