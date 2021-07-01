<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center mt-5">
      <div class="col-xl-10 col-lg-12 col-md-9 mt-5">
        <div class="card o-hidden border-0 shadow-lg mt-5 mb-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center h-100">
              <div class="col-lg-6">
                <div class="p-4">
                  <div class="text-center">
                    <img src="../assets/LOGO TES.png" class="mw-100 mt-4" />
                  </div>
                  <form class="user" @submit.prevent="submitLogin">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        v-model="userData.email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="userData.password"
                      />
                    </div>
                    <center>
                      <button
                        type="submit"
                        class="
                          btn btn-dark btn-user btn-block
                          w-50
                          mt-4
                          mb-3
                          font-weight-bold
                        "
                      >
                        LOGIN
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "Login",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitLogin() {
      this.$store
        .dispatch("login", this.userData)
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
