<template>
    <div id="app">
        <site-header></site-header>
        <main>
           <router-view></router-view>
        </main>
        <footer>
            <a v-show="showTopButton" v-smooth-scroll:header><b>Top</b> <i class="far fa-arrow-alt-circle-up"></i></a>
        </footer>
    </div>
</template>

<script>
    import siteHeader from './components/siteHeader';

    export default {
        name: 'app',
        data: function() {
            return {
                showTopButton: false
            };
        },
        components: {
            'site-header': siteHeader
        },
        mounted: function() {
            var that = this;
            window.addEventListener('scroll', function() {
                that.showTopButton = document.scrollingElement.scrollTop > 0;
            });
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

    footer {
        color: $white;

        b {
            padding-right: 10px;
        }

        a {
            position: fixed;
            bottom: 0;
            right: 50px;
            background: $main-color;
            padding: 10px 15px;
            font-size: 20px;
            border-top-right-radius: 7px;
            border-top-left-radius: 7px;
        }
    }

    @media only screen and (max-width: 1024px) {
        footer {
            a {
                font-size: 18px !important;
                padding: 5px 10px !important;
            }
        }
    }
</style>
