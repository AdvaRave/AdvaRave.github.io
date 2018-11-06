<template>
    <article>
        <div class="header">
            <h1 class="img"></h1>
            <div><a class="button" href="https://myobligo.com/" target="_blank">Take me to Obligo</a></div>
            <ul>
                <li><a v-smooth-scroll:m-research>Market Research</a></li>
                <li><a v-smooth-scroll:personas>Personas</a></li>
                <li><a v-smooth-scroll:management>Management</a></li>
                <li><a v-smooth-scroll:tenant>Tenant</a></li>
                <li><a v-smooth-scroll:marketing>Marketing</a></li>
            </ul>
        </div>
        <section>
            <h2>NYC Rental Market</h2>
            <p>
                Today, In order to rent an apartment in NYC, the tenant transfers a security deposit to the landlord.<br>
                The purpose is to secure the property.<br>
                The landlord opens a special account for every tenant and can't use the money until the end of the lease.<br>
                The landlord can claim some of the money, only when the lease ends, and only in case there's a damage to the property.<br>
                Meanwhile nobody can access the money.
            </p>
        </section>
        <section>
            <h2>Solution</h2>
            <p>
                Obligo allows tenants to provide a billing authorization as an alternative to security deposits to landlords.<br> 
                They can keep their money in thier on account, while the landlord is allowed to bill the tenant for damages in a limited and secure way.
            </p>
        </section>
        <section class="m-research" id="m-research">
            <h2>Market Research</h2>
            <p>
                I checked out our competition, looking at Hi-Tech companies in the real-estate field and the services they offer.
            </p>
            <selection-gallery v-bind:images="images.marketResearch"></selection-gallery> 
        </section>
        <section class="personas horizontal" id="personas">
            <h2>Persona Types</h2>
            <ul>
                <li class="viktoriya">
                    <h5>Primary Persona</h5>
                    <p>
                        <b>Viktoriya</b>
                        A leasing agent
                    </p>
                    <div class="img"></div>
                </li>
                <li class="yehoshua">
                    <h5>Secondary Persona</h5>
                    <p>
                        <b>Yehoshua</b>
                        An accountant
                    </p>
                    <div class="img"></div>
                </li>
                <li class="david">
                    <h5>Secondary Persona</h5>
                    <p>
                        <b>David</b>
                        A tenant
                    </p>
                    <div class="img"></div>
                </li>
                <li class="bryce">
                    <h5>Secondary Persona</h5>
                    <p>
                        <b>Bryce</b>
                        A real estate investor
                    </p>
                    <div class="img"></div>
                </li>
            </ul>
        </section>
        <section id="primary-persona" class="primary-persona" v-bind:class="{expanded: personaExpanded}">
            <h2>Our Primary Persona</h2>
            <div class="horizontal">
                <section class="left">
                    <h6>Basic Details</h6>
                    <p>
                        <u>Name</u>: Viktoriya Vadde<br>
                        <u>Age</u>: 36<br>
                        <u>Status</u>: Married<br>
                        <u>Occupation</u>: Leasing Agent<br>
                        <u>Company</u>: Urby<br>
                        <u>Location</u>: New York, New York
                    </p>
                </section>
                <div class="img right"></div>
                <section class="right">
                    <h6>Personality</h6>
                    <ul>
                        <li>Extrovert</li>
                        <li>Organized</li>
                        <li>Multi-Tasker</li>
                    </ul>
                </section>
            </div>
            <a class="see-more" v-smooth-scroll:primary-persona v-on:click="personaExpanded=!personaExpanded">See {{personaExpanded ? 'Less': 'More'}}...</a>
            <section class="left">
                <h6>Bio</h6>
                <p>
                    4 years experience in real estate. Working for multiple companies at the same time.<br>
                    Analyzing market trends to determine competitive market prices; Providing real estate market advice to prospective clients; <br>
                    Directing real estate deals from the initial contact with clients and financial assessment, negotiation, processing and successfully closing deal transactions; Developing relationships and building rapport with clients.<br>
                    She is always available on their phone/email.
                </p>
            </section>
            <section class="quotes left">
                <h6>Quotes</h6>
                <p>
                    "With an extensive history in customer service, I am first to admit I really like working with people.<br>
                    It’s this fondness for humanity that makes me a standout in the field of real estate.<br>
                    I am hard working, easy going and extremely friendly but it’s helping others that really puts a smile on my face.<br>
                    For me, it’s all about building trust and helping clients with their real estate needs."
                </p>
            </section>
            <section class="left">
                <h6>Goals</h6>
                <ul>
                    <li>Sell as much as she can</li>
                    <li>Maintain client base</li>
                    <li>Acquire referrals from her clients</li>
                    <li>She seeks to understand what the customer’s wants, needs, and their goals.</li>
                    <li>She truly believes her product and service will help the customer</li>
                </ul>
            </section>
            <section class="left">
                <h6>Pain Points</h6>
                <ul>
                    <li>Afraid that the tenant won’t be able to pay his rent</li>
                    <li>She knows that the tenants are tired of her speeches</li>
                    <li>Potential tenants do not always appreciate that she must sell in order to earn her salary</li>
                    <li>Always gets interrupt while at work</li>
                    <li>She splits her commissions with brokers</li>
                    <li>Needs to deal with a lot of different bank accounts</li>
                    <li>She doesn’t trust the tenant</li>
                    <li>She doesn’t want to spend time filling forms</li>
                </ul>
            </section>
            <div class="horizontal">
                 <section class="left">
                    <h6>Motivations</h6>
                    <ul>
                        <li>Increase Sales</li>
                        <li>Maintain landlords and tenants happiness</li>
                        <li>Use her time efficiently</li>
                        <li>Earn comiision</li>
                    </ul>
                </section>
                 <section class="expertise right">
                    <h6>Technology Expertise</h6>
                    <ul>
                        <li><span>Software</span><span class="meter v-85"></span></li>
                        <li><span>Mobile Apps</span><span class="meter v-70"></span></li>
                        <li><span>Social Networks</span><span class="meter v-85"></span></li>
                    </ul>
                </section>
            </div>
        </section>
        <section class="management" id="management">
            <h2>Management Platform</h2>
            <p>
            </p>
            <selection-gallery v-bind:images="images.management"></selection-gallery>
        </section>
        <section class="tenant" id="tenant">
            <h2>Tenant Platform</h2>
            <p>
            </p>
            <selection-gallery v-bind:images="images.tenant"></selection-gallery>
        </section>
        <section class="marketing" id="marketing">
            <h2>Marketing</h2>
            <p>
            </p>
            <selection-gallery v-bind:images="images.marketing"></selection-gallery>
        </section>
    </article>
