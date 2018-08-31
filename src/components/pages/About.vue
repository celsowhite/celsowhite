<template>
    <div>
        <PageHeader title="About" summary="Web Designer & Digital Agency based in Brooklyn, NY" />
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
                            <LogoList :logos="clientLogos" alignment="left" />
                            <h3>Social</h3>  
                            <SocialList :socials="personalSocials" alignment="left" />                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import PageHeader from '../organisms/PageHeader';
    import WebsiteGrid from '../organisms/WebsiteGrid';
    import SocialList from '../atoms/SocialList';
    import LogoList from '../atoms/LogoList';
    import { store } from '../../store/store';
    import { personalSocials } from '../../data/socials';
    import { clientLogos } from '../../data/logos';
                    
    export default {
        name: 'Websites',
        metaInfo: {
            title: 'Websites',
        },
        data() {
            return {
                personalSocials,
                clientLogos
            }
        },
        components: {
            PageHeader,
            WebsiteGrid,
            SocialList,
            LogoList
        },
        mounted: function() {
            store.setColorScheme('light');
        }
    }

</script>

<style scoped lang="scss">

</style>