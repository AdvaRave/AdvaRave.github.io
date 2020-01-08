<template>
    <article>
        <div class="cover">
            <a v-smooth-scroll:overview><i class="fas fa-chevron-down"></i></a>
        </div>
        <div class="nav" :class="{fixed: navFixed}">
            <ul>
                <li><a><i class="fas fa-arrow-left"></i>Back to all Projects</a></li>
                <li><a v-smooth-scroll:overview>Overview</a></li>
                <li><a v-smooth-scroll:research>Market Research</a></li>
                <li><a v-smooth-scroll:personas>Personas</a></li>
                <li><a v-smooth-scroll:sitemap>Sitemap</a></li>
                <li><a v-smooth-scroll:ui>Product UI</a></li>
                <li><a v-smooth-scroll:testing>User Testing</a></li>
            </ul>
        </div>
        <div class="content">
            <div class="main-section" id="overview">
                <h2>Overview</h2>
                <section>
                    <h2>Introduction</h2>
                    <p>
                        Creojam is a DIY guides and marketplace platform and community that connects makers and businesses,<br>
                        by giving makers who want to create something the resources they need:<br>
                        Guides written by other makers, connected to the materials and tools provided by reliable businesses in a single convenient list.
                    </p>
                </section>
                <section class="screens">
                    <h2>Product Preview</h2>
                    <selection-gallery v-bind:images="images.screens"></selection-gallery>   
                </section>
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
            </div>

            <div class="main-section" id="research">
                <h2>Research</h2>
                <section class="market">
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
                <div class="horizontal">
                    <section class="our-users left">
                        <h2>Ours Users - The Average Maker (DIYer)</h2>
                        <ul>
                            <li><strong>52%</strong> Are between the ages 24 to 44</li>
                            <li><strong>95%</strong> Live in a home that they own</li>
                            <li><strong>75%</strong> Are married</li>
                            <li><strong>87%</strong> Have children that live with them</li>
                            <li><strong>43%</strong> make between $50K and $90K per year</li>
                        </ul>
                    </section>
                    <section class="frustration right">
                        <h2>Biggest Frustration from DIY Websites</h2>
                        <ul>
                            <li>Poorly written content</li>
                            <li>Availability issues</li>
                            <li>Navigation issues</li>
                            <li>Online reviews issues</li>
                            <li>Websites quality issues</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div class="main-section" id="personas">
                <h2>Personas</h2>
                <section class="personas horizontal">
                    <h2>Persona Types</h2>
                    <div class="left">
                        <ul>
                            <li class="michael">
                                <h5>Primary Persona</h5>
                                <p>
                                    <b>Michael</b><br>
                                    A Maker (Hobbie)<br>
                                    <u>Looking for:</u><br>
                                    Arduino tutorials<br>
                                </p>
                                <div class="img"></div>
                            </li>
                            <li class="david">
                                <h5>Secondary Persona</h5>
                                <p>
                                    <b>David</b><br>
                                    A dad (Time Consumer)<br>
                                    <u>Looking for:</u><br>
                                    Kids crafts<br>
                                </p>
                                <div class="img"></div>
                            </li>
                        </ul>
                        <label>Casual Users</label>
                    </div>
                    <div class="right">
                        <ul>
                            <li class="tamara">
                                <h5>Primary Persona</h5>
                                <p>
                                    <b>Tamara</b><br>
                                    Blogger<br>
                                    <u>Looking for:</u><br>
                                    Customers<br>
                                </p>
                                <div class="img"></div>
                            </li>
                            <li class="blitsy">
                                <h5>Secondary Persona</h5>
                                <p>
                                    <b>Blitsy</b><br>
                                    Arts and crafts shop<br>
                                    <u>Looking for:</u><br>
                                    Blog traffic and SEO<br>
                                </p>
                                <div class="img"></div>
                            </li>
                        </ul>
                        <label>Business Users</label>
                    </div>
                </section>
                <section id="primary-persona" class="primary-persona" v-bind:class="{expanded: personaExpanded}">
                    <h2>Our Primary Persona</h2>
                    <div class="horizontal">
                        <section class="left">
                            <h6>Basic Details</h6>
                            <p>
                                <u>Name</u>: Tamara Green<br>
                                <u>Occupation</u>: Blogger<br>
                                <u>Age</u>: 33<br>
                                <u>Status</u>: Married + 2<br>
                                <u>Location</u>: Richmond, Virginia
                            </p>
                        </section>
                        <div class="img right"></div>
                        <section class="right">
                            <h6>Personality</h6>
                            <ul>
                                <li>Extrovert</li>
                                <li>Create</li>
                                <li>Energetic</li>
                            </ul>
                        </section>
                    </div>
                    <a class="see-more" v-smooth-scroll:primary-persona v-on:click="personaExpanded=!personaExpanded">See {{personaExpanded ? 'Less': 'More'}}...</a>
                    <section class="left">
                        <h6>Bio</h6>
                        <p>
                            A DIY Blogger, had written three books, designed products (and show houses), and started a Youtube channel.<br>
                            She had bought her first house in early 2009 just months after getting married.<br>
                            Tamara renovated her home within a budget, documented it and shared her DIY adventures on her blog,<br>in hope that others can learn from her successes and failures.<br>
                            She also loves to make DIY with her kids, and always looks for new inspirations. <br>
                            She has been mentioned in DIY Magazines like Apartment Therapy, in The Washington Post and Old House Journal.
                        </p>
                    </section>
                    <div class="horizontal">
                        <section class="left">
                            <h6>Motivations</h6>
                            <ul>
                                <li>Loves social media</li>
                                <li>Autodidact</li>
                                <li>Curious</li>
                                <li>Social</li>
                            </ul>
                        </section>
                        <section class="right">
                            <h6>Frustrations</h6>
                            <ul>
                                <li>Maintaining her blog</li>
                                <li>Following web tutorials with poor content</li>
                                <li>Competing with other blogs</li>
                            </ul>
                        </section>
                    </div>
                    <div class="horizontal">
                        <section class="left">
                            <h6>Goals</h6>
                            <ul>
                                <li>Keeping her target audience updated</li>
                                <li>Staying relevant</li>
                                <li>Getting more blog traffic</li>
                                <li>Achieving a cheap and effective home</li>
                            </ul>
                        </section>
                        <section class="expertise right">
                            <h6>Technology Expertise</h6>
                            <ul>
                                <li><span>Software</span><span class="meter v-70"></span></li>
                                <li><span>Mobile Apps</span><span class="meter v-85"></span></li>
                                <li><span>Social Networks</span><span class="meter v-100"></span></li>
                            </ul>
                        </section>
                    </div>
                    <section>
                        <h6>Craft Types</h6>
                        <ul>
                            <li>Home renovations</li>
                            <li>Furniture guilding</li>
                        </ul>
                    </section>
                </section>
            </div>

            <div class="main-section" id="sitemap">
                <h2>Sitemap</h2>
                <section class="sitemap">
                    <h2>Sitemap</h2>
                    <selection-gallery v-bind:images="images.sitemap"></selection-gallery>
                </section>
                <section>
                    <h2>The Implementation</h2>
                    <p>First, we created a clear roadmap, with deadlines and goals.<br> 
                        We created an MVP that does not look like one or works like one - tt is a MVP that works and feels like a final product.<br>
                        We priorotized the features according to our time and resources. Then we defined them based on our research 
                        and translated them into wireframes.<br>
                        We found a lot of creative solutions based on our skills and intiative and not money. 
                    </p>
                </section>
            </div>

            <div class="main-section" id="ui">
                <h2>UI</h2>
                <section class="wireframes">
                    <h2>Wireframes</h2>
                    <p>
                    I created wireframes based on our research and competitor websites analysis.<br>
                    I documented all of our likes and dislikes from our competitor user flows and features behaviour.<br>
                    I drew the wireframes by hand to all of the site. The most complicated page was our “Create a guide” page.<br>
                    This is a page that requires a lot of efforts and cooperation from the user. We worked very hard to make this page user friendly.<br>
                    There are clear instructions and the user gets notified the moment an error occured.<br>
                    There are also versatile ways to edit the guide in order to keep the process easy.<br><br>
                    Click the image to enlarge:<br><br>
                    </p>
                    <small class="blue">Changes that were made after user testing are marked in blue</small>
                    <selection-gallery v-bind:images="images.wireframes"></selection-gallery>
                </section>
                <section class="ui-guidelines">
                    <h2>UI Guidelines</h2>
                    <p>
                        I created guidelines which were the base for my design.<br>
                        I created a UI that supports our guidelines and our values. I looked for the right UI solutions to every problem. 
                    </p>
                    <selection-gallery v-bind:images="images.uiGuidelines"></selection-gallery>
                </section>
            </div>
            
            <div class="main-section" id="testing">
                <h2>User Testing</h2>
                <section class="user-testing">
                    <h2>User Testing</h2>
                    <p>
                        We did remote usability testing of the product with Hotjar and Google analytics in order to improve the product and matched it to the user behaviour.<br>
                        We reviewed heat-maps, watched user sessions online, followed clicks and scrolls, and checked our user goals.
                        <br>After that we improved the product according to the tests results.
                    </p>
                    <selection-gallery v-bind:images="images.userTesting"></selection-gallery>
                </section>
            </div>

            <div class="end"><a class="button" href="https://www.creojam.com" target="_blank">Take me to Creojam</a></div>
        </div>
    </article>
