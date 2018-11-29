<template>
    <div>
        <PageHeader :title="websiteInfo.title" :summary="websiteInfo.summary" />
        <div class="main_content wysiwyg">
            <div class="panel">
                <div class="small_container">
                    <video autoplay muted playsinline loop>
                        <source :src="websiteInfo.video" type="video/mp4">
                    </video>
                    <div v-html="websiteInfo.content"></div>
                    <ul class="credit_list no_bullets">
                        <CreditList :credits="websiteInfo.credits" />
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel padding_bottom" v-if="relatedWebsites.length > 0">
            <div class="large_container">
                <h3>More {{ primaryCategory }}</h3>
                <div class="row">
                    <div
                    v-for="relatedWebsite in relatedWebsites" 
                    :key="relatedWebsite.title"
                    class="column_1_3">
                        <ThumbnailCard 
                        :title="relatedWebsite.title" 
                        :image="relatedWebsite.featuredImageSmall" 
                        :imageFocus="relatedWebsite.featuredImageSmallFocus" 
                        :link="'/websites/' + getSlug(relatedWebsite.title)" />
                    </div>
                </div>
            </div>
        </div>
        <div class="panel padding_bottom">
            <div class="large_container text_alignment_center">
                <router-link to="/websites" class="featured_link black">View All Websites</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    import PageHeader from '../organisms/PageHeader';
    import CreditList from '../atoms/CreditList';
    import ThumbnailCard from '../atoms/ThumbnailCard';
    import { store } from "../../store/store.js";
    import { websites } from '../../data/websites';
    import getSlugMixin from '../../mixins/getSlug';
                        
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
            ThumbnailCard,
            CreditList
        },
        mounted: function() {
            store.setColorScheme('light');
            this.getWebsiteInfo();
        },
        mixins: [getSlugMixin],
        methods: {
            getWebsiteInfo: function () {
                const websiteInfo = websites.find((website) => {
                    return this.getSlug(website.title) == this.websiteSlug;
                }); 
                this.websiteInfo = websiteInfo;
                this.primaryCategory = websiteInfo.category[1];
                this.relatedWebsites = websites.filter((website) => {
                    return website.category.includes(this.primaryCategory) && website.title !== this.websiteInfo.title;
                });
            }
        }
    }

</script>

<style scoped lang="scss">

    // Videos
    
    video {
        margin-bottom: 20px;
        box-shadow: rgba($black,.3) 0 2px 8px
    }
    

</style>