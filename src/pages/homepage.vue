<template>
    <div>
        <section class="intro">
            <div class="container">
                <div class="photo"></div>
                <h1>Hi, I'm Adva</h1>
                <p>
                    I'm a data driven product and ux enthusiast.<br>
                    I produce elegant solutions with a<br>
                    human-centered design approach.<br>
                </p>
                <a href="#projects" v-smooth-scroll class="arrow"></a>
            </div>
        </section>
        <section class="projects" id="projects">
            <h2>My Latest Projects</h2>
            <ul>
                <li class="creojam">
                    <div class="logo"></div>
                    <p>
                        The best market for makers, connecting makers<br>and businesses.
                    </p>
                    <router-link to="/creojam" class="button">Read More</router-link>
                    <div class="project-image"></div>
                </li>
                <li class="redis">
                    <div class="logo"></div>
                    <p>
                        Redis Description Redis Description Redis Description<br>
                        Redis Description
                    </p>
                    <router-link to="/redis" class="button">Read More</router-link>
                    <div class="project-image"></div>
                </li>
            </ul>
        </section>
        <section class="skills">
            <h2>More Skills</h2>
            <ul>
                <li class="marketing">
                    <router-link to="/marketing">
                        <div></div>
                        <label>Web Marketing</label>
                    </router-link>
                </li>
                <li class="drawings">
                    <router-link to="/drawings">
                        <div></div>
                        <label>Drawing</label>
                    </router-link>
                </li>
                <li class="print">
                    <router-link to="/print">
                        <div></div>
                        <label>Print</label>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="contact" id="contact">
            <h2>Contact Me</h2>
            <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
            </p>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'homepage'
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    section {
        text-align: center;
        color: $main-color;

        h2 {
            display: block;
            background: $main-light;
            padding: 10px;
        }

        ul {
            padding: 60px 0;
        }
    }

    .intro {
        padding: calc((100vh - 438px)/2) 0;
        height: calc(100vh - 52px);
        box-sizing: border-box;

        .container {
            .photo {
                display: inline-block;
                background-image: url('../assets/homepage/portrait.png');
                background-size: cover;
                width: 180px;
                height: 180px;
                border-radius: 50%;
            }

            h1 {
                padding: 10px 0;
            }

            .arrow {
                animation: move-up-down 1s linear infinite;
                display: inline-block;
                margin-top: 50px;
                position: relative;
                width: 0; 
                height: 0; 
                border-left: 16px solid transparent;
                border-right: 16px solid transparent; 
                border-top: 26px solid $main-color;
            }

            @keyframes move-up-down {
                0%, 100% {
                    top: 0;
                }
                50% {
                    top: 15px;
                }
            }
        }  
    }

    .projects {
        ul {
            text-align: left;

            li {
                margin: 0 20% 60px 20%;
                padding: 40px;
                background: linear-gradient(to right, $main-light, $white);
                position: relative;
                border-radius: 20px;

                &:last-child {
                    margin-bottom: 0;
                }

                .logo {
                    display: inline-block;
                    width: 280px;
                    height: 95px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center center;
                }

                p {
                    padding: 10px 0;
                }

                .project-image {
                    position: absolute;
                    top: 10px;
                    right: 0;
                    height: 303px;
                    width: 513px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center center;
                }

                &.creojam {
                    .logo {
                        background-image: url('../assets/homepage/creojam.png');
                    }

                    .project-image {
                        background-image: url('../assets/homepage/creojam-mockup.png');
                    }
                }

                &.redis {
                    .logo {
                        background-image: url('../assets/homepage/redislabs.png');
                    }

                    .project-image {
                        background-image: url('../assets/homepage/redislabs-mockup.png');
                    }
                }
            }
        }
    }

    .skills {
        ul {
            li {
                display: inline-block;
                padding: 0 80px;

                a {
                    display: inline-block;

                    div {
                        display: inline-block;
                        width: 137px;
                        height: 100px;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center center;
                        margin-bottom: 10px;
                    }

                    label {
                        display: block;
                    }
                }

                &.drawings {
                    a div {
                        background-image: url('../assets/homepage/icon-drawings.png');
                    }
                }

                &.print {
                    a div {
                        background-image: url('../assets/homepage/icon-print.png');
                    }
                }

                &.marketing {
                    a div {
                        background-image: url('../assets/homepage/icon-marketing.png');
                    }
                }
            }
        }
    }

    .contact {
        p {
            padding: 50px 20%;
        }
    }

    @media only screen and (max-width: 1024px) {
        .projects {
            ul {
                text-align: center !important;

                li {
                    padding: 20px 10px !important;
                    background: $main-light !important;

                    .logo {
                        width: 80%;
                    }

                    .project-image {
                        display: none !important;
                    }
                }
            }
        }

        .skills {
            ul {
                li {
                    display: block !important;
                    padding: 40px 0 !important;
                }
            }
        }
    }
</style>
