<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://coreui.io" target="_blank">ARK & Co.</a>
      <span class="ml-1">&copy; {{ new Date().getFullYear() }}</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://coreui.io/vue">Ayo Rakit Komputer</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
