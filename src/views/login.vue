<template>
  <div>
    <form action="/dashboard" id="login" @submit="checkForm" method="post">
      <p v-if="errors.length"><b>Please correct the following error(s):</b>
      <ul> 
        <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        </p>
      <div>
        <input type="text" name="name" id="name" v-model="name"/>
        <label for="name">UserName</label>
      </div>
      <br />
      <div>
        <input type="text" name="" id="password" v-model="password"/>
        <label for="password">Password</label>
      </div>

      <br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
const apiUrl = ''
export default {
  name: "Login",
  el: '#login',
  data: {
    error: [],
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      this.errors = [];
      //name validation
      if(this.name === ''){
        this.errors.push('User name field cannot be empty');
      }else{
        fetch(apiUrl + encodeURIComponent(this.name))
        .then(async res => {
          if(res.status === 204){
            alert('Ok');
          }else if(res.status === 400){
            let errorResponse = await res.json();
            this.error.push(errorResponse.error);
          }
        })
      }
    }
  }
};
</script>

<style scoped>
#login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>