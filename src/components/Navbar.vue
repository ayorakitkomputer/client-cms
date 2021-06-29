<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <router-link to="/"
            ><a class="nav-link">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </a></router-link
          >
          <!-- 
          <div class="sb-sidenav-menu-heading">
            <i class="bi bi-cpu"></i> Products
          </div>
          <router-link class="nav-link" to="/cpu"
            ><div class="sb-nav-link-icon"></div>
            CPU</router-link
          >
          <router-link class="nav-link" to="/power-supplies"
            ><div class="sb-nav-link-icon"></div>
            POWER SUPPLIES</router-link
          >
          <router-link class="nav-link" to="/gpu"
            ><div class="sb-nav-link-icon"></div>
            GPU</router-link
          >
          <router-link class="nav-link" to="/motherboard"
            ><div class="sb-nav-link-icon"></div>
            MOTHERBOARD</router-link
          >
          <router-link class="nav-link" to="/case"
            ><div class="sb-nav-link-icon"></div>
            CASE</router-link
          >
          <router-link class="nav-link" to="/memory"
            ><div class="sb-nav-link-icon"></div>
            MEMORY</router-link
          >
          <router-link class="nav-link" to="/monitors"
            ><div class="sb-nav-link-icon"></div>
            MONITOR</router-link
          >
          <router-link class="nav-link" to="/caseFan"
            ><div class="sb-nav-link-icon"></div>
            CASE FAN</router-link
          >
          <router-link class="nav-link" to="/storages"
            ><div class="sb-nav-link-icon"></div>
            STORAGE</router-link
          > -->
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
            </div>
            ARK Products
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-bs-parent="#sidenavAccordion"
          >
            <nav
              class="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseAuth"
                aria-expanded="false"
                aria-controls="pagesCollapseAuth"
              >
                To Find Compatability
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="pagesCollapseAuth"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/cpu">CPU</router-link>
                </nav>

                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/power-supplies"
                    >POWER SUPPLIES</router-link
                  >
                </nav>
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/gpu">GPU</router-link>
                </nav>
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/motherboard"
                    >MOTHERBOARD</router-link
                  >
                </nav>
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/case">CASE</router-link>
                </nav>
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/memory"
                    >MEMORY</router-link
                  >
                </nav>
              </div>
              <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseError"
                aria-expanded="false"
                aria-controls="pagesCollapseError"
              >
                Can Stand Alone
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="pagesCollapseError"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/monitors"
                    >MONITOR</router-link
                  >
                </nav>
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/caseFan"
                    >CASE FAN</router-link
                  >
                </nav>
                <nav class="sb-sidenav-menu-nested nav">
                  <router-link class="nav-link" to="/storages"
                    >STORAGE</router-link
                  >
                </nav>
              </div>
            </nav>
          </div>
          <div class="sb-sidenav-menu-heading">User Details</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
