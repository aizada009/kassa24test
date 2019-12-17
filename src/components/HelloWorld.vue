<template>
  <div class="hello">
        <table  id="tab" class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Created Data</th>
                    <th>Text</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result, index) in results" v-bind:index="index" v-bind:key="result.id">
                        <td>{{index+1}}</td>
                        <td>{{result.id}}</td>
                        <td><img v-bind:src="result.avatar" alt="avatar" heigh="50" width="90">
                        </td>
                        <td>{{result.createdAt}}</td>
                        <td>{{ result.text }}</td>
                        <td>{{ result.title }}</td>
                        <td>
                         <button style="font-size:13px; color: red;" type="button" class="btn btn-danger" @click="deleteData(index)"> X
                         </button>
                     </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return{
      results: []
    };
    },
  mounted() {
    axios.get("https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles?sortBy=createdAt&order=desc")
    .then(response => (
                this.results = response.data 
                ));

  },
 methods : {
  /***deleteData(n) { 
        
        axios.delete("https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles/"+this.results.id)
        .then(response => {
        this.results.splice(n, 1); 

      });
   }**/
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#tab {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#tab td, #tab th {
  border: 1px solid #ddd;
  padding: 8px;
}

#tab tr:nth-child(even){background-color: #f2f2f2;}

#tab tr:hover {background-color: rgb(221, 221, 221);}

#tab th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(76, 119, 175);
  color: white;
}
</style>
