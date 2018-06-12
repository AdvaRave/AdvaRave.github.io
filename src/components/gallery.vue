<template>
    <ul>
        <li v-for="image in images" v-bind:style="{'background-image': 'url(\'' + image.src + '\')'}">
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'gallery',
        props: ['images']
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    ul {
        li { 
            display: inline-block;
            margin: 10px;
            height: 200px;
            width: 200px;
            transition: transform 0.2s;
            background-size: cover;
            border: 8px solid $main-light;
            border-radius: 5px;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
</style>