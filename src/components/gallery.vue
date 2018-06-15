<template>
    <div class="gallery">
        <ul>
            <li class="img" v-for="(image, index) in images" v-bind:style="{'background-image': 'url(\'' + image.src + '\')'}" v-on:click="openOverlay(index)">
            </li>
        </ul>
        <overlay-gallery v-bind:images="images" v-bind:selectedIndex="selectedIndex" v-show="overlayDisplayed" v-on:close="overlayDisplayed = false"></overlay-gallery>
    </div>
</template>

<script>
    import overlayGallery from './overlayGallery';

    export default {
        name: 'gallery',
        data: function () {
            return {
                overlayDisplayed: false,
                selectedIndex: 0
            };
        },
        props: ['images'],
        components: {
            'overlay-gallery': overlayGallery
        },
        methods: {
            openOverlay: function(index) {
                this.selectedIndex = index;
                this.overlayDisplayed = true;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    .gallery {
        padding: 40px;
    }

    ul {
        max-width: 1024px;
        display: inline-block;

        li { 
            display: inline-block;
            margin: 10px;
            height: 300px;
            width: 300px;
            background-size: cover;
            border-radius: 10px;
            cursor: pointer;
            background-color: $main-light;
            position: relative;

            &:after {
                content: " ";
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: $main-color;
                opacity: 0.25;
                border-radius: 10px;
            }

            &:hover {
                &:after {
                    opacity: 0;
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .gallery {
            padding: 40px 0 0 0 !important;
        }    
    }
</style>