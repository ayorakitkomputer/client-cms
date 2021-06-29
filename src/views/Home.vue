<template>
  <body class="sb-nav-fixed">
    <Topbar></Topbar>
    <div id="layoutSidenav">
      <Navbar></Navbar>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">
              <div class="col-xl-3 col-md-6">
                <div class="card bg-dark text-white mb-4">
                  <div class="card-body">Primary Card</div>
                  <div
                    class="
                      card-footer
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <a class="small text-white stretched-link" href="#"
                      >View Details</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-light text-white mb-4">
                  <div class="card-body">Warning Card</div>
                  <div
                    class="
                      card-footer
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <a class="small text-white stretched-link" href="#"
                      >View Details</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-dark text-white mb-4">
                  <div class="card-body">Success Card</div>
                  <div
                    class="
                      card-footer
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <a class="small text-white stretched-link" href="#"
                      >View Details</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6">
                <div class="card bg-light text-dark mb-4">
                  <div class="card-body">Danger Card</div>
                  <div
                    class="
                      card-footer
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <a class="small text-dark stretched-link" href="#"
                      >View Details</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-header">
                <i class="bi bi-cash-coin"></i>
                User Transactions
              </div>
              <div class="card-body">
                <zing-grid
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
                  viewport="tablet-portrait"
                >
                  <zg-data :src="transactionData">
                    <zg-param
                      name="headers"
                      value='{"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGFiNDQzZmFlYzc5MjczYzZmYzExZSIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJsYXN0bmFtZSI6IlBjUGFydFBpY2tlciIsImlhdCI6MTYyNDk1MDk2OX0.8Q7gyMGupriYWALb1mvXAapCxja6MGYl86uppLvEBJ0"}'
                    ></zg-param>
                    <zg-column index="user.id"></zg-column>
                    <zg-column index="user.firstname"></zg-column>
                    <zg-column index="user.lastname"></zg-column>
                    <zg-column index="user.email"></zg-column>
                    <zg-column index="user.address"></zg-column>
                    <zg-column index="build._id"></zg-column>
                  </zg-data>
                </zing-grid>
              </div>
            </div>
          </div>
        </main>
        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div
              class="d-flex align-items-center justify-content-between small"
            >
              <div class="text-muted">Copyright &copy; Your Website 2021</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>

<script>
  import Navbar from "../components/Navbar.vue";
  import Topbar from "../components/Topbar.vue";

  export default {
    name: "Home",
    components: {
      Navbar,
      Topbar,
    },
    data() {
      return {
        topBar: false,
        transactionData: [],
        gpuDataLength: 0,
      };
    },
    methods: {
      toggleDown() {
        this.topBar = true;
      },
    },
    created() {
      if (this.$route.path) {
        this.transactionData = `http://localhost:3000/history/all`;
        this.gpuDataLength = `http://localhost:3000/gpu`;
      }
    },
  };
</script>
