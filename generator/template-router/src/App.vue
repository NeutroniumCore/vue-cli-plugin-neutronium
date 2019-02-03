---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /export default {/
---

<%# REPLACE %>
export default {
  watch: {
    "viewModel.Router.Route": function(path) {
      if (path) this.$router.push({ path });
    },
  },
<%# END_REPLACE %>