const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles")
    .then(response => (
                this.results = response.data 
                ))
    .catch(error =>( console.log(error)));
  }
});