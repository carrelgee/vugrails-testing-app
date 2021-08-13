<template>
  <div class="login-page">
    <h1 class="main-title">{{ title }}</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  data() {
    return {
      title: "Sign In",
    };
  },
};
</script>
