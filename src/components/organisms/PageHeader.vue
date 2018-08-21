<template>
    <header class="page_header">
        <div class="container">
            <h3>{{ title }}</h3>
            <h2>{{ summary }}</h2>
        </div>
    </header>
</template>

<script>
        
    export default {
        name: 'PageHeader',
        props: {
            title: String,
            summary: String
        },
        data () {
            return {
            }
        }
    }

</script>

<style scoped lang="scss">

    header.page_header {
        text-align: center;
        padding-top: 100px;
    }
    
    header.page_header h2 {
        margin-bottom: 0;
    }
    
    /*--- 
    Router Animation
    ---*/
        
    // Enter/Appear
        
    .router_anim-enter-active, .router_anim-leave-active {
        header.page_header h3 {
            transition: all .5s ease-in-out;
        }
        header.page_header h2 {
            transition: all .7s ease-in-out;
        }
    }
    
    .router_anim-enter, .router_anim-leave-to {
        header.page_header h3, header.page_header h2 {
            opacity: 0;
            transform: translateY(30px);
        }
    }
        
</style>