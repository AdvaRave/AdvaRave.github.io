<template>
    <div class="overlay">
        <div v-bind:style="{'background-image': 'url(\'' + images[selectedIndex].src + '\')'}">
            <a class="right" v-show="selectedIndex < images.length - 1" v-on:click="next"><i class="fa fa-chevron-circle-right"></i></a>
            <a class="left" v-show="selectedIndex > 0" v-on:click="prev"><i class="fa fa-chevron-circle-left"></i></a>
        </div>
        <a class="close" v-on:click="$emit('close')"><i class="fa fa-times"></i></a>
    </div>
</template>

<script>
    export default {
        name: 'overlayGallery',
        props: ['selectedIndex', 'images'],
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
        },
        mounted: function() {
            var that = this;
            window.addEventListener('keyup', function(event) {
                if (event.keyCode == 27) { 
                    that.$emit('close');
                }
            });
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: $overlay;
        padding: 5vw;
        box-sizing: border-box;
        color: $white;
        z-index: 1;

        > div {
            width: 90vw;
            height: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
            display: inline-block;

            a {
                position: absolute;
                top: calc((100% - 60px) / 2);
                color: $white;
                font-size: 60px;
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

        .close {
            position: absolute;
            font-size: 40px;
            opacity: 0.6;
            top: 20px;
            right: 40px;

            &:hover {
                opacity: 0.9;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .overlay {
            padding: 0 !important;

            > div {
                width: 100vw !important;
            }
        }    
    }
</style>