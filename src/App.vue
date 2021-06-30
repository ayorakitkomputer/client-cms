<template>
	<div id="page-top">
		<div id="wrapper">
			<Sidebar v-if="$route.path !== '/login'" />
			<div id="content-wrapper" class="d-flex flex-column">
				<div id="content">
					<Topbar v-if="$route.path !== '/login'" />
					<router-view />
				</div>
				<Footer />
			</div>
		</div>
		<ScrollTop v-if="$route.path !== '/login'" />
		<LogoutModal v-if="$route.path !== '/login'" />
	</div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import LogoutModal from "@/components/LogoutModal";

export default {
	name: "App",
	components: {
		Sidebar,
		Topbar,
		Footer,
		ScrollTop,
		LogoutModal,
	},
};
</script>
<style></style>
