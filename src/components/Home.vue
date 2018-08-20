<template>
    <div class="home">
        
        <!-- Content -->
        
        <div class="home_content">
            <div class="container">
                <ul class="featured_project_list">
                    <li 
                    v-for="website in websites" 
                    v-if="website.featured"
                    :key="website.title"
                    :class="[activeBackgroundImage && activeBackgroundImage !== website.title ? 'blur' : '']"                     
                    @mouseover="showBackground(website.title)" 
                    @mouseleave="showBackground('')">
                        {{ website.title }}
                    </li>
                </ul>
                <router-link to="websites" class="featured_link">View All Websites</router-link>
            </div>
        </div>
        
        <!-- Background Images -->
        
        <div class="home_background_container">
            <div 
            v-for="website in websites" 
            v-if="website.featured"
            :key="website.title"
            class="home_background_image" 
            :class="[activeBackgroundImage == website.title ? 'active' : '']" 
            :style="{ backgroundImage: 'url(' + website.featuredImageLarge + ')' }">
            </div>
        </div>
        
    </div>
</template>

<script>

    import { websites } from '../data/websites';
    import { store } from "../store/store.js";
                    
    export default {
        name: 'Home',
        metaInfo: {
            title: 'Home',
        },
        data () {
            return {
                activeBackgroundImage: '',
                websites
            }
        },
        methods: {
            showBackground(imageName) {
                this.activeBackgroundImage = imageName;
            }
        },
        mounted: function() {
            store.setColorScheme('dark');
        }
    }

</script>

<style scoped lang="scss">

    // Structure
    
    .home {
        height: 100vh;
        background: $black;
        background-size: cover;
        background-position: center;
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    // Content
    
    .home_content {
        text-align: center;
        padding-top: 100px;
        @include z-index('priority-content');
    }
    
    ul.featured_project_list {
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        margin-bottom: 100px;
    }
    
    ul.featured_project_list li {
        padding: 0 10px;
        margin-bottom: 13px;
        font-family: 'SweetSans';
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .6px;
        transition: all .3s ease-in-out;
        
        &.blur {
            filter: blur(2px);
        }
    }
    
    // Background 
    
    .home_background_image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0;
        transition: all .3s ease-in-out;
        
        &.active {
            opacity: 1;
        }
        
    }
    
    .home_background_image:after {
        @include overlay(rgba($black, 0));
    }

</style>
