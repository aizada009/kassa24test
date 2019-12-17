const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    counter: 48
  },
  mounted() {
    axios.get("https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles?sortBy=createdAt&order=desc")
    .then(response => (
                this.results = response.data 
                ))
    .catch(error =>( console.log(error)));
    


  },
 methods : {
  deleteData(n) { 
        console.log(n);
        axios.delete("https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles/"+this.results.id)
        .then(response => {
        this.results.splice(n, 1)
        console.log(this.results); 

      });
    }
 }
});