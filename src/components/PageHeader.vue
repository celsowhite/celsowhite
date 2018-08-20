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

</style>