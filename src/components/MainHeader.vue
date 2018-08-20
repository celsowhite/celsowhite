<template>
    <header class="main_header">
        <router-link to="/" class="logo_container">
            <img src="/static/img/logo/logo.png" class="logo" />
        </router-link>
        <button class="mobile_nav_toggle" @click="toggleMobileNav">Menu</button>
        <nav class="nav_list mobile_navigation" :class="{ visible: mobileNavVisible }">
            <ul>
                <li v-for="link in navLinks" :key="link.title">
                    <router-link :to="link.link" @click.native="toggleMobileNav">
                        {{ link.title }}
                    </router-link>
                </li>
            </ul>
        </nav>
        <nav class="nav_list main_navigation">
            <ul>
                <li v-for="link in navLinks" :key="link.title">
                    <router-link :to="link.link">
                        {{ link.title }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    
    // Imports
    
    import { navLinks } from '../data/navLinks';
    
    export default {
        name: 'MainHeader',
        data() {
            return {
                navLinks,
                mobileNavVisible: false
            }
        },
        methods: {
            toggleMobileNav() {
                this.mobileNavVisible = !this.mobileNavVisible;
            }
        }
        
    }
    
</script>

<style scoped lang="scss">
        
    header.main_header {
        width: 100%;
        padding: 20px 0;
    }
    
    header.main_header a.logo_container {
        display: block;
        width: 100px;
        margin: 0 auto;
        
        @include tablet {
            width: 80px;
        }
    }
    
    // Navigation
    
    nav.nav_list ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    
    nav.nav_list ul li {
        margin: 0 10px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
    }
    
    // Main Nav
    
    nav.main_navigation {
        @include tablet {
            display: none;
        }
    }
    
    nav.main_navigation li {
        transition: all .5s ease-in-out;
        @include staggered_transition($start:0, $items:10, $initial:.1, $step:.1);
    }
        
    nav.nav_list ul li a {  
        color: grey;
              
        &.router-link-exact-active, &:hover {
            color: black;
        }
    }
    
    // Mobile Nav
    
    nav.mobile_navigation {
        height: 0vh;
        background: lightgrey;
        position: relative;
        @include z-index(navigation);
        overflow: hidden;
        transition: all 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);

        &.visible {
            opacity: 1;
            height: 100vh;
        }
    }
    
    nav.nav_list.mobile_navigation ul li {
        width: 100%;
        text-align: center;
        color: $white;
        padding: 5px 0;
        transform: translateY(30px);
        opacity: 0;
        transition: all .7s ease-in-out;
        @include staggered_transition($start:0, $items:10, $initial:0, $step:.1);
        
        &:first-child {
            padding: 20px 0 5px;
        }
        
        &:last-child {
            padding: 5px 0 20px;
        }
    }
    
    nav.mobile_navigation.visible ul li {
        opacity: 1;
        transform: translateY(0);
    }
    
    // Mobile Menu Toggle
    
    .mobile_nav_toggle {
        width: 100%;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
        display: none;
        
        @include tablet {
            display: block;
        }
    }
    
    /*--- 
    Header Animation
    ---*/
                
    .header_anim-enter-active, .header_anim-leave-active {
        transition: all 1s;
        
        .main_header {
            transition: all .3s ease-in-out;
        }
        
        nav.main_navigation {
            transition: all .3s ease-in-out;
        }
        
        .mobile_nav_toggle {
            transition: all .3s ease-in-out;
        }
    }
        
    .header_anim-enter, .header_anim-leave-to {  
        .main_header {
            opacity: 0;
        }
        
        nav.main_navigation {
            opacity: 0;
        }      
        
        .logo_container {
            opacity: 0;
            transform: translateY(60px);
        }
        
        nav.main_navigation ul li {
            opacity: 0;
            transform: translateX(-20px);
        }
        
        .mobile_nav_toggle {
            opacity: 0;
            transform: translateX(-30px);
        }
    }
            
</style>