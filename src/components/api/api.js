import api from './apiInstance';

export default {
    name: 'api',
    methods: {
        async get(url) {
            try {
                const { data } = await api.get(url);
                return data;
            } catch (error) {
                console.log('error', error);
                return null;
            }
        },
    },
};
