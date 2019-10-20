import axios from 'axios';

const api = axios.create({ baseURL: 'https://www.googleapis.com/books/v1' });

/* api.interceptors.request.use((config) => {
    config.headers.Authorization = this.$store.state;
    return config;
}); */

export default {
    name: 'aoi',
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
