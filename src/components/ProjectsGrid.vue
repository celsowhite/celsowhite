<template>
    <div class="projects_grid_contaner">
        <div class="row">
            <div
            v-for="project in projects" 
            :key="project.title"
            class="column_1_2">
                <ThumbnailCard 
                :isBlurred="false"
                cardType="medium"
                :summary="project.summary" 
                :title="project.title" 
                :image="project.featuredImageSmall" 
                :imageFocus="project.featuredImageSmallFocus" 
                :isExternalLink="true"
                :link="project.link" />
            </div>
        </div>
    </div>
</template>

<script>

    import ThumbnailCard from './ThumbnailCard';
    import { projects } from '../data/projects';
    import getSlugMixin from '../mixins/getSlug';
                    
    export default {
        name: 'ProjectsGrid',
        data() {
            return {
                projects
            }
        },
        mixins: [getSlugMixin],
        components: {
            ThumbnailCard
        }
    }

</script>

<style scoped lang="scss">

</style>