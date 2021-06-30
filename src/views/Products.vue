<template>
  <div class="container-fluid">
    <!-- Page Heading -->

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-body">
        <h1 class="h3 font-weight-bold mb-2 text-gray-800">
          {{ this.$route.name }}
        </h1>
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
          theme="ios"
        >
          <zg-data :src="dataUrl">
            <zg-param name="recordPath" value="data"></zg-param>
            <zg-param name="idKey" value="_id"></zg-param>
            <zg-param name="headers" :value="access_token"></zg-param>
            <StorageTable v-if="this.$route.path === '/storages'" />
            <CpuTable v-if="this.$route.path === '/cpu'" />
            <PowerSupplyTable v-if="this.$route.path === '/power_supplies'" />
            <MonitorTable v-if="this.$route.path === '/monitors'" />
            <GpuTable v-if="this.$route.path === '/gpu'" />
            <MotherboardTable v-if="this.$route.path === '/motherboard'" />
            <CaseTable v-if="this.$route.path === '/case'" />
            <MemoryTable v-if="this.$route.path === '/memory'" />
            <CaseFanTable v-if="this.$route.path === '/case_fan'" />
          </zg-data>
        </zing-grid>
      </div>
    </div>
  </div>
</template>

<script>
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
  name: "Products",
  data() {
    return {
      dataUrl: "",
    };
  },
  components: {
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
  created() {
    if (this.$route.path) {
      this.dataUrl = `http://3.95.218.141:3000${this.$route.path}`;
    }
    let token = localStorage.access_token;
    this.access_token = `{"access_token": "${token}"}`;
  },
  watch: {
    $route() {
      this.dataUrl = "";
      this.dataUrl = `http://3.95.218.141:3000${this.$route.path}`;
    },
  },
};
</script>

<style></style>
