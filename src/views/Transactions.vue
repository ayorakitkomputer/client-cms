<template>
	<div class="container-fluid">
		<!-- Page Heading -->

		<!-- DataTales Example -->
		<div class="card shadow mb-4">
			<div class="card-body">
				<h2 class="h3 mb-2 text-gray-800">Transactions</h2>
				<zing-grid
					sort
					search
					pager
					page-size="10"
					page-size-options="2,4,10,20"
					layout="row"
					filter
					zebra
					page-size-card="6"
					role="grid"
					theme="ios"
					lang="id"
				>
					<zg-caption>
						<button @click.prevent="_exportDataToPDF()" class="btn btn-primary">
							Download PDF
						</button>
					</zg-caption>
					<zg-data src="https://ayorakitkomputer.herokuapp.com/history/transactions">
						<zg-param name="idKey" value="_id"></zg-param>
						<zg-param name="headers" :value="access_token"></zg-param>
						<zg-column index="_id" header="ID"></zg-column>
						<zg-column index="createdAt" header="Date" type="date" sort-desc="true"></zg-column>
						<zg-column index="user.firstname, user.lastname" header="Customer"></zg-column>
						<zg-column index="user.email" header="Email"></zg-column>
						<zg-column index="user.address" header="Address"></zg-column>
						<zg-column index="build._id" header="Build Id"></zg-column>
						<zg-column
							index="shipmentStatus"
							header="Shipment"
							type="toggle"
							type-toggle-options='["Not Shipped","Shipped"]'
						>
						</zg-column>
					</zg-data>
				</zing-grid>
			</div>
		</div>
	</div>
</template>

<script>
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default {
	name: "Transactions",
	data() {
		return {
			access_token: "",
		};
	},
	created() {
		if (!localStorage.access_token) {
			this.$router.push("/login");
		}
		let token = localStorage.access_token;
		this.access_token = `{"access_token": "${token}"}`;
	},
	methods: {
		_exportDataToPDF() {
			const zgRef = document.querySelector("zing-grid");
			const data = zgRef.getData();
			const doc = new jsPDF("l", "pt");
			let columns = [];
			let rows = [];
			let innerRow = [];
			Object.keys(data[data.length - 1]).forEach((key) => {
				columns.push(key);
				data.forEach((result) => {
					if (innerRow.length === 5) {
						rows.push(innerRow);
						innerRow = [];
					}
					innerRow.push(result._id);
					innerRow.push(result.user.email);
					innerRow.push(new Date(result.createdAt).toLocaleDateString("id"));
					innerRow.push(result.build._id);
					innerRow.push(result.shipmentStatus);
				});
			});
			doc.autoTable(columns, rows);
			window.open(doc.output("bloburl"), "_blank");
		},
	},
};
</script>

<style></style>
