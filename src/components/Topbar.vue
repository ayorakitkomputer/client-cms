<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <!-- Navbar Brand-->
    <router-link class="navbar-brand ps-3" to="/"
      ><img
        src="https://cdn.discordapp.com/attachments/857558201851445250/859364209418043392/LOGO_TES.png"
        style="width: 100px; height: 50px"
        alt="Italian Trulli"
      />
    </router-link>
    <!-- Sidebar Toggle-->
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Navbar-->
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          href="#"
          data-bs-toggle="dropdown"
          :aria-expanded="topBar"
          @click="toggleDown"
          ><i class="fas fa-user fa-fw"></i
        ></a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li><a class="dropdown-item">Settings</a></li>
          <li><a class="dropdown-item">Activity Log</a></li>
          <li><hr class="dropdown-divider" /></li>

          <li>
            <router-link v-if="!isLogin" to="/login" class="dropdown-item"
              >login</router-link
            >
            <a v-if="isLogin" @click="logout" class="dropdown-item">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        topBar: false,
        isLogin: false,
      };
    },
    methods: {
      toggleDown() {
        this.topBar = true;
      },
      logout() {
        localStorage.clear();
        this.$router.push("/login");
      },
    },
    created() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      }
    },
  };
</script>

<style></style>
