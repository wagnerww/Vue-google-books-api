import api from './apiInstance';

export default {
    name: 'apiuConfig',
    methods: {
        createInterceptors() {
            api.interceptors.request.use(
                (config) => {
                    const newConfig = config;
                    // config.headers.Authorization = this.$store.state.authToken;
                    if (newConfig.url.indexOf('?') !== -1) newConfig.url += '&';
                    else newConfig.url += '?';

                    newConfig.url += `key${this.$store.state.authToken}`;
                    return newConfig;
                },
                () => {
                    this.$store.commit(
                        'showErrorMessage',
                        'Ops! Houve um problema ao enviar a requisição',
                    );
                },
            );

            api.interceptors.response.use(
                response => response,
                () => {
                    this.$store.commit(
                        'showErrorMessage',
                        'Ops! Houve um problema ao enviar a requisição',
                    );
                },
            );
        },
    },
};
