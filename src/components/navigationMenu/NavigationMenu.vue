<template>
    <nav class='navbar'>
        <div class='nav-container'>
            <ul v-bind:class='{"navbar-list": true, "small-margin-top": isMarginShorter}'>
                <router-link to='/'><li v-bind:class='{"nav-item": true, "active-card": isHomeActive}' v-on:click='changeCardSelection("home"); activateCard("home")'>Home</li></router-link>
                <router-link to='/whyJS'><li v-bind:class='{"nav-item": true, "active-card": isWhyJSActive}' v-on:click='changeCardSelection("whyJS"); activateCard("whyJS")'>Why JS?</li></router-link>
                <router-link to='/about'><li v-bind:class='{"nav-item": true, "active-card": isAboutActive}' v-on:click='changeCardSelection("about"); activateCard("about")'>About</li></router-link>
                <router-link to='/tutSrc'><li v-bind:class='{"nav-item": true, "active-card": isTutSrcActive}' v-on:click='changeCardSelection("tutSrc"); activateCard("tutSrc")'>Tutorials</li></router-link>
            </ul>
        </div>
    </nav>
</template>

<script>

import LocalStore from '../../localStorage';

const storeKeyHome = 'vue-store-key-home';
const storeKeyWhyJS = 'vue-store-key-whyjs';
const storeKeyAbout = 'vue-store-key-about';
const storeKeyTutSrc = 'vue-store-key-tutSrc';

export default {
  name: 'App',
  data () {
    return {
      isHomeActive: LocalStore.getStore(storeKeyHome),
      isWhyJSActive: LocalStore.getStore(storeKeyWhyJS),
      isAboutActive: LocalStore.getStore(storeKeyAbout),
      isTutSrcActive: LocalStore.getStore(storeKeyTutSrc)
    }
  },
  props: {
    marginTopDecreased: Boolean
  },
  methods: {
    changeCardSelection: function(selection) {
      if(selection == 'home'){
        this.$emit('changeCardSelection', 'home');
      }
      else if(selection == 'whyJS'){
        this.$emit('changeCardSelection', 'whyJS');
      }
      else if(selection == 'about'){
        this.$emit('changeCardSelection', 'about');
      }
      else if(selection == 'tutSrc'){
        this.$emit('changeCardSelection', 'about');
      }
    },
    activateCard: function(card) {
      if(card == 'home') {
        this.isHomeActive = true;
        LocalStore.setStore(storeKeyHome, true);
        this.isWhyJSActive = false;
        LocalStore.setStore(storeKeyWhyJS, false);
        this.isAboutActive = false;
        LocalStore.setStore(storeKeyAbout, false);
        this.isTutSrcActive = false;
        LocalStore.setStore(storeKeyTutSrc, false);
      }
      else if(card == 'whyJS') {
        this.isHomeActive = false;
        LocalStore.setStore(storeKeyHome, false);
        this.isWhyJSActive = true;
        LocalStore.setStore(storeKeyWhyJS, true);
        this.isAboutActive = false;
        LocalStore.setStore(storeKeyAbout, false);
        this.isTutSrcActive = false;
        LocalStore.setStore(storeKeyTutSrc, false);
      }
      else if(card == 'about') {
        this.isHomeActive = false;
        LocalStore.setStore(storeKeyHome, false);
        this.isWhyJSActive = false;
        LocalStore.setStore(storeKeyWhyJS, false);
        this.isAboutActive = true;
        LocalStore.setStore(storeKeyAbout, true);
        this.isTutSrcActive = false;
        LocalStore.setStore(storeKeyTutSrc, false);
      }
      else if(card == 'tutSrc') {
        this.isHomeActive = false;
        LocalStore.setStore(storeKeyHome, false);
        this.isWhyJSActive = false;
        LocalStore.setStore(storeKeyWhyJS, false);
        this.isAboutActive = false;
        LocalStore.setStore(storeKeyAbout, false);
        this.isTutSrcActive = true;
        LocalStore.setStore(storeKeyTutSrc, true);
      }
    }
  },
  computed: {
    isMarginShorter: function() {
      if(this.marginTopDecreased == true) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style lang='scss' scoped>
  @import 'NavigationMenu.scss';
</style>
