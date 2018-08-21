<template>
    <footer class="main_footer">
            <p>celso@celsowhite.com</p>
            <span class="line"></span>
    </footer>
</template>

<script>
    
    // Imports
                
    export default {
        name: 'MainFooter'
    }

</script>

<style scoped lang="scss">
        
    footer {
        width: 100%;
        margin-top: 100px;
        padding: 50px 0 0;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    
    footer p {
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: .6px;
        font-size: 12px;
        font-weight: 700;
    }
    
    footer span.line {
        width: 1px;
        height: 30px;
        background: black;
        display: block;
    }
    
</style>