<template>
    <div>
        <section class="intro">
            <div class="photo"></div>
            <h1>Hi, I'm Adva</h1>
            <p>
                I'm a data driven product and ux enthusiast.<br>
                I produce elegant solutions with a<br>
                human-centered design approach.<br>
            </p>
            <div class="arrow"></div>
        </section>
        <section class="projects">
            <h2>My Latest Projects</h2>
            <ul>
                <li>
                    <div class="logo"></div>
                    <p>
                        Redis Description Redis Description Redis Description<br>
                        Redis Description
                    </p>
                    <router-link to="/">Read More</router-link>
                    <div class="project-image"></div>
                </li>
                <li>
                    <div class="logo"></div>
                    <p>
                        Redis Description Redis Description Redis Description<br>
                        Redis Description
                    </p>
                    <router-link to="/">Read More</router-link>
                    <div class="project-image"></div>
                </li>
            </ul>
        </section>
        <section class="skills">
            <h2>More Skills</h2>
            <ul>
                <li>
                    <router-link to="/">
                        <div></div>
                        <label>Web Marketing</label>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <div></div>
                        <label>Drawing</label>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
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
        padding: 50px 0;

        .photo {
            display: inline-block;
            background: $main-color;
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }

        h1 {
            padding: 10px 0;
        }

        .arrow {
            display: inline-block;
            margin-top: 20px;
            width: 0; 
            height: 0; 
            border-left: 20px solid transparent;
            border-right: 20px solid transparent; 
            border-top: 30px solid $main-color;
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
                    div {
                        width: 100px;
                        height: 100px;
                        background: $main-color;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
</style>
