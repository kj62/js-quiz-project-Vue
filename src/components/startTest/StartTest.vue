<template>
  <div v-bind:class="{'startTest': true, 'font-decreased': isAppBoxWidthSmall}" ref="startTest">
    <p> {{readyText}} </p>
    <router-link to='/takeTest'>
        <div class='start-button-container'>
            <div type='button'>{{startText}}</div>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'startTest',
    data () {
        return {
            startText: "Let's start!",
            readyText: "Ready?",
            appBoxSize: {
                width: 0,
                appBoxWidthFlag: 0
            }
        }
    },
    methods: {
        getAppBoxWidth: function($event) {
        this.appBoxSize.width = this.$refs['startTest'].clientWidth;   
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

<style lang='scss' scope>
    @import "StartTest.scss";
</style>