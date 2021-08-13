<template>
  <div class="container">
    <div class="home-page">
      <div class="svg" role="presentation">
          <div class="grails-logo-container">
              <img src="../assets/logo.png" class="hero-logo"/>
          </div>
      </div>
      <h1>HOME PAGE</h1>
      <h3>{{ username.toUpperCase() }} {{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/auth.service";
import HomeService from "@/services/home.service";
export default {
  name: "Home",
  data() {
    return {
      title: "",
      description: "",
      username: ''
    };
  },
  mounted() {
    this.loadPage()
  },
  methods: {
    loadPage() {
      HomeService.load()
        .then(response => {
          console.log(response)
          if (response.status === 'error') {
            AuthService.logout();
            this.$router.push("/login");

          } else {
            this.title = response[0].title;
            this.description = response[0].description;
            let user = JSON.parse(localStorage.getItem("user"));
            this.username = user.name;
          }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .home-page {
    background-color: #ffffff;
    padding: 50px 30px;
    border-radius: 6px;
    text-align: center;
  }
</style>