<template>
    <ul class="credit_list">
        <li 
        v-for="credit in credits" 
        :key="credit.title">
            <span class="title">{{ credit.title }}</span>
            <span v-html="credit.text" class="text"></span>
        </li>
    </ul>
</template>

<script>
        
    export default {
        name: 'CreditList',
        props: {
            credits: Array
        }
    }

</script>

<style scoped lang="scss">
    
    // Structure
    
    ul.credit_list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    ul.credit_list li {
        width: 60%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        
        @include mobile_landscape {
            width: 100%;
        }
    }
    
    // Title
    
    ul.credit_list li .title {
        font-weight: bold;
        text-transform: uppercase;
        width: 30%;
    }
    
    // Text
    
    ul.credit_list li .text {
        width: 70%;
    }
        
</style>