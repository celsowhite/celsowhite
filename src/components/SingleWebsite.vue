<template>
    <div>
        <PageHeader :title="websiteInfo.title" :summary="websiteInfo.summary" />
        <div class="main_content">
            <div class="panel">
                <div class="small_container">
                    <video autoplay muted playsinline loop :src="websiteInfo.video"></video>
                    <div v-html="websiteInfo.content"></div>
                </div>
            </div>
            <div class="panel">
                <div class="large_container">
                    <h3>More {{ primaryCategory }}</h3>
                    <div class="row">
                        <div
                        v-for="relatedWebsite in websites" 
                        :key="relatedWebsite.title"
                        v-if="relatedWebsite.category.includes(primaryCategory) && relatedWebsite.title !== websiteInfo.title"
                        class="column_1_3">
                            <CardSlim 
                            :isBlurred="false" 
                            :title="relatedWebsite.title" 
                            :image="relatedWebsite.featuredImageLarge" 
                            :imageFocus="relatedWebsite.featuredImageLargeFocus" 
                            :link="'/websites/' + getSlug(relatedWebsite.title)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import PageHeader from './PageHeader';
    import CardSlim from './CardSlim';
    import { store } from "../store/store.js";
    import { websites } from '../data/websites';
    import getSlug from 'speakingurl';
                        
    export default {
        name: 'SingleWebsite',
        data() {
            return {
                websiteSlug: this.$route.params.slug,
                websites,
                websiteInfo: '',
                primaryCategory: '',
                relatedWebsites: ''
            }
        },
        components: {
            PageHeader,
            CardSlim
        },
        mounted: function() {
            store.setColorScheme('light');
            this.getWebsiteInfo();
            this.getRelatedWebsites();
        },
        methods: {
            getSlug(string) {
                return getSlug(string);
            },
            getWebsiteInfo: function () {
                const websiteInfo = websites.find((website) => {
                    return getSlug(website.title) == this.websiteSlug;
                }); 
                this.websiteInfo = websiteInfo;
                this.primaryCategory = websiteInfo.category[1];
            },
            getRelatedWebsites() {
                this.relatedWebsites = websites.filter((website) => {
                    // return website.category.includes
                })
            }
        }
    }

</script>

<style scoped lang="scss">

    // Videos
    
    video {
        margin-bottom: 20px;
    }
    

</style>