</template>

<script>
    import selectionGallery from '../components/selectionGallery';
    
    export default {
        name: 'obligo',
        components: {
            'selection-gallery': selectionGallery
        },
        data: function () {
            return {
                personaExpanded: false,
                images: {
                    marketResearch: [
                        {src: require('../assets/obligo/m-research.jpg')}
                    ],
                    marketing: [
                        {src: require('../assets/obligo/marketing/1.png')},
                        {src: require('../assets/obligo/marketing/2.png')},
                        {src: require('../assets/obligo/marketing/3.png')},
                        {src: require('../assets/obligo/marketing/4.png')}
                    ],
                    management: [
                        {src: require('../assets/obligo/management/1.png')},
                        {src: require('../assets/obligo/management/2.png')},
                        {src: require('../assets/obligo/management/3.png')},
                        {src: require('../assets/obligo/management/4.png')},
                        {src: require('../assets/obligo/management/5.png')},
                        {src: require('../assets/obligo/management/6.png')},
                        {src: require('../assets/obligo/management/7.png')}
                    ],
                    tenant: [
                        {src: require('../assets/obligo/tenant/1.png')},
                        {src: require('../assets/obligo/tenant/2.png')},
                        {src: require('../assets/obligo/tenant/3.png')},
                        {src: require('../assets/obligo/tenant/4.png')},
                        {src: require('../assets/obligo/tenant/5.png')},
                        {src: require('../assets/obligo/tenant/6.png')},
                        {src: require('../assets/obligo/tenant/7.png')},
                        {src: require('../assets/obligo/tenant/8.png')},
                        {src: require('../assets/obligo/tenant/9.png')},
                        {src: require('../assets/obligo/tenant/10.png')},
                        {src: require('../assets/obligo/tenant/11.png')},
                        {src: require('../assets/obligo/tenant/12.png')},
                        {src: require('../assets/obligo/tenant/13.png')},
                        {src: require('../assets/obligo/tenant/14.png')},
                        {src: require('../assets/obligo/tenant/15.png')},
                        {src: require('../assets/obligo/tenant/16.png')},
                        {src: require('../assets/obligo/tenant/17.png')},
                        {src: require('../assets/obligo/tenant/18.png')},
                        {src: require('../assets/obligo/tenant/19.png')}
                    ],
                }
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    article {
        display: inline-block;
        max-width: $page-width;
        text-align: left;
        padding: 50px 0;

        .button {
            border-color: $obligo-pink;
        }

        .header {
            text-align: center;
            padding-bottom: 40px;

            h1 {
                display: inline-block;
                margin-bottom: 20px;
                width: 220px;
                height: 75px;
                background-image: url('../assets/obligo/obligo.png');
            }

            a {
                color: $obligo-pink;
                padding: 5px 16px;
            }

            ul {
                margin-top: 40px;
                padding: 20px 0;
                border-top: 2px solid $obligo-pink-light;
                border-bottom: 2px solid $obligo-pink-light;

                li {
                    display: inline-block;
                    padding: 0 40px;
                    border-right: 2px solid $obligo-pink-light;

                    &:last-child {
                        border-right: 0;
                    }
                }
            }
        }

        .horizontal {
            overflow: hidden;
            clear: both;
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
            padding: 20px 0;

            h2 {
                color: $obligo-pink;
                padding-bottom: 20px;
            }

            ul {
                padding: 20px 0;

                li {
                    &:before {    
                        content: "•";
                        color: $obligo-pink;
                        padding-right: 7px;
                    }
                }
            }

            &.quotes {
                font-style: italic;
            }

            &.management {
                padding-top: 40px;
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
                    border-bottom: 2px solid $obligo-pink-light;

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

                            b {
                                display: block
                            }
                        }

                        .img {
                            width: 134px;
                            height: 134px;
                            border-radius: 50%;
                        }

                        &.bryce {
                            .img {
                                background-image: url('../assets/obligo/bryce.png');
                            }
                        }

                        &.yehoshua {
                            .img {
                                background-image: url('../assets/obligo/yehoshua.png');
                            }
                        }

                        &.viktoriya {
                            .img {
                                background-image: url('../assets/obligo/viktoriya.png');
                            }
                        }

                        &.david {
                            .img {
                                background-image: url('../assets/obligo/david.png');
                            }
                        }
                    }
                }
            }

            &.primary-persona {
                border: 2px solid $obligo-pink;
                border-radius: 15px;
                padding: 40px 200px 65px 40px;
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
                    color: $obligo-pink;
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
                            background: $obligo-pink;
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
                    background-image: url('../assets/obligo/viktoriya.png');
                    width: 134px;
                    height: 134px;
                    margin-left: 85px;
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

            .header {
                ul {
                    li {
                        padding: 20px 0 !important;
                        display: block !important;
                        border-right: none;
                        border-bottom: 2px solid $obligo-pink-light;

                        &:first-child {
                            padding-top: 5px !important;
                        }

                        &:last-child {
                            border-bottom: none !important;
                            padding-bottom: 0 !important;
                        }
                    }
                }
            }

            .personas {
                text-align: center;

                .right, .left {
                    text-align: center !important;
                }

                h2 {
                    text-align: left;
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
        }
    }
</style>


<style lang="scss">
    @import "../styles/globals.scss";

    .m-research {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            section {
                width: 1024px;

                .img {
                    width: 100%;
                    height: 400px;
                }
            }
        }
    }

    .tenant, 
    .management {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            section {
                width: 1024px;

                ul {
                    text-align: left;
                }

                div.img {
                    background-size: cover;
                    background-position: top;
                    width: 100%;
                    height: 575px;
                }

                .fa {
                    color: $obligo-pink;
                }
            }
        }
    }

    .marketing {
        .gallery {
            padding: 40px 0 0 0;
            text-align: center;

            section {
                width: 1024px;

                ul {
                    text-align: left;
                }

                div.img {
                    background-size: cover;
                    background-position: top;
                    width: 100%;
                    height: 300px;
                }

                .fa {
                    color: $obligo-pink;
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .m-research {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: calc(80vw / 2.2) !important;
                    }
                }
            }
        }

        .tenant, 
        .management {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: calc(80vw / 1.78) !important;
                    }
                }
            }
        }
 
        .marketing {
            .gallery { 
                section {
                    width: 80vw !important;

                    .img {
                        height: calc(80vw / 3.47) !important;
                    }
                }
            }
        }
    }

</style>