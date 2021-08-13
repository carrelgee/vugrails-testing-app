<template>
  <form class="login" @submit="onSubmit" autocomplete="off" novalidate>
    <div class="alert alert-info">
      expired_in_token: 120sec for testing Username: mason<br />
      Password: 12345678
    </div>

    <div class="login__group">
      <label class="login__label">Username</label>
      <input class="form-control login__input"  
        name="username" 
        type="text"
        v-model="form.username.value"
        :class="{ 'is-invalid': !form.username.valid }"
      />
      <transition name="fade">
        <div v-show="!form.username.valid" class="invalid-feedback">
          Username is required. Username must be at least {{ form.username.minlength }}
        </div>
      </transition>
    </div>

    <div class="login__group">
      <label class="login__label">Password</label>
      <input class="form-control login__input"
        name="password" 
        type="text"
        v-model="form.password.value"
        :class="{ 'is-invalid': !form.password.valid }"
      />
      <transition name="fade">
        <div v-show="!form.password.valid" class="invalid-feedback">
          Password is required. Password must be at least {{ form.password.minlength }}
        </div>
      </transition>
    </div>

    <div class="login__group">
      <button type="submit" class="btn login__button" :disabled="loading">
        <transition name="fade">
          <span v-show="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </transition>
        Sign in
      </button>
    </div>
    <transition name="fade">
      <div class="alert alert-danger login__danger" role="alert" v-if="messageError">
        {{ messageError }}
      </div>
    </transition>

  </form>
</template>
<script>
import AuthService from "@/services/auth.service";
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        username: {
          value: null,
          valid: true,
          minlength: 3
        },
        password: {
          value: null,
          valid: true,
          minlength: 8
        }
      },
      loading: false,
      messageError: ''
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.messageError = '';

      this.validateForm();

      if (this.form.username.valid && this.form.password.valid) {
        this.loading = true;

        let formData = {
          username: this.form.username.value,
          password: this.form.password.value
        };

        AuthService.login(formData).then((response) => this.loginAuthorize(response))
          
      } else {
        console.log('Abort sending form');
      }

    },
    validateForm() {
      let { username, password}  = this.form

      this.isValidInput(username.value, username.minlength)
        ? this.form.username.valid = true 
        : this.form.username.valid = false;

      this.isValidInput(password.value, password.minlength) 
        ? this.form.password.valid = true 
        : this.form.password.valid = false;
    },
    isValidInput(value, min) {
      return (value && value.length >= min);
    },
    clearForm() {
      this.loading = false;
      this.form.username.value = '';
      this.form.password.value = '';
    },
    loginAuthorize(response) {
      if (response.status === 'error') {
        this.messageError = response.message;
        this.clearForm();
      } else {
        if (JSON.parse(localStorage.getItem("user"))) {
          this.$router.push("/");
        }
      }
      
    },
  },
};
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
