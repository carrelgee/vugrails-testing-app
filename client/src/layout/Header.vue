<template>
  <header class="page__header">
    <div class="container">
      <nav class="navbar">
        <a class="navbar__logo" href="/#">
          <img src="../assets/images/grails.svg" alt="Grails Logo" />
        </a>
        <button
          type="button"
          v-if="isShowLogout"
          class="navbar__link-logout"
          @click.prevent="onPageLogout"
        >
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import AuthService from "@/services/auth.service";
export default {
  name: "Header",
  data() {
    return {
      isShowLogout: true,
    };
  },
  mounted() {
    if (!JSON.parse(localStorage.getItem("user"))) {
      this.updateLogoutButton(false);
    }
  },
  watch: {
    $route(to) {
      if ("requiresAuth" in to.meta) {
        this.updateLogoutButton(true);
      } else {
        this.updateLogoutButton(false);
      }
    },
  },
  methods: {
    onPageLogout() {
      AuthService.logout();
      this.$router.push("/login");
    },
    updateLogoutButton(type) {
      this.isShowLogout = type;
    },
  },
};
</script>
