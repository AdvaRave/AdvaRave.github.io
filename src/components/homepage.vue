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
                <li>
                    <div class="logo"></div>
                    <p>
                        Redis Description Redis Description Redis Description<br>
                        Redis Description
                    </p>
                    <router-link to="/redis">Read More</router-link>
                    <div class="project-image"></div>
                </li>
                <li>
                    <div class="logo"></div>
                    <p>
                        Redis Description Redis Description Redis Description<br>
                        Redis Description
                    </p>
                    <router-link to="/creojam">Read More</router-link>
                    <div class="project-image"></div>
                </li>
            </ul>
        </section>
        <section class="skills">
            <h2>More Skills</h2>
            <ul>
                <li>
                    <router-link to="/marketing">
                        <div></div>
                        <label>Web Marketing</label>
                    </router-link>
                </li>
                <li>
                    <router-link to="/drawings">
                        <div></div>
                        <label>Drawing</label>
                    </router-link>
                </li>
                <li>
                    <router-link to="/print">
                        <div></div>
                        <label>Print</label>
                    </router-link>
                </li>
            </ul>
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
            padding: 35px 0;
        }
    }

    .intro {
        padding: calc((100vh - 378px)/2) 0;
        height: calc(100vh - 52px);
        box-sizing: border-box;

        .container {
            .photo {
                display: inline-block;
                background: $main-color;
                width: 120px;
                height: 120px;
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
                margin: 20px 20%;
                padding: 40px;
                background: $main-light;
                position: relative;

                .logo {
                    display: inline-block;
                    width: 200px;
                    height: 50px;
                    background: $main-color;
                }

                p {
                    padding: 10px 0;
                }

                a {
                    border: 1px solid $main-color;
                    display: inline-block;
                    padding: 5px 10px;
                    border-radius: 15px;
                }

                .project-image {
                    position: absolute;
                    top: 10px;
                    right: 0;
                    height: 200px;
                    width: 200px;
                    background: $main-color;
                }
            }
        }
    }

    .skills {
        ul {
            li {
                display: inline-block;
                padding: 0 50px;

                a {
                    display: inline-block;

                    div {
                        display: inline-block;
                        width: 100px;
                        height: 100px;
                        background: $main-color;
                        margin-bottom: 10px;
                    }

                    label {
                        display: block;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .projects {
            ul {
                text-align: center !important;

                li {
                    padding: 10px !important;

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
                    padding: 20px 0 !important;
                }
            }
        }
    }
</style>
