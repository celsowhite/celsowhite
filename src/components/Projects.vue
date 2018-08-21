<template>
    <div>
        <PageHeader title="Projects" summary="Beyond making websites I love to create using all forms of media." />
        <div class="main_content">
            <div class="panel">
                <div class="large_container">
                    <ProjectsGrid />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import PageHeader from './PageHeader';
    import ProjectsGrid from './ProjectsGrid';
    import { store } from "../store/store.js";
                    
    export default {
        name: 'Projects',
        metaInfo: {
            title: 'Projects',
        },
        data() {
            return {
            }
        },
        components: {
            PageHeader,
            ProjectsGrid
        },
        mounted: function() {
            store.setColorScheme('light');
        }
    }

</script>

<style scoped lang="scss">

</style>