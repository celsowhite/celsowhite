<template>
    <div>
        <PageHeader title="Apps" summary="I enjoy building fullstack apps using javascript frameworks." />
        <div class="main_content">
            <div class="panel">
                <div class="large_container">
                    <AppsGrid />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import PageHeader from '../organisms/PageHeader';
    import AppsGrid from '../organisms/AppsGrid';
    import { store } from "../../store/store.js";
                    
    export default {
        name: 'Apps',
        metaInfo: {
            title: 'Apps',
        },
        data() {
            return {
            }
        },
        components: {
            PageHeader,
            AppsGrid
        },
        mounted: function() {
            store.setColorScheme('light');
        }
    }

</script>

<style scoped lang="scss">

</style>