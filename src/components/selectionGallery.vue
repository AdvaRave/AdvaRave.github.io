<template>
    <div class="gallery">
        <section>
            <div v-bind:style="{'background-image': 'url(\'' + images[selectedIndex].src + '\')'}" v-on:click="overlayDisplayed=true">
                <a class="right" v-show="selectedIndex < images.length - 1" v-on:click="next" v-on:click.stop><i class="fa fa-chevron-circle-right"></i></a>
                <a class="left" v-show="selectedIndex > 0" v-on:click="prev" v-on:click.stop><i class="fa fa-chevron-circle-left"></i></a>
            </div>
            <ul>
                <li v-for="(image, index) in images" v-bind:style="{'background-image': 'url(\'' + image.src + '\')'}" v-on:click="selectedIndex=index">
                </li>
            </ul>
        </section>
        <overlay-gallery v-bind:images="images" v-bind:selectedIndex="selectedIndex" v-show="overlayDisplayed" v-on:close="overlayDisplayed = false"></overlay-gallery>
    </div>
</template>

<script>
    import overlayGallery from './overlayGallery';

    export default {
        name: 'selectionGallery',
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
            next: function() {
                if (this.selectedIndex + 1 >= this.images.length - 1) {
                    this.selectedIndex = this.images.length - 1;
                } else {
                    this.selectedIndex++;
                }
            },
            prev: function() {
                if (this.selectedIndex - 1 <= 0) {
                    this.selectedIndex = 0;
                } else {
                    this.selectedIndex--;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    .gallery {
        padding: 40px;

        section {
            width: 800px;
            display: inline-block;

            > div {
                height: 600px;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                cursor: pointer;
                border-radius: 10px;
                position: relative;

                a {
                    position: absolute;
                    top: calc((100% - 40px) / 2);
                    color: $white;
                    font-size: 40px;
                    opacity: 0.6;

                    &:hover {
                        opacity: 0.9;
                    }

                    &.right {
                        right: 20px;
                    }

                    &.left {
                        left: 20px;
                    }
                }
            }

            ul {
                padding-top: 10px;

                li { 
                    display: inline-block;
                    margin: 5px;
                    height: 100px;
                    width: 100px;
                    background-size: cover;
                    background-position: center center;
                    border-radius: 10px;
                    cursor: pointer;
                }
            }
        }
    }

    
</style>