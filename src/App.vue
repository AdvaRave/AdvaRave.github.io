<template>
    <div id="app">
        <site-header></site-header>
        <main>
           <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import siteHeader from './components/siteHeader';

    export default {
        name: 'app',
        components: {
            'site-header': siteHeader
        }
    };
</script>

<style lang="scss">
    @import "./styles/globals.scss";

    body {
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        font-color: $text-default;
    }

    main {
        text-align: center;
    }

    * {    
        margin:  0;
        padding: 0;
    }

    a, a:visited, a:hover, a:active {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    h1, h2 {
        font-size: 24px;
    }

    .button {
        border: 1px solid $main-color;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 15px;
    }

    .img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
</style>
