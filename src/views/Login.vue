<template>
	<div class="container">
		<!-- Outer Row -->
		<div class="row justify-content-center">
			<div class="col-xl-10 col-lg-12 col-md-9">
				<div class="card o-hidden border-0 shadow-lg my-5">
					<div class="card-body p-0">
						<!-- Nested Row within Card Body -->
						<div class="row justify-content-center h-100">
							<div class="col-lg-6">
								<div class="p-5">
									<div class="text-center">
										<img
											src="https://cdn.discordapp.com/attachments/857558201851445250/859364209418043392/LOGO_TES.png"
											class="mw-100"
										/>
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
										<button type="submit" class="btn btn-dark btn-user btn-block">
											Login
										</button>
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
