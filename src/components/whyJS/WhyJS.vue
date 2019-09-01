<template>
    <div class="whyJS">
        <div class="main-text-container">
            <p>{{whyJSParagraphIntro}}</p>
            <ul>
                <li>
                    <b>Speed</b> {{whyJSListElemOne}}
                </li>
                <li>
                    <b>Interoperability</b> {{whyJSListElemTwo}}
                </li>
                <li>
                    <b>Popularity and support</b> {{whyJSListElemThree}}
                </li>
                <li>
                    <b>Variety of frameworks and libraries</b> {{whyJSListElemFour}}
                </li>
            </ul>
        </div>
        <div class="main-img">
            <img src='../../assets/javascript_og.png'>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhyJS',
    data () {
        return {
            msg: 'Why learn JS? Because it is very powerful...',
            whyJSParagraphIntro: `The Javascript programming language is quite affordable for novice, but it also requires some unique knowledge, which does not occur in any other technologies.
                However, there are w lot of benefits of using it:`,
            whyJSListElemOne: `- JS is compiled on the client side.`,
            whyJSListElemTwo: `- JS is easy to integrate with other web languages.`,
            whyJSListElemThree: `- JS community is huge and supplies users with an immensity of the information and plugins.`,
            whyJSListElemFour: `- JS is mainly based on frameworks and libraries - e.g. VueJS, React, Angular JS, Angular 2/4/5/6, Ember.`
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "WhyJS.scss";
</style>