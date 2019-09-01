<template>
  <div v-bind:class="{'tutSrc': true, 'font-decreased': isAppBoxWidthSmall}" ref="tutSrc">
        <div class='tutSrc-box'>
            <p>PL:</br></p>
            <p class='tut-link'>
                <a href='http://kursjs.pl/' target='_blank'>{{JSCourseOne}}</a>
            </p>
            <p>ENG:</br></p>
            <p class='tut-link'>
                <a href='http://javascript.info/' target='_blank'>{{JSCourseTwo}}</a>
            </p>
            <p>Knowledge Development:</br></p>
            <p class='tut-link'>
                <a href='https://css-tricks.com/developer-roadmaps/' target='_blank'>{{JSDevRoadmaps}}</a>
            </p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'TutSrc',
  data () {
    return {
      appBoxSize: {
        width: 0,
        appBoxWidthFlag: 0
      },
      JSCourseOne: `Kurs Javascript dla Superbohaterow`,
      JSCourseTwo: `The Modern Javascript Tutorial`,
      JSDevRoadmaps: `Front-End Developer Roadmaps`
    }
  },
  methods: {
    getAppBoxWidth: function($event) {
      this.appBoxSize.width = this.$refs['tutSrc'].clientWidth;   
      if(this.appBoxSize.width <= 750) {
        this.appBoxSize.appBoxWidthFlag = 1;
      }
      else{
        this.appBoxSize.appBoxWidthFlag = 0;
      }
    }
  },
  computed: {
    isAppBoxWidthSmall: function() {
      if(this.appBoxSize.appBoxWidthFlag == 1){
        return true;
      }
      return false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getAppBoxWidth);
      //Init
      this.getAppBoxWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getAppBoxWidth);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import "TutSrc.scss";
</style>