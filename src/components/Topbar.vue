<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <!-- Navbar Brand-->
    <router-link class="navbar-brand ps-3" to="/">ARK</router-link>
    <!-- Sidebar Toggle-->
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
    >
      <i class="fas fa-bars"></i>
    </button>
    <!-- Navbar Search-->
    <form
      class="
        d-none d-md-inline-block
        form-inline
        ms-auto
        me-0 me-md-3
        my-2 my-md-0
      "
    >
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search for..."
          aria-describedby="btnNavbarSearch"
        />
        <button class="btn btn-primary" id="btnNavbarSearch" type="button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </form>
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
