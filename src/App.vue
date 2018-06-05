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
            siteHeader
        }
    };
</script>

<style lang="scss">
    @import "./styles/globals.scss";

    body {
        font-family: 'Open Sans', sans-serif;
    }
    * {    
        margin:  0;
        padding: 0;
    }

    a, a:visited, a:hover, a:active {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
</style>
