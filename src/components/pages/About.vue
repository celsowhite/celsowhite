<template>
    <div>
        <PageHeader title="About" summary="Web Developer & Digital Agency based in Brooklyn, NY" />
        <div class="main_content">
            <div class="panel">
                <div class="large_container">
                    <div class="row">
                        <div class="column_1_2">
                            <div class="profile-image"></div>
                        </div>
                        <div class="column_1_2">
                            <p>My name is Celso White, I create websites and digital experiences that help individuals and brands tell their story and grow their business.</p>
                            <h3>Developer</h3><p>I specialize as a front end developer, building custom websites in Wordpress and Shopify platforms. I'll collaborate with your team and offer feedback through strategy, user experience, and design. By the time development starts, I have an intimate idea of the projects goals and a detailed technical strategy for how to achieve them.</p>
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
    import SocialList from '../atoms/SocialList';
    import LogoList from '../atoms/LogoList';
    import { store } from '../../store/store';
    import { personalSocials } from '../../data/socials';
    import { clientLogos } from '../../data/logos';

    // Libraries

    import imageHoverEffect from '../../vendor/imageHoverEffect.js';
                    
    export default {
        name: 'About',
        metaInfo: {
            title: 'About',
        },
        data() {
            return {
                personalSocials,
                clientLogos
            }
        },
        components: {
            PageHeader,
            SocialList,
            LogoList
        },
        mounted: function() {

            store.setColorScheme('light');

            /*----------------------
            Profile Image Animation
            ----------------------*/

            var profileImageAnimation = new imageHoverEffect({
                parent: document.querySelector('.profile-image'),
                intensity1: 0.1,
                intensity2: 0.1,
                speedIn: 3,
                speedOut: 3,
                angle2: Math.PI / 2,
                image1: '/static/img/about/me.jpg',
                image2: '/static/img/about/me.jpg',
                displacementImage: '/static/img/about/displacement-1.jpg',
                hover: false
            });

            // Automatically alternate the profile images in the three js scene.
            
            let currentImage = 'first';

            (function transitionImage() {
                if(currentImage === 'first') {
                    profileImageAnimation.next();
                    currentImage = 'second';
                }
                else {
                    profileImageAnimation.previous();
                    currentImage = 'first';
                }
                setTimeout(transitionImage, 3000);
            })();

        }
    }

</script>

<style lang="scss">

    // Responsive profile image container to place three js canvas within.

    .profile-image {
        position: relative;
    }

    .profile-image canvas {
        position: absolute;
    }

    .profile-image:after {
        content: "";
        display: block;
        padding-bottom: 130%; 
    }

</style>