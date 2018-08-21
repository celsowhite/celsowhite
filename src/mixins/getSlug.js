import speakingurl from 'speakingurl';

export default {
    methods: {
        getSlug(string) {
            return speakingurl(string);
        }
    }
};