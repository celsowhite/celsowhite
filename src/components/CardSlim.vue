<template>
    <router-link 
    :to="link"
    class="slim_card"
    :class="{ blur: isBlurred }"                     
    :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: imageFocus }">
        <h3>{{ title }}</h3>
    </router-link>
</template>

<script>
                    
    export default {
        name: 'CardSlim',
        props: {
            isBlurred: Boolean,
            image: String,
            imageFocus: String,
            title: String,
            link: String
        }
    }

</script>

<style scoped lang="scss">
    
    .slim_card {
        position: relative;
        display: block;
        color: $white;
        padding: 20px;
        text-align: center;
        background-size: cover;
        background-position: center;
        box-shadow: rgba($black, .3) 0 2px 4px;
        transition: all .3s ease-in-out;
        
        &:hover {
            box-shadow: rgba($black, 1) 0 2px 10px;
        }
    }
    
    .slim_card:hover:after {
        @include overlay(rgba($black, .1));
    }
    
    .slim_card:after {
        transition: all .3s ease-in-out;
        @include overlay(rgba($black, .5));
    }
        
    .slim_card h3 {
        position: relative;
        margin-bottom: 0;
        font-size: 12px;
        transition: all .3s ease-in-out;
        @include z-index('priority-content');
    }
    
    // Blurred
    
    .slim_card.blur:after {
        @include overlay(rgba($black, 1));
    }
    
    .slim_card.blur h3 {
        filter: blur(2px);
    }

</style>