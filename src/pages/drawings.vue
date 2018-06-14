<template>
    <div class="drawings">
        <div class="header-image img"></div>
        <h1>Drawings</h1>
        <gallery v-bind:images="images"></gallery>
    </div>
</template>

<script>
    import gallery from '../components/gallery';

    export default {
        name: 'drawings',
        data: function () {
            return {
                images: [
                    { src: require('../assets/drawings/amigo.jpg') },
                    { src: require('../assets/drawings/chitah.jpg') },
                    { src: require('../assets/drawings/dance.jpg') },
                    { src: require('../assets/drawings/ear.jpg') },
                    { src: require('../assets/drawings/face.jpg') }
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

    .drawings {
        color: $main-color;
        padding: 50px 0;
        text-align: center;

        .header-image {
            display: inline-block;
            height: 137px;
            width: 100px;
            background-image: url('../assets/homepage/icon-drawings.png');
        }

        h1 {
            padding: 0 0 20px 0;
            border-bottom: 2px solid $main-light;
        }
    }
</style>