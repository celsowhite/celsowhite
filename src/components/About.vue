<template>
    <div>
        <PageHeader title="About" summary="Web designer & Digital Agency based in Brooklyn, NY" />
        <div class="main_content">
            <div class="panel">
                <div class="large_container">
                    <div class="row">
                        <div class="column_1_2">
                            <img src="/static/img/about/me.jpg" />
                        </div>
                        <div class="column_1_2">
                            <p>My name is Celso White, I create websites and digital experiences that help individuals and brands tell their story and grow their business.</p>
                            <h3>Development</h3><p>I specialize as a front end developer, building custom websites in Wordpress and Shopify platforms. I'll collaborate with your team and offer feedback through strategy, user experience, and design. By the time development starts, I have an intimate idea of the projects goals and a detailed technical strategy for how to achieve them.</p>
                            <h3>Agency</h3><p>Celso White LLC is a full service digital agency. I bring in and lead a team of contractors perfect for your project. We specialize in logo design, branding, user experience, strategy and development. During our project we integrate and become a part of your team.</p>
                            <h3>Clients</h3>
                            <ul class="client_logos">
                                <li><img src="/static/img/clients/ticketmaster.png" /></li>                            
                                <li><img src="/static/img/clients/npr.png" /></li>                            
                                <li><img src="/static/img/clients/pbs.png" /></li>
                                <li><img src="/static/img/clients/matte.png" /></li>
                                <li><img src="/static/img/clients/jimmychin.png" /></li>
                                <li><img src="/static/img/clients/tribeca.png" /></li>                            
                            </ul>
                            <h3>Social</h3>                            
                            <ul class="social_list">
                                <li><a href="mailto:celso@celsowhite.com" target="_blank"><i class="fal fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/celsowhite" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/celsowhite/" target="_blank"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/celsostories/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com/celsostories" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import PageHeader from './PageHeader';
    import WebsiteGrid from './WebsiteGrid';
    import { store } from "../store/store.js";
                    
    export default {
        name: 'Websites',
        metaInfo: {
            title: 'Websites',
        },
        data() {
            return {
            }
        },
        components: {
            PageHeader,
            WebsiteGrid
        },
        mounted: function() {
            store.setColorScheme('light');
        }
    }

</script>

<style scoped lang="scss">

    ul.client_logos {
        display: flex;
        flex-flow: row wrap;
        margin-bottom: 20px;
    }

    ul.client_logos li {
        width: 14%;
        padding: 0 5px;
        margin-bottom: 10px;
        filter: grayscale(100%);
    }

    ul.social_list li {
        display: inline-block;
        margin: 0px 10px;

        @include mobile {
            margin: 0 5px;
        }
    }

    ul.social_list li a {
        color: $black;

        &:hover {
            color: $black;
        }
    }

</style>