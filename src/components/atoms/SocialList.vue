<template>
    <ul :class="['social_list', alignment]">
        <li 
        v-for="social in socials" 
        :key="social.title">
            <a :href="social.link" target="_blank"><i :class="social.fontAwesome"></i></a>
        </li>
    </ul>
</template>

<script>
        
    export default {
        name: 'SocialList',
        props: {
            socials: Array,
            alignment: String
        }
    }

</script>

<style scoped lang="scss">

    ul.social_list {
        margin: 0;
    }

    ul.social_list li {
        display: inline-block;
        margin: 0 10px;
    }

    ul.social_list.left li:first-child {
        margin: 0 10px 0 0;
    }

    ul.social_list.right {
        text-align: right;

        li:last-child {
            margin: 0 0 0 10px;
        }
    }
            
</style>