<template>
  <body class="sb-nav-fixed">
    <Topbar />
    <div id="layoutSidenav">
      <Navbar />
      <div id="layoutSidenav_content">
        <div>
          <zing-grid
            editor-controls
            pager
            filter
            search
            sort
            zebra
            gridlines="both"
            page-size="10"
            page-size-card="10"
            page-size-options="2,4,10,20"
            layout="row"
            role="grid"
            editor="inline"
            viewport="tablet-portrait"
          >
            <zg-data :src="productData" idKey="_id">
              <zg-param name="idKey" value="_id"></zg-param>
              <zg-param
                name="headers"
                value='{"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGFiNDQzZmFlYzc5MjczYzZmYzExZSIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJsYXN0bmFtZSI6IlBjUGFydFBpY2tlciIsImlhdCI6MTYyNDk1MDk2OX0.8Q7gyMGupriYWALb1mvXAapCxja6MGYl86uppLvEBJ0"}'
              ></zg-param>
              <StorageTable v-if="this.$route.path === '/storages'" />
              <CpuTable v-if="this.$route.path === '/cpu'" />
              <PowerSupplyTable v-if="this.$route.path === '/power-supplies'" />
              <MonitorTable v-if="this.$route.path === '/monitors'" />
              <GpuTable v-if="this.$route.path === '/gpu'" />
              <MotherboardTable v-if="this.$route.path === '/motherboard'" />
              <CaseTable v-if="this.$route.path === '/case'" />
              <MemoryTable v-if="this.$route.path === '/memory'" />
              <CaseFanTable v-if="this.$route.path === '/caseFan'" />
            </zg-data>
          </zing-grid>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
  import Navbar from "../components/Navbar.vue";
  import Topbar from "../components/Topbar.vue";
  import CaseFanTable from "../components/Case_Fan.vue";
  import CaseTable from "../components/Case.vue";
  import CpuTable from "../components/Cpu.vue";
  import GpuTable from "../components/Gpu.vue";
  import MemoryTable from "../components/Memory.vue";
  import MonitorTable from "../components/Monitor.vue";
  import MotherboardTable from "../components/Motherboard.vue";
  import PowerSupplyTable from "../components/Power_Supply.vue";
  import StorageTable from "../components/Storage.vue";

  export default {
    components: {
      Navbar,
      Topbar,
      CaseFanTable,
      CaseTable,
      CpuTable,
      GpuTable,
      MemoryTable,
      MonitorTable,
      MotherboardTable,
      PowerSupplyTable,
      StorageTable,
    },
    data() {
      return {
        productData: [],
      };
    },
    created() {
      if (this.$route.path) {
        console.log(`http://localhost:3000${this.$route.path}`);
        this.productData = `http://localhost:3000${this.$route.path}`;
      }
    },
    watch: {
      $route() {
        this.productData = [];
        this.productData = `http://localhost:3000${this.$route.path}`;
      },
    },
  };
</script>

<style></style>