</template>

<script>
    import selectionGallery from '../components/selectionGallery';

    export default {
        name: 'creojam',
        components: {
            'selection-gallery': selectionGallery
        },
        mounted: function() {
            var that = this;
            window.addEventListener('scroll', function() {
                that.navFixed = document.scrollingElement.scrollTop > (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 1.1);
            });
        },
        data: function () {
            return {
                navFixed: false,
                personaExpanded: false,
                images: {
                    sitemap: [
                        {src: require('../assets/creojam/sitemap.png')}
                    ],
                    wireframes: [
                        {src: require('../assets/creojam/wireframes/0.png')},
                        {src: require('../assets/creojam/wireframes/1.jpg')},
                        {src: require('../assets/creojam/wireframes/2.jpg')},
                        {src: require('../assets/creojam/wireframes/3.jpg')},
                        {src: require('../assets/creojam/wireframes/4.jpg')},
                        {src: require('../assets/creojam/wireframes/5.jpg')},
                        {src: require('../assets/creojam/wireframes/11.jpg')},
                        {src: require('../assets/creojam/wireframes/13.jpg')},
                        {src: require('../assets/creojam/wireframes/a.jpg')},
                        {src: require('../assets/creojam/wireframes/b.jpg')},
                        {src: require('../assets/creojam/wireframes/c.jpg')},
                        {src: require('../assets/creojam/wireframes/d.jpg')},
                        {src: require('../assets/creojam/wireframes/e.jpg')},
                        {src: require('../assets/creojam/wireframes/f.jpg')},
                        {src: require('../assets/creojam/wireframes/g.jpg')},
                        {src: require('../assets/creojam/wireframes/h.jpg')},
                        {src: require('../assets/creojam/wireframes/i.jpg')},
                        {src: require('../assets/creojam/wireframes/j.jpg')},
                        {src: require('../assets/creojam/wireframes/k.jpg')}
                    ],
                    uiGuidelines: [
                        {src: require('../assets/creojam/ui-guidelines.jpg')}
                    ],
                    userTesting: [
                        {src: require('../assets/creojam/user-testing.jpg')},
                        {src: require('../assets/creojam/analytics.jpg')}
                    ],
                    screens: [
                        {src: require('../assets/creojam/preview/1.jpg')},
                        {src: require('../assets/creojam/preview/2.jpg')},
                        {src: require('../assets/creojam/preview/3.jpg')},
                        {src: require('../assets/creojam/preview/4.jpg')},
                        {src: require('../assets/creojam/preview/5.jpg')},
                        {src: require('../assets/creojam/preview/6.png')}
                    ]
                }
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    article {
        text-align: left;

        .cover {
            background: $creo-blue;
            height: calc(100vh - 53px);
            position: relative;
            z-index: 0;
            margin-bottom: 40px;

            > a {
                animation: move-up-down 1s linear infinite;
                position: absolute;
                display: inline-block;
                bottom: 50px;
                left: calc((100% - 57px) / 2);
                color: $main-color;
                padding: 15px 20px;
                background: $white;
                font-size: 20px;
                box-shadow: 0 2px 10px 0 $border-gray;
                border-radius: 50%;
            }

            @keyframes move-up-down {
                0%, 100% {
                    bottom: 50px;
                }
                50% {
                    bottom: 75px;
                }
            }
        }

        .nav {
            float: left;
            z-index: -1;

            &.fixed {
                position: fixed;
                top: 40px;
                left: 0;
            }

            ul {
                padding: 0 0 0 40px;

                li {
                    display: block;
                    padding: 10px 0;

                    &:first-child {
                        color: $main-color;
                        padding-bottom: 20px;

                        i {
                            margin-right: 5px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        .content {
            float: right;
            text-align: center;
            padding: 0 20px;

            .button {
                border-color: $creo-blue;
            }

            .header {
                text-align: center;
                padding-bottom: 40px;

                h1 {
                    display: inline-block;
                    margin-bottom: 20px;
                    width: 220px;
                    height: 75px;
                    background-image: url('../assets/creojam/creojam.png');
                }

                a {
                    color: $creo-blue;
                    padding: 5px 16px;
                }
            }

            .blue {
                &:after {
                    content: " ";
                    background: $creo-blue;
                    width: 27px;
                    height: 13px;
                    margin-left: 10px;
                    display: inline-block;
                    position: relative;
                    top: 2px;
                }
            }

            .horizontal {
                overflow: hidden;
                clear: both;
            }

            .main-section {
                &:after {
                    display: block;
                    content: "...";
                    padding: 40px 0;
                    font-size: 40px;
                    letter-spacing: 15px;
                }

                > h2 {
                    display: inline-block;
                    font-weight: 700;
                    font-size: 24px;
                    
                    &:after {
                        content: "";
                        display: block;
                        border-bottom: 1px solid $text-default;
                        width: 40px;
                        height: 15px;
                        margin-left: calc((100% - 40px) / 2);
                    }
                }
            }

            .right {
                display: inline-block;
                float: right;
            }

            .left {       
                display: inline-block;
                float: left;
            }

            section {
                padding-top: 20px;
                text-align: left;

                &:last-child {
                    padding-bottom: 0;
                }

                h2 {
                    padding-bottom: 20px;
                    font-size: 20px;

                    &:before {
                        content: "";
                        background: #2aa8de;
                        display: inline-block;
                        width: 7px;
                        height: 28px;
                        margin-right: 15px;
                        vertical-align: middle;
                    }
                }

                ul {
                    padding: 20px 0;

                    li {
                        &:before {    
                            content: "•";
                            color: $creo-blue;
                            padding-right: 7px;
                        }

                        .pad {
                            display: inline-block;
                            padding-right: 12px;
                        }
                    }
                }

                &.market {
                    ul {
                        li {
                            display:inline-block;
                            padding-right: 50px;

                            &:before {
                                content: "";
                                padding: 0;
                            }

                            strong {
                                display: block;
                                font-size: 50px;
                            }
                        }
                    }
                }

                &.our-users {
                    ul {
                        li {
                            strong {
                                font-size: 18px;
                                padding-right: 2px;
                            }
                        }
                    } 
                }

                &.personas {
                    > div {
                        label {
                            display: block;
                            padding-top: 10px;
                        }
                    }

                    ul {
                        display: inline-block;
                        border-bottom: 2px solid $creo-blue-light;

                        li {
                            display: inline-block;
                            padding-right: 120px;

                            &:last-child {
                                padding-right: 0;
                            }

                            &:before {
                                content: "";
                                padding: 0;
                            }

                            h5 {
                                font-size: 18px;
                            }

                            p {
                                padding: 20px 0;
                                line-height: 36px;
                            }

                            .img {
                                width: 134px;
                                height: 134px;
                                border-radius: 50%;
                            }

                            &.michael {
                                .img {
                                    background-image: url('../assets/creojam/Michael.png');
                                }
                            }

                            &.david {
                                .img {
                                    background-image: url('../assets/creojam/David.png');
                                }
                            }

                            &.blitsy {
                                .img {
                                    background-image: url('../assets/creojam/Blitsy.png');
                                }
                            }

                            &.tamara {
                                .img {
                                    background-image: url('../assets/creojam/Tamara.png');
                                }
                            }
                        }
                    }
                }

                &.primary-persona {
                    border: 2px solid $creo-blue;
                    border-radius: 15px;
                    padding: 40px 200px 40px 40px;
                    margin-top: 20px;
                    height: 250px;
                    overflow: hidden;
                    position: relative;

                    h6 {
                        font-size: 18px;
                    }

                    p {
                        padding-top: 10px;
                    }

                    &.expanded {
                        height: auto;

                        .see-more {
                            position: absolute;
                            left: 40px;
                            bottom: 15px;
                        }
                    }

                    .see-more {
                        display: inline-block;
                        color: $creo-blue;
                        font-size: 18px;
                        padding-bottom: 10px;

                        &:hover {
                            font-weight: 700;
                        }
                    }

                    .expertise {
                        padding-right: 10px;

                        span {
                            display: inline-block;
                            width: 140px;
                        }

                        .meter {
                            background: $light-gray;
                            border-radius: 3px;
                            width: 140px;
                            height: 15px;
                            position: relative;

                            &:after {
                                position: absolute;
                                left: 0;
                                top: 0;
                                content: " ";
                                height: 15px;
                                display: inline-block;
                                background: $creo-blue;
                                border-radius: 3px;
                            }

                            &.v-70 {    
                                &:after {
                                    width: 100px;
                                }
                            }

                            &.v-85 {    
                                &:after {
                                    width: 120px;
                                }
                            }

                            &.v-100 {    
                                &:after {
                                    width: 140px;
                                }
                            }
                        }
                    }

                    .img.right {
                        background-image: url('../assets/creojam/Tamara.png');
                        width: 134px;
                        height: 134px;
                        margin-left: 85px;
                    }
                }
            }

            .end {
                text-align: center;

                a {
                    color: $creo-blue;
                    padding: 5px 16px;
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        article {
            padding: 10% !important;

            .horizontal {
                .right, .left {
                    display: block !important;
                    float: none !important; 
                }
            }

            .primary-persona {
                padding: 10% !important;
                height: 600px !important;

                .img {
                    margin: 20px 0 !important;
                }

                &.expanded {
                    height: auto !important;
                }
            }

            .personas {
                .right, .left {
                    text-align: center !important;
                }
                
                ul {
                    li {
                        display: block !important;
                        padding: 20px 0 !important;
                        text-align: center !important;

                        .img {
                            padding: 0 !important;
                            display: inline-block !important;
                        }
                    }
                }
            }

            .market {
                ul {
                    li {
                        display: block !important;
                        padding: 20px 0 !important;
                    }
                }
            }
        }
    }

</style>

<style lang="scss">
    @import "../styles/globals.scss";

    .wireframes {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            section {
                width: 800px;

                ul {
                    text-align: left;
                }

                div.img {
                    background-size: cover;
                    background-position: top;
                    width: 100%;
                    height: 800px;
                }

                .fa {
                    color: $creo-blue;
                }
            }
        }
    }

    .ui-guidelines {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            section {
                width: 1024px;

                .img {
                    width: 100%;
                    height: 581px;
                }
            }
        }
    }

    .sitemap {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            section {
                width: 1024px;

                .img {
                    width: 100%;
                    height: 300px;
                }
            }
        }
    }

    .screens {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            section {
                width: 800px;

                ul {
                    text-align: left;
                }

                div.img {
                    background-size: cover;
                    background-position: top;
                    width: 100%;
                    height: 800px;
                }

                .fa {
                    color: $creo-blue;
                }
            }
        }
    }

    .user-testing {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            ul {
                text-align: left;
            }

            section {
                width: 881px;

                div.img {
                    width: 100%;
                    height: 418px;
                }

                .fa {
                    color: $creo-blue;
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .wireframes {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: 80vw !important;
                    }
                }
            }
        }

        .screens {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: 80vw !important;
                    }
                }
            }
        }

        .sitemap {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: calc(80vw / 3.5) !important;
                    }
                }
            }
        }

        .ui-guidelines {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: calc(80vw / 1.76) !important;
                    }
                }
            }
        }

        .user-testing {
            .gallery { 
                section {
                    width: 80vw !important;

                    div.img {
                        height: calc(80vw / 2) !important;
                    }
                }
            }
        }
    }    
</style>
