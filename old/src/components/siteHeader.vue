<template>
    <header id="header">
        <nav>
            <router-link to="/" class="logo"></router-link>
            <ul>
                <li>
                    <a href="/" v-smooth-scroll:projects>Latest Projects</a>
                </li>
                <li class="seperator"></li>
                <li><a href="https://www.linkedin.com/in/adva-rave-00281596" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/advarave" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="mailto:advarave@gmail.com"><i class="far fa-envelope"></i></a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'siteHeader'
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    header {
        nav {
            background: $main-color;
            overflow: hidden;
            padding: 15px;
            color: $white;

            .logo {
                display: inline-block;
                float: left;
                width: 0; 
                height: 0; 
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 20px solid $white;
            }

            ul {
                display: inline-block;
                float: right;

                li {
                    display: inline-block;
                    padding: 0 10px;

                    &.seperator {
                        border-left: 2px solid $white;
                        height: 23px;
                        padding: 0;
                        margin: 0 10px 0 7px;
                        vertical-align: bottom;
                    }

                    a {
                        i {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
</style>
