<template>
    <div class="marketing">
        <div></div>
        <h1>Web Marketing</h1>
        <gallery v-bind:images="images"></gallery>
    </div>
</template>

<script>
    import gallery from './gallery';

    export default {
        name: 'marketing',
        data: function () {
            return {
                images: [
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt-A-Lion-Lying-Down-207063_detail.jpg/1200px-Rembrandt-A-Lion-Lying-Down-207063_detail.jpg' }
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

        > div {
            display: inline-block;
            height: 100px;
            width: 100px;
            background: $main-color;
        }

        h1 {
            padding: 20px 0;
            border-bottom: 2px solid $main-light;
        }

        ul {
            padding: 20px 0;
        }
    }
</style>