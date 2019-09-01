<template>
  <div v-bind:class="{'about': true, 'font-decreased': isAppBoxWidthSmall}" ref="about">
    <p>{{aboutParagraphIntro}}</p></br>
    <p>{{aboutParagraphAuthor}}</p>
    <p>{{aboutParagraphFinish}}</p></br>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      appBoxSize: {
        width: 0,
        appBoxWidthFlag: 0
      },
      aboutParagraphIntro: `The Javascript Quiz was created mainly for Front-End newcomers, who are looking for the JS programming language curious facts and tricks.
        It contains some unusual questions, which undoubtedly can be used for the interviews.
        Junior programmers are able to find there their new learning path, while more advanced specialists have an opportunity to broaden
        their knowledge and seek curious JS solutions or tricks.`,
      aboutParagraphAuthor: `The author of the quiz is Krzysztof Janosz, a Junior Front-End developer, who likes to search interesting information about JS 
        and store them for himself and also share with others.`,
      aboutParagraphFinish: `All in all, enjoy the quiz and find something new, which maybe you had not found yet!`
    }
  },
  methods: {
    getAppBoxWidth: function($event) {
      this.appBoxSize.width = this.$refs['about'].clientWidth;   
      if(this.appBoxSize.width <= 750) {
        this.appBoxSize.appBoxWidthFlag = 1;
      }
      else{
        this.appBoxSize.appBoxWidthFlag = 0;
      }
    },
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
  @import "About.scss";
</style>
