$(function () {
    const vm = new Vue({
        el: '#case',
        data: {
            gifs: []
        },
        methods: {
            load() {
                this.$http.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=z0vKLm4PL9b125QI6Fu2gu9hRIg74oFD')
                    .then(resp => {
                        this.gifs = resp.body.data
                    })
            }
        }
    })

})


