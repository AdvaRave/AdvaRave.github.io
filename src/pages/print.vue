<template>
    <div class="print">
        <div class="header-image img"></div>
        <h1>Print</h1>
        <gallery v-bind:images="images"></gallery>
    </div>
</template>

<script>
    import gallery from '../components/gallery';

    export default {
        name: 'print',
        data: function () {
            return {
                images: [
                    /*{ src: require('../assets/print/calendar.gif') },
                    { src: require('../assets/print/booth.jpg') },
                    { src: require('../assets/print/cream.jpg') }*/
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

    .print {
        color: $main-color;
        padding: 50px 0;
        text-align: center;

        .header-image {
            display: inline-block;
            height: 137px;
            width: 100px;
            background-image: url('../assets/homepage/icon-print.png');
        }

        h1 {
            padding: 10px 0 20px 0;
            border-bottom: 2px solid $main-light;
        }
    }
</style>