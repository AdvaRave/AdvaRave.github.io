<template>
    <article>
        <h1 class="img"></h1>
        <section>
            <h2>Introduction</h2>
            <p>
                Redis Labs is the home of Redis, the world’s most popular in-memory database, and commercial provider of Redis Enterprise.<br>
                Redis Labs, consistently ranked as a leader in top analyst reports on NoSQL, in-memory databases, operational databases,<br>
                and database-as-a-service, is trusted by over 8,500 enterprise customers.

            </p>
        </section>
        <section>
            <h2>UI Redesign</h2>
            <p>
                The Redis Labs interface has major problems with the user flow, user experience and UI.<br>
                I analyzed the current flow and design and documented all the issues that can be improved.
            </p>
        </section>
        <section class="main-flow">
            <h2>The Main Flow</h2>
            <p>
                The main product flow is the subscription flow.<br>
                In that flow, the user selects a plan according to the cloud and features he or she wants, <br>
                after that - the user defines the database types and pays.
            </p>
            <selection-gallery v-bind:images="images.mainFlow"></selection-gallery>
        </section>
        <section>
             <h2>Issues</h2>
             <ul>
                <li>A lot of requirements on each step</li>
                <li>Broken user flows</li>
                <li>Unclear, busy, outdated UI</li>
                <li>Wrong UI solutions</li>
             </ul>
        </section>
        <section class="new-flow">
            <h2>The New Flow</h2>
            <selection-gallery v-bind:images="images.newFlow"></selection-gallery>
        </section>
        <section>
             <h2>Solutions</h2>
             <ul>
                <li>Less information on each page</li>
                <li>Clear UI</li>
                <li>One consecutive flow</li>
             </ul>
        </section>
        <section class="old-ui">
            <h2>The Old UI</h2>
            <p>
                Tap the gallery to watch the old UI and my analysis:
            </p>
            <selection-gallery v-bind:images="images.oldUI"></selection-gallery>
        </section>
        <section class="new-ui">
            <h2>The New UI</h2>
            <p>
                My guidelines for the new UI were:
            </p>
            <ul>
                <li>Consistent behaviour</li>
                <li>Differentiate primary actions from secondary actions</li>
                <li>The fewer fields, the better</li>
                <li>Group labels with their inputs</li>
                <li>Clear Instructions at every level</li>
                <li>Clear and updated UI</li>
                <li>Proper Field Size</li>
                <li>Focus on input Fields</li>
                <li>Keyboard friendly input fields</li>
                <li>Autoformatting</li>
             </ul>
             <p>
                Tap the gallery to watch the new UI:
             </p>
            <selection-gallery v-bind:images="images.newUI"></selection-gallery>
        </section>
    </article>
</template>

<script>
    import selectionGallery from '../components/selectionGallery';

    export default {
        name: 'redis',
        components: {
            'selection-gallery': selectionGallery
        },
        data: function () {
            return {
                images: {
                    mainFlow: [
                        {src: require('../assets/redis/main-flow.png')}
                    ],
                    newFlow: [
                        {src: require('../assets/redis/new-flow.png')}
                    ],
                    oldUI: [
                        {src: require('../assets/redis/old-ui/1.jpg')},
                        {src: require('../assets/redis/old-ui/2.jpg')},
                        {src: require('../assets/redis/old-ui/3.jpg')},
                        {src: require('../assets/redis/old-ui/4.jpg')},
                        {src: require('../assets/redis/old-ui/5.jpg')},
                        {src: require('../assets/redis/old-ui/6.jpg')},
                        {src: require('../assets/redis/old-ui/7.jpg')},
                        {src: require('../assets/redis/old-ui/8.jpg')},
                        {src: require('../assets/redis/old-ui/9.jpg')},
                        {src: require('../assets/redis/old-ui/10.jpg')}
                    ],
                    newUI: [
                        {src: require('../assets/redis/new-ui/1.jpg')},
                        {src: require('../assets/redis/new-ui/2.jpg')},
                        {src: require('../assets/redis/new-ui/3.jpg')},
                        {src: require('../assets/redis/new-ui/4.jpg')},
                        {src: require('../assets/redis/new-ui/5.jpg')},
                        {src: require('../assets/redis/new-ui/6.jpg')}
                    ]
                }
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    article {
        padding: 50px 160px;

        h1 {
            display: inline-block;
            width: 220px;
            height: 75px;
            background-image: url('../assets/homepage/redislabs.png');
        }

        section {
            padding: 20px 0;

            h2 {
                color: $main-color;
                padding-bottom: 20px;
            }

            p {
                
            }

            ul {
                padding: 20px 0;

                li {
                    &:before {    
                        content: "•";
                        color: $main-color;
                        padding-right: 7px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        article {
            padding: 40px;
        }
    }
</style>

<style lang="scss">
    .main-flow {
        .gallery {
            padding: 40px 0 0 0;

            section {
                width: 900px;

                .img {
                    width: 100%;
                    height: 450px;
                }
            }
        }
    }

    .new-flow {
        .gallery {
            padding: 20px 0 0 0;

            section {
                width: 900px;

                .img {
                    width: 100%;
                    height: 300px;
                }
            }
        }
    }

    .old-ui {
        .gallery {
            padding: 40px 0 0 0;

            section {
                width: 650px;

                div.img {
                    width: 100%;
                    height: 900px;
                }
            }
        }
    }

    .new-ui {
        .gallery {
            padding: 20px 0 0 0;

            section {
                width: 900px;

                div.img {
                    width: 100%;
                    height: 905px;
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .main-flow {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: calc(80vw / 2) !important;
                    }
                }
            }
        }

        .new-flow {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: calc(80vw / 3) !important;
                    }
                }
            }
        }

        .old-ui {
            .gallery { 
                section {
                    width: 80vw !important;

                    div.img {
                        height: calc(80vw / 1.5) !important;
                    }
                }
            }
        }

        .new-ui {
            .gallery { 
                section {
                    width: 80vw !important;

                    div.img {
                        height: 80vw !important;
                    }
                }
            }
        }
    }    
</style>