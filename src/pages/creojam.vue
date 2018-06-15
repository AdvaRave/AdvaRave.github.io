<template>
    <article>
        <div class="header">
            <h1 class="img"></h1>
            <div><a class="button">Take me to Creojam</a></div>
            <ul>
                <li><a href="">Market Research</a></li>
                <li><a href="">Personas</a></li>
                <li><a href="">Architecture</a></li>
                <li><a href="">Product UI</a></li>
                <li><a href="">User Testing</a></li>
            </ul>
        </div>
        <section>
            <h2>The Problem</h2>
            <ul>
                <li>Access to materials and tools is an issue for the DIY community</li>
                <li>None of the DIY guide websites offer a way to purchase a wide range of materials or tools</li>
                <li>Authors of DIY guides are not incentivized to provide quality guides</li>
            </ul>
        </section>
        <section>
            <h2>The Solution</h2>
            <p>A DIY guide platform and marketplace where people can post guides which:</p>
            <ul>
                <li>Allow Makers to purchase all Materials & Tools</li>
                <li>Make money for the guide publishers</li>
                <li>Help Businesses promote their products</li>
            </ul>
        </section>
        <section>
            <h2>Market Size (US)</h2>
            <ul>
                <li>
                    <strong>$80B</strong>
                    <small>Estimated Yearly DIY Market Size</small>
                </li>
                <li>
                    <strong>1.5B</strong>
                    <small>Yearly Visits in DIY sites</small>
                </li>
                <li>
                    <strong>40%</strong>
                    <small>of Americans Started a DIY Project in 2016</small>
                </li>
            </ul>
        </section>
        <section>
            <h2>Main Values</h2>
            <ul>
                <li>Innovative</li>
                <li>Fun</li>
                <li>Trustworthy</li>
            </ul>
        </section>
        <section>
            <h2>General Guidelines</h2>
            <p>
                We examined our competitors and made a list of everything we liked and disliked
                for each one.<br>That helped us decide on our major guidelines -  
                which will give us an advantage over our competitors.
            </p>
            <ul>
                <li>Every guide will include a list of the specific materials and tools the maker used,<br><span class="pad"></span>
                    In order to provide the exact process of how the DIY creation was done
                </li>
                <li>All the guides will have the same look, for consistent experience</li>
                <li>Only appropriate content will be allowed:<br><span class="pad"></span>
                    All the guides need to be approved by us before they are published
                </li>
                <li>Authors of DIY guides will get incentivized to provide quality guides</li>
                <li>We will keep a clear, clean and fun UI</li>
                <li>Every guide will supply basic details of information like: <br><span class="pad"></span>
                The difficulty level and the time it takes</li>
            </ul>
        </section>
    </article>
</template>

<script>
    export default {
        name: 'creojam'
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    article {
        padding: 50px 160px;

        .header {
            text-align: center;
            padding-bottom: 40px;

            h1 {
                display: inline-block;
                margin-bottom: 20px;
                width: 220px;
                height: 75px;
                background-image: url('../assets/homepage/creojam.png');
            }

            a {
                color: $main-color;
                padding: 5px 16px;
            }

            ul {
                margin-top: 40px;
                padding: 20px 0;
                border-top: 2px solid $main-light;
                border-bottom: 2px solid $main-light;

                li {
                    display: inline-block;
                    padding: 0 50px;
                    border-right: 2px solid $main-light;
                }
            }
        }

        section {
            padding: 20px 0;

            h2 {
                color: $main-color;
                padding-bottom: 20px;
            }

            ul {
                padding: 20px 0;

                li {
                    &:before {    
                        content: "•";
                        color: $main-color;
                        padding-right: 7px;
                    }

                    .pad {
                        display: inline-block;
                        padding-right: 12px;
                    }
                }
            }
        }
    }
</style>
