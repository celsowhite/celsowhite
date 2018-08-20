<template>
    <div>
        <PageHeader title="Websites" summary="I specialize in building custom websites in Wordpress and Shopify." />
        <div class="main_content">
            <div class="panel">
                <div class="large_container">
                    <WebsiteGrid />
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

</style>