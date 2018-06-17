<template>
    <div>
        <section class="intro">
            <div class="container">
                <div class="photo img"></div>
                <h1>Hi, I'm Adva</h1>
                <p>
                    I'm a data driven product and ux enthusiast.<br>
                    I produce elegant solutions with a<br>
                    human-centered design approach.<br>
                </p>
                <a v-smooth-scroll:projects class="arrow"></a>
            </div>
        </section>
        <section class="projects" id="projects">
            <h2>My Latest Projects</h2>
            <ul>
                <li class="creojam">
                    <div class="logo img"></div>
                    <p>
                        Creojam is a DIY guides and marketplace platform<br> 
                        and community that connects makers and businesses
                    </p>
                    <div class="project-image img"></div>
                    <router-link to="/creojam" class="button">Read More</router-link>
                </li>
                <li class="redis">
                    <div class="logo img"></div>
                    <p>
                        Redis Labs is the home of Redis, the world’s most popular<br> 
                        in-memory database, and commercial provider of Redis Enterprise
                    </p>
                    <div class="project-image img"></div>
                    <router-link to="/redis" class="button">Read More</router-link>
                </li>
            </ul>
        </section>
        <section class="skills">
            <h2>More Skills</h2>
            <ul>
                <li class="marketing">
                    <div class="header-image img"></div>
                    <h2>Web Marketing</h2>
                    <gallery v-bind:images="images.marketing"></gallery>
                </li>
                <li class="drawings">
                    <div class="header-image img"></div>
                    <h2>Drawings</h2>
                    <gallery v-bind:images="images.drawings"></gallery>
                </li>
                <li class="print">
                    <div class="header-image img"></div>
                    <h2>Print</h2>
                    <gallery v-bind:images="images.print"></gallery>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import gallery from '../components/gallery';

    export default {
        name: 'homepage',
        components: {
            'gallery': gallery
        },
        data: function () {
            return {
                images: {
                    marketing: [
                        { src: require('../assets/marketing/game-night.jpg') },
                        { src: require('../assets/marketing/hiring.jpg') },
                        { src: require('../assets/marketing/pentecost.jpg') },
                        { src: require('../assets/marketing/adidas.jpg') },
                        { src: require('../assets/marketing/wipes.jpg') },
                        { src: require('../assets/marketing/creojam.gif') }
                    ],
                    print: [
                        { src: require('../assets/print/booth.jpg') },
                        { src: require('../assets/print/store.jpg') },
                        { src: require('../assets/print/mockup.jpg') },
                        { src: require('../assets/print/calendar.gif') },
                        { src: '' },
                        { src: '' }
                    ],
                    drawings: [
                        { src: require('../assets/drawings/dance.jpg') },
                        { src: require('../assets/drawings/ear.jpg') },
                        { src: require('../assets/drawings/face.jpg') },
                        { src: require('../assets/drawings/amigo.jpg') },
                        { src: require('../assets/drawings/cheetah.jpg') },
                        { src: ''}
                    ]
                }
            };
        },
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    section {
        text-align: center;
        color: $main-color;

        > h2 {
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
            width: $default-width;
            display: inline-block;
            padding: 100px 0;

            li {
                margin-bottom: 100px;
                padding: 40px;
                background: linear-gradient(to right, $main-light, $white);
                position: relative;
                border-radius: 20px;

                &:last-child {
                    margin-bottom: 0;
                }

                .logo {
                    display: inline-block;
                    width: 220px;
                    height: 75px;
                }

                p {
                    padding: 20px 0 30px 0;
                }

                .button {
                    padding: 7px 16px;
                    border-radius: 18px;
                }

                .project-image {
                    position: absolute;
                    top: 10px;
                    right: 0;
                    height: 303px;
                    width: 513px;
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
            padding: 0;

            li {
                padding-top: 30px;
                text-align: center;
                border-top: 2px solid $main-light;

                &:first-child {
                    border-top: 0;
                }

                .header-image {
                    display: inline-block;
                    height: 137px;
                    width: 100px;

                }

                h2 {
                    padding: 0 0 20px 0;
                    border-bottom: 2px solid $main-light;
                }

                &.marketing {
                    .header-image {
                        background-image: url('../assets/homepage/icon-marketing.png');
                    }
                }

                &.print {
                    .header-image {
                        background-image: url('../assets/homepage/icon-print.png');
                    }
                }

                &.drawings {
                    .header-image {
                        background-image: url('../assets/homepage/icon-drawings.png');
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .projects {
            ul {
                text-align: center !important;
                width: auto !important;

                li {
                    max-width: 300px;
                    padding: 20px 10px !important;
                    background: $main-light !important;

                    .logo {
                        width: 55%;
                    }

                    .project-image {
                        display: inline-block !important;
                        position: static !important;
                        width: 250px !important;
                        height: 150px !important;
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }

    @media only screen and (max-height: 500px) {
        .intro {
            padding: 20px !important;

            .photo {
                width: 90px !important;
                height: 90px !important;
            }

            .arrow {
                margin-top: 20px !important;
            }
        }
    }
</style>
