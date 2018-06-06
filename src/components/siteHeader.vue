<template>
    <header>
        <nav>
            <router-link to="/" class="logo"></router-link>
            <ul>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#">My Work</a>
                </li>
                <li>
                    <a href="#">Contact Me</a>
                </li>
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
                }
            }
        }
    }
</style>
