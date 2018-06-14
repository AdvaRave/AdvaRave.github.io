<template>
    <div class="marketing">
        <div class="header-image img"></div>
        <h1>Web Marketing</h1>
        <gallery v-bind:images="images"></gallery>
    </div>
</template>

<script>
    import gallery from '../components/gallery';

    export default {
        name: 'marketing',
        data: function () {
            return {
                images: [
                    { src: require('../assets/marketing/game-night.jpg') },
                    { src: require('../assets/marketing/hiring.jpg') },
                    { src: require('../assets/marketing/pentecost.jpg') },
                    { src: require('../assets/marketing/adidas.jpg') },
                    { src: require('../assets/marketing/wipes.jpg') }
                ]
            };
        },
        components: {
            'gallery': gallery
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    .marketing {
        color: $main-color;
        padding: 50px 0;
        text-align: center;

        .header-image {
            display: inline-block;
            height: 137px;
            width: 100px;
            background-image: url('../assets/homepage/icon-marketing.png');
        }

        h1 {
            padding: 0 0 20px 0;
            border-bottom: 2px solid $main-light;
        }
    }
</style>