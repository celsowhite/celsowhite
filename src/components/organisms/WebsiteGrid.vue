<template>
    <div class="website_grid_contaner">
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
                <ThumbnailCard 
                :isBlurred="!website.category.includes(activeCategory)" 
                :title="website.title" 
                :image="website.featuredImageSmall" 
                :imageFocus="website.featuredImageSmallFocus" 
                :link="'/websites/' + getSlug(website.title)" />
            </div>
        </div>
    </div>
</template>

<script>

    import ThumbnailCard from '../atoms/ThumbnailCard';
    import { websites } from '../../data/websites';
    import getSlugMixin from '../../mixins/getSlug';
                    
    export default {
        name: 'WebsiteGrid',
        data() {
            return {
                activeCategory: 'All',
                websites,
                categories: ['All', 'Creative', 'Non-Profit', 'E-Commerce']
            }
        },
        mixins: [getSlugMixin],
        components: {
            ThumbnailCard
        },
        methods: {
            setActiveCategory(category) {
                this.activeCategory = category;
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
        
        @include mobile_landscape {
            margin-right: 10px;
            font-size: 11px;
        }
    }

</style>