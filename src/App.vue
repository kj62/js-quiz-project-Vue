<template>
  <div id="app-container" ref="app-container">
    <div id="app">
      <NavigationMenu v-on:changeCardSelection='updateCardSelection($event)' v-bind:marginTopDecreased='isMarginDecreased'></NavigationMenu>
      <transition v-bind:name="transitionHomeElems">
        <div v-show='cardSelectionValue=="home"' v-bind:class='{"home-box": true}'>
          <p v-show='cardSelectionValue=="home"' v-bind:class='{"welcome-text": true, "small-margin-top": isMarginDecreased}'>Welcome to the Javascript Quiz!</p>
          <router-link to='/startTest'>
            <button v-show='cardSelectionValue=="home"' v-on:click="updateCardSelection('startTest')" v-bind:class='{"take-test-btn": true, "small-margin-top": isMarginDecreased}'>Take Test!</button>
          </router-link>
        </div>
      </transition>
      <div v-show='cardSelectionValue!="home"'>
        <transition v-bind:name="transitionName" mode="out-in">
            <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import NavigationMenu from './components/navigationMenu/NavigationMenu'
import About from './components/about/About'
import WhyJS from './components/whyJS/WhyJS'
import TakeTest from './components/takeTest/TakeTest'
import StartTest from './components/startTest/StartTest'
import TutSrc from './components/tutSrc/TutSrc'
import LocalStore from './localStorage'

const storeKey1 = 'vue-store-key-1';

export default {
  name: 'App',
  components: {
    'NavigationMenu': NavigationMenu,
    'About': About,
    'TakeTest': TakeTest,
    'WhyJS': WhyJS,
    'StartTest': StartTest,
    'TutSrc': TutSrc
  },
  data () {
    return {
      appContainerSize: {
        width: 0,
        height: 0,
        marginTop: 0
      },
      cardSelectionValue: LocalStore.getStore(storeKey1),
      testCompleted: false,
      transitionName: 'component-fade',
      transitionHomeElems: 'home-elems'
    }
  },
  beforeMount() {
    cardSelectionValue: 'home'
  },
  methods: {
    getAppContainerSize: function($event) {
      this.appContainerSize.width = this.$refs['app-container'].clientWidth;
      this.appContainerSize.height = this.$refs['app-container'].clientHeight;
      
      if(this.appContainerSize.width <= 860 || this.appContainerSize.height <= 750) {
        this.appContainerSize.marginTop = 10;
      }
      else{
        this.appContainerSize.marginTop = 0;
      }
    },
    updateCardSelection: function(updatedCardSelection) {
      this.cardSelectionValue = updatedCardSelection;
      if(this.cardSelectionValue == "" || this.cardSelectionValue == undefined || this.cardSelectionValue == null){
        this.cardSelectionValue = "home";
      }
      LocalStore.setStore(storeKey1, this.cardSelectionValue);
    }
  },
  computed: {
    isMarginDecreased: function() {
      if(this.appContainerSize.marginTop == 10) {
        return true;
      }
      return false;
    },
    // initCardSelection: function() {
    //   if()
    // }
  },
  mounted () {
    this.$nextTick(() => {
      cardSelectionValue: 'home'
      window.addEventListener('resize', this.getAppContainerSize);
      //Init
      this.getAppContainerSize();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getAppContainerSize);
  }
}
</script>

<style lang='scss' scoped>
  @import 'app.scss';
</style>
