<template>
    <div>
        <PageHeader title="Websites" summary="I specialize in building custom websites in Wordpress and Shopify." />
        <div class="main_content">
            <div class="panel">
                <div class="large_container">
                    <ul class="filter_list">
                        <li 
                        v-for="category in categories" 
                        :key="category"
                        :class="[activeCategory == category ? 'active' : '']"
                        @click="setActiveCategory(category)">
                            {{ category }}
                        </li>
                    </ul>
                    <div class="row">
                        <div
                        v-for="website in websites" 
                        :key="website.title"
                        class="column_1_3">
                            <CardSlim 
                            :isBlurred="!website.category.includes(activeCategory) ? true : false" 
                            :title="website.title" 
                            :image="website.featuredImageLarge" 
                            :imageFocus="website.featuredImageLargeFocus" 
                            :link="'/websites/' + getSlug(website.title)" />
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
        name: 'Websites',
        metaInfo: {
            title: 'Websites',
        },
        data() {
            return {
                activeCategory: 'All',
                websites,
                categories: ['All', 'Creative', 'Non-Profit', 'E-Commerce']
            }
        },
        components: {
            PageHeader,
            CardSlim
        },
        mounted: function() {
            store.setColorScheme('light');
        },
        methods: {
            setActiveCategory(category) {
                this.activeCategory = category;
            },
            getSlug(string) {
                return getSlug(string);
            }
        }
    }

</script>

<style scoped lang="scss">

    // Filter
    
    ul.filter_list {
        display: flex;
        margin-bottom: 30px;
    }
    
    ul.filter_list li {
        cursor: pointer;
        margin-right: 20px;
        text-transform: uppercase;
        
        &.active {
            font-weight: 700;
        }
    }

</style>