<template>
    <nav class="mobile_navigation" :class="{nav_open: storeState.navIsOpen}">
        <ul>
            <li v-for="link in navLinks" :key="link.title">
                <router-link :to="link.link" @click.native="toggleNavigation" exact>{{ link.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    
    import { store } from "../../store/store.js";
    import { navLinks } from '../../data/navLinks';
                
    export default {
        name: 'MobileNavigation',
        data () {
            return {
                navLinks,
                storeState: store.state
            }
        },
        methods: {
            toggleNavigation() {
                store.toggleNavigation();
            }
        }
    }

</script>

<style scoped lang="scss">

    // Structure
    
    nav.mobile_navigation {
        position: fixed;
        height: 100vh;
        background: $black;
        color: $white;
        width: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        opacity: 0;
        @include z-index('hidden');
        transition: opacity .3s ease-in-out, z-index 0s .5s ease-in-out;
        
        &.nav_open {
            z-index: 29;
            opacity: 1;
            transition: opacity .5s ease-in-out;
        }
        
        @include tablet {
            display: flex;
        }
        
    }
    
    // List
    
    nav.mobile_navigation ul li {
        text-transform: uppercase;
        margin-bottom: 10px;
        opacity: 0;
        transform: translateY(20px);
        transition: all .5s ease-in-out;
        @include staggered_transition($start:1, $items:5, $initial:0, $step:.1);
    }
    
    nav.mobile_navigation.nav_open ul li {
        opacity: 1;
        transform: translateY(0);
    }
    
</style>