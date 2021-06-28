<template>
  <div>
    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard>
            <CCardHeader>
              <strong><h3>Create New Product</h3></strong>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol sm="4">
                  <CSelect
                    label="Component"
                    horizontal
                    :options="options"
                    placeholder="Please select"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="4">
                  <CInput label="Name" placeholder="Enter product name" />
                </CCol>
                <CCol sm="8">
                  <CInput label="Image URL" placeholder="URL" />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="4">
                  <CInput
                    label="Manufacturer"
                    placeholder="Enter manufacturer name"
                  />
                </CCol>
                <CCol sm="4">
                  <CInput label="Stock" placeholder="Enter stock" />
                </CCol>
                <CCol sm="4">
                  <CInput label="Price" placeholder="Enter price" />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="4">
                  <CInput label="Size" placeholder="Enter product size" />
                </CCol>
                <CCol sm="4">
                  <CInput label="Form Factor" placeholder="Enter form factor" />
                </CCol>
                <CCol sm="4">
                  <CInput label="Memory Type" placeholder="Enter memory type" />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="3">
                  <CInput label="TDP" placeholder="Enter TDP" />
                </CCol>
                <CCol sm="3">
                  <CInput label="Socket" placeholder="Enter Socket" />
                </CCol>
                <CCol sm="3">
                  <CInput label="IGPU" placeholder="Enter IGPU" />
                </CCol>
                <CCol sm="3">
                  <CInput label="Capacity" placeholder="Enter Capacity" />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="3">
                  <CInput label="Type" placeholder="Enter Type" />
                </CCol>
                <CCol sm="3">
                  <CInput label="Wattage" placeholder="Enter Wattage" />
                </CCol>
                <CCol sm="3">
                  <CInput label="Speed" placeholder="Enter Speed" />
                </CCol>
                <CCol sm="3">
                  <CInput label="Efficiency" placeholder="Product Efficiency" />
                </CCol>
              </CRow>
              <div class="form-actions">
                <CButton type="submit" color="primary">Create Product</CButton>
                <CButton class="mx-3" color="secondary">Cancel</CButton>
              </div>
            </CCardBody>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: "Forms",
  data() {
    return {
      options: [
        "CPU",
        "Motherboard",
        "Memory",
        "Storage",
        "GPU",
        "Case",
        "Power Supply",
        "Monitor",
      ],
    };
  },
  methods: {},
};
</script>
