<template>
  <ul
    class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="
        sidebar-brand
        d-flex
        align-items-center
        justify-content-center
        mb-3
      "
      href="#"
      @click.prevent="$router.push('/')"
    >
      <img
        src="https://cdn.discordapp.com/attachments/857558201851445250/859364209418043392/LOGO_TES.png"
        class="mw-100 p-2 mt-3"
      />
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active ml-2">
      <a class="nav-link" href="#" @click.prevent="$router.push('/')">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span> Dashboard</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading ml-2">
      <i class="fas fa-fw fa-chart-area"></i>
      <span class=""> Products</span>
    </div>

    <li class="nav-item ml-4" v-for="product in products" :key="product">
      <a class="nav-link" :href="$router.resolve({ path: '/' + product }).href">
        <span class="text-capitalize">{{ product.replace("_", " ") }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      products: [
        "cpu",
        "motherboard",
        "memory",
        "storages",
        "gpu",
        "case",
        "power_supplies",
        "monitors",
        "case_fan",
      ],
    };
  },
};
</script>

<style></style>